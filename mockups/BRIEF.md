# Mockup brief (shared by all variants)

Read `../PRODUCT.md` and `../PLAN.md` first. This file adds what every variant must show.

## Hard rules
- Persian only. `<html lang="fa" dir="rtl">`. Persian digits everywhere (۰۱۲۳۴۵۶۷۸۹), Jalali dates, prices in تومان with Persian thousands separator (٬) or written "۱۷ میلیون".
- Self-contained static HTML/CSS (+ tiny vanilla JS for interactions). NO CDNs, NO Google Fonts, NO Tailwind CDN, NO external URLs at runtime. Fonts via `@font-face` from `../assets/fonts/`, images from `../assets/img/`.
- Icons: hand-authored inline SVG, one consistent stroke/weight. No emoji as icons.
- Real content only (below). Anything we don't have (testimonials, past-trip videos, counts) → visible small label «نمونه» (sample) on it. Never invent prices, numbers of past pilgrims, ratings.
- Accessible for older users: body ≥16px (app ≥16px), tap targets ≥44px, contrast ≥4.5:1, visible labels on every input (no placeholder-only), `inputmode="numeric"` for phone/OTP/national code.
- Respect the sacred subject: no gimmicky effects on shrine imagery, no gradient text, no glass-as-decoration.

## Deliverables per variant folder (`mockups/<variant>/`)
1. `index.html` — **desktop website homepage**, responsive (must also look right at 390px wide). Sections: header/nav (logo, تورها، زائر اولی، اطعام، ویدیوها، ورود/ثبت‌نام), hero, **this week's caravans with seats left** (the core), tour comparison grade الف vs ب, 48-hour trip, first-pilgrim support (50% off + "sponsor a pilgrim"), charity (اطعام نیازمندان), videos/reels (sample), about Seyyedamo (trust), how ordering works (signup → order → hold seat → deposit → confirmed), FAQ short, footer with contact (09001542030, Telegram t.me/seyyedamo, Instagram rafeedeltangi, Eitaa, Bale) + PWA "install app" prompt.
2. `app.html` — **PWA phone screens board**: a presentation page showing real HTML phone frames (390×844 each, rounded device frame, status bar) laid out in a horizontal row/grid with a short Persian caption under each. Screens:
   1. App home (bottom tab bar: خانه، تورها، سفرهای من، پروفایل — max 5 tabs), this week's caravans, seats left, install banner.
   2. Tour detail — grade الف (itinerary day by day, includes, hotel, bus, dates, seats left, price, sticky «رزرو» button).
   3. Login — phone number entry, then OTP 6-digit screen (can be 2 frames).
   4. Order step: travelers — count stepper, per-traveler name, national code, gender, first-pilgrim toggle, room/companion preference (family grouping). Show step indicator «مرحله ۲ از ۴».
   5. Order step: passport — passport number, expiry, photo upload (one uploaded state with thumbnail, one empty).
   6. Review & seat held — summary, total, "seat held for 24 hours" countdown, deposit instructions (card-to-card: card number placeholder «۶۰۳۷-…» labeled نمونه) + upload receipt button.
   7. My trips — order statuses: در انتظار پرداخت بیعانه / تأیید شده / تکمیل‌شده.
   8. Admin (one frame): admin tour list with seat counter +/- and «تکمیل» toggle, new orders badge.
3. Variant must feel like ONE design system across website and app.

## Real content (Oct 2026)
Brand: **کاروان رفع دلتنگی** — run by **سیدمو** (Seyyedamo): مدرس و مترجم زبان انگلیسی، خبرنگار امور بین‌الملل، خادم آستان، شف، گردشگر. Instagram ۲۴۶ هزار دنبال‌کننده (real, from profile). Telegram channel «برنامه سفرهای رفع دلتنگی» ۱۲٫۶ هزار عضو (real).

