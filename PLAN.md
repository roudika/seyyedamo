# Seyyedamo / کاروان رفع دلتنگی — Refactor Plan

Status: **Phase 1 — prototyping & mockups.** No production code until a design variant is chosen.

## 1. Verified facts

| Fact | How verified |
|---|---|
| Repo `roudika/seyyedamo`, branch `main`, last commit `93bb355` | `gh repo clone`, `git log -1` |
| Current site = 2 static files (`index.html` 40 KB, `app2.html` 29 KB), React 18 + Tailwind + Babel from CDN (unpkg, cdn.tailwindcss.com), Google Fonts Vazirmatn | `ls -la`, `grep` for URLs |
| Current site lists old destinations (Mashhad, Karbala, Syria, Oman, Lebanon, Turkey) | `README.md` |
| Assets: `image/logo.jpg` (742×814, green circle calligraphy + flag), `karbala2.jpg` 900×579 (night shrine, moon), `Karbala.jpg` 730×457, others ≤1200 px | `sips` |
| Contact today: WhatsApp/Bale/Eitaa 09001542030, Telegram `t.me/seyyedamo`, Instagram `rafeedeltangi` / `seyyedamo` (246K followers), Telegram channel "برنامه سفرهای رفع دلتنگی" 12.6K members | user screenshots 2026-10-11 |
| Real product today: weekly Karbala caravans. 4-day hotel caravans grade الف (~17,000,000–17,300,000 toman) and grade ب (13,800,000 toman); 48-hour budget trip (8,500,000 toman, no hotel). VIP bus, meals, Najaf transit visit, Tue→Fri dates, seat counts ("۵ نفر ظرفیت", "تکمیل") | user screenshots |
| Offers: first-pilgrim 50% off / financial help; deposit locks price vs dollar rise; "hotel+food without transfer" and "transfer without hotel" options | user screenshots |
| Seyyedamo also runs charity (اطعام نیازمندان), first-pilgrim dispatch (اعزام زائراولی), religious content | Instagram highlights screenshot |
| Persian fonts installed locally for mockups: Vazirmatn (variable), IRYekan, Lalezar | `ls ~/Library/Fonts` |

## 2. Decisions

| Decision | Reason | Rejected alternative |
|---|---|---|
| **PWA only, no store app** | One codebase; Instagram/Telegram link → install; avoids Apple/Play sanctions and Bazaar dev account | Store app (Expo) — extra build, iOS blocked for Iranian devs |
| **Accounts + ordering inside the app** (not messenger) | User request 2026-10-11 | Form → WhatsApp handoff |
| **Login: phone + SMS OTP** | Standard in Iran, no passwords | Phone+password (friction); email fallback (deferred — diaspora with foreign numbers is an open question) |
| **Payment v1: order now, pay later** — seat held, admin confirms, deposit by card-to-card + receipt upload in app | No gateway license needed to launch | Online gateway (needs enamad; add later) |
| **Order form collects**: per-traveler name + national code, passport details + passport photo, first-pilgrim flag, room/companion prefs (gender, family grouping) | User selection | — |
| **Admin panel** (mobile-friendly) for tours, seats, orders, confirmations | Tours change weekly | JSON-in-repo; auto-parse Telegram channel |
| **Scope: Karbala first, extensible** to Mashhad/Syria etc. | Matches what is sold now | Old 6-destination catalog |
| **Extra content**: charity, first-pilgrim support (sponsor someone), videos/Instagram feed | User selection | — |
| **Audience: Iran + diaspora; Persian only, RTL, Persian digits** | User selection | Arabic/English |
| **No runtime CDNs/Google Fonts; self-host all assets** | Must load inside Iran without VPN and outside Iran | Current CDN setup |
| **Design directions to mock**: A Sacred & ornate, B Modern & calm, C Social/personal | User selection | Dark-luxury (not selected) |

## 3. Mockup scope (Phase 1)