Tours this week (themed «ویژه میلاد حضرت زینب (س)»):
- **کاروان هتلی درجه الف — کربلا ۴ روزه**: رفت سه‌شنبه صبح ۲۱ مهر، برگشت جمعه صبح ۲۴ مهر. ۲ شب کربلا هتل الف با غذای فول‌برد. زیارت نجف عبوری. اتوبوس VIP و غذای مسیر رفت و برگشت. هزینه: ۱۷ میلیون تومان. Status: **تکمیل** (full).
- **کاروان هتلی درجه ب — کربلا ۴ روزه**: same dates/itinerary, hotel ب. هزینه: ۱۳٬۸۰۰٬۰۰۰ تومان. **۵ نفر ظرفیت** left.
- **کربلا | سفر اقتصادی ۴۸ ساعته**: حرکت از تهران، چهارشنبه ۲۲ مهر ساعت ۱۳:۰۰، بازگشت به تهران سحر جمعه ۲۴ مهر. سفر زیارتی بدون اسکان، صبحانه در مسیر رفت، یک وعده غذا در مسیر برگشت، اتوبوس VIP در مسیر ایران. ویژگی‌ها: زیارت عبوری نجف، حضور در کربلا در شب جمعه. «فقط ۴۸ ساعت… اما با یک شب جمعه در کربلا». هزینه: ۸٬۵۰۰٬۰۰۰ تومان. **۵ نفر ظرفیت**. ویژه زائر اولی‌ها: ۵۰٪ تخفیف.
Next week (ویژه شهادت اول حضرت زهرا (س) — فاطمیه اول):
- کاروان هتلی درجه الف: رفت سه‌شنبه صبح ۲۸ مهر، برگشت جمعه صبح ۱ آبان. ۲ شب هتل الف فول‌برد، نجف عبوری، VIP. هزینه: ۱۷٬۳۰۰٬۰۰۰ تومان.
- کاروان هتلی درجه ب: رفت سه‌شنبه صبح ۲۸ مهر. (price not announced → «به‌زودی»).

Policies: زائر اولی‌ها از کمک‌هزینه برخوردارند. با پرداخت بیعانه، در صورت افزایش قیمت دلار، قیمت ثابت خواهد بود. هتل با غذا بدون ترانسفر و ترانسفر بدون هتل هم امکان‌پذیر است.
Seyyedamo's other work (Instagram highlights): اطعام نیازمندان، اعزام زائر اولی، بیست قدم تا بهشت، احادیث.

## Assets (`mockups/assets/`)
Fonts (all OFL / free, self-hosted): `Vazirmatn.ttf` (variable 100–900, UI workhorse), `ArefRuqaa-Regular/Bold.ttf` (Ruqa calligraphic display), `Amiri-Regular/Bold.ttf` (classical Naskh), `NotoNaskhArabic.ttf` (variable Naskh), `Lalezar-Regular.ttf` (bold Persian poster display), `MarkaziText.ttf` (variable, editorial Naskh-flavored text face), `ReadexPro.ttf` (variable geometric Arabic-script sans).

Images (`img/`):
- `logo.jpg` — brand logo (green circle, white calligraphy, green flag). White background.
- `karbala2.jpg` 900×579 — Imam Husayn shrine at night, full moon, gold dome, red-lit arches (BEST hero). Source: existing repo (credit «karbobala.com» watermark bottom-left; crop it out).
- `Karbala.jpg` 730×457 — gold dome + red flag against blue sky (existing repo).
- `courtyard-husayn.jpg` 1920×1440 — crowded courtyard, red arches, chandeliers (Wikimedia, CC BY-SA 4.0).
- `abbas-bayn-alharamayn.jpg` 1920×1440 — Bayn al-Haramayn at night, pilgrims, red lights (Wikimedia, CC0).
- `najaf-2023.jpg` 1920×1280 — Imam Ali shrine Najaf, daylight gold dome (Wikimedia, CC BY-SA 4.0).
- `inside-husayn.jpg` 1000×611 — the zarih with pilgrims' hands (Wikimedia, CC BY 4.0).
- `husayn-tasnim.jpg` 705×469 — gold dome + red flag on deep blue night (Wikimedia, CC BY 4.0, Tasnim).
- `arbaeen-walk.jpg` 749×533 — children serving food during Arbaeen (Wikimedia, CC BY 4.0) — good for charity section.
- `husayn-1850.jpg` 1200×836 — 1850 engraving of the shrine (public domain) — heritage texture.
- `seyyedamo-avatar.jpg` 250×250 — Seyyedamo's public Instagram profile photo (green shawl, sunglasses), low-res; crop to circle, has a ring border baked in at edges — use object-fit + scale to hide it. Use small only (≤96px).
- `Mashhad.jpg`, `Dameshgh.jpg` — for "coming soon" destinations.
Add a small «اعتبار تصاویر» credits line in the footer listing Wikimedia licenses.