`mockups/` — static HTML, self-contained, local fonts/images, opened via file or local server.

Per variant (A, B, C):
1. Desktop homepage (hero, this week's tours with seats left, first-pilgrim, charity, videos, trust)
2. Phone home screen (PWA, bottom tab bar)
3. Tour detail (grade الف vs ب, itinerary, includes, seats)
4. Order flow on phone (OTP login → travelers → passport upload → review → "seat held, pay deposit")

Plus `mockups/index.html` gallery linking all variants side by side.

Real content only (actual tours, prices, dates from screenshots). No lorem ipsum.

## 4. Target architecture (Phase 2, proposed — confirm after design pick)

- Frontend: React-based framework with SSR + PWA (manifest, service worker, install prompt, web push). Versions pinned to latest stable at build time, checked then.
- Backend: API + Postgres; tables `users`, `otp_codes`, `tours`, `tour_variants` (grade, price, seats), `orders`, `travelers`, `documents`, `payments` (receipts), `campaigns` (charity / first-pilgrim sponsorship).
- SMS provider: Iranian (Kavenegar / SMS.ir) — open question.
- Hosting: must be reachable inside and outside Iran — open question.

## 5. Security & privacy notes

- National codes and passport photos are sensitive PII. Encrypt at rest, private storage bucket, signed short-lived URLs, admin-only access with audit log, retention/deletion policy after trip.
- OTP: rate limit per phone + IP, 2-min expiry, hashed codes.
- No secrets in repo; credentials via Proton Pass (`pass-cli`).
- DB never public; services bound to 127.0.0.1 / private IP.

## 6. Open questions

1. Diaspora users with non-Iranian phone numbers — SMS OTP abroad or email fallback?
2. Hosting location (Iranian host vs EU host reachable from Iran) and domain.
3. SMS provider account (who owns it).
4. Charity / sponsorship: collect money in app, or show campaign + card number?
5. Real photos/videos of past caravans available to use?

## 7. Tasks

### Phase 1 — Mockups
- [x] 1. Clone repo, inspect current site and assets
- [x] 2. Requirements Q&A with user
- [x] 3. Write PLAN.md
- [x] 4. Load design skills, define 3 direction briefs (palette, type, layout, motion) — impeccable, ui-ux-pro-max (DB suggested generic Aurora/Inter; rejected, kept UX rules), emil-design-eng, apple-design, mobile-native, animate
- [x] 5. Build shared content file (`mockups/BRIEF.md`) + local fonts/images in `mockups/assets` (Wikimedia photos, licenses listed in BRIEF)
- [x] 6. Variant A — Sacred & ornate (desktop + phone + detail + order flow)
- [x] 7. Variant B — Modern & calm
- [x] 8. Variant C — Social/personal
- [x] 9. Gallery page + screenshots, self-review (RTL, Persian digits, mobile) — espai functional checks: 0 console errors, 0 external requests, 0 broken images, all inputs labelled, no 390px overflow
- [x] 9b. Mockups published for customer review: https://seyyedamo.pages.dev (Cloudflare Pages project `seyyedamo`, created via `cf pages create`; upload via `wrangler pages deploy` because `cf` has no legacy-Pages deploy; noindex header; BRIEF.md excluded). Redeploy: copy `mockups/` minus BRIEF.md/phone.html → `npx wrangler pages deploy <dir> --project-name seyyedamo --branch main`.
- [ ] **GATE 1 — user picks a variant (or a mix) and gives feedback**
- [ ] 10. Refine chosen design (all key screens incl. admin panel)
- [ ] **GATE 2 — user approves final design + answers open questions**

### Phase 2 — Build (detailed after Gate 2)
- [ ] 11. Pick and pin stack; scaffold PWA
- [ ] 12. Auth (OTP), tours, orders, uploads, admin panel
- [ ] 13. Deploy staging
- [ ] **GATE 3 — user review on staging before any production deploy/push**
