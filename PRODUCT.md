# Product

<!-- impeccable:product-schema 1 -->

## Platform

web (responsive website + installable PWA; no store app)

## Stack
Delegated, decided after design pick (see PLAN.md §4). Constraint: no runtime third-party CDNs or Google Fonts — all assets self-hosted so it loads inside Iran without VPN and from abroad.

## Users
- Iranian Shia pilgrims (families, first-timers, many older users on mid-range Android phones) who want a short, affordable Karbala trip, arriving mostly from Seyyedamo's Instagram (246K) and Telegram/Eitaa channels.
- Diaspora Iranians browsing or booking for relatives.
- Admin (Seyyedamo's team) updating weekly tours, seat counts and confirming orders from a phone.

## Product Purpose
Show this week's Karbala caravans with live seat availability and let users sign up (phone + SMS code) and order a seat inside the app: travelers, national code, passport photo, first-pilgrim flag, room preferences. Seat is held; deposit paid later (card-to-card + receipt upload), admin confirms. Success = orders through the app replace WhatsApp back-and-forth.

## Positioning
A trusted, personal caravan run by a known public figure (سیدمو) — "کاروان رفع دلتنگی" ("the caravan that cures longing"). Affordable weekly trips, explicit help for first-time pilgrims (زائر اولی), and charity work alongside tours.

## Operating Context
- Tours change weekly. Typical: 4-day hotel caravan, grade الف (~17,000,000 toman) and grade ب (13,800,000 toman), depart Tuesday morning, return Friday morning, 2 nights Karbala hotel with full-board food, Najaf transit visit, VIP bus with meals both ways. 48-hour budget trip (8,500,000 toman, no hotel, departs Wednesday 13:00 from Tehran, back Friday dawn, one Thursday night in Karbala).
- Trips are themed around religious dates (e.g. ولادت حضرت زینب, شهادت حضرت زهرا).
- Status language: "۵ نفر ظرفیت داره", "تکمیل".
- Options: hotel+food without transfer, transfer without hotel.
- Deposit locks price against dollar increases.

## Capabilities and Constraints
- Persian only, RTL, Persian digits, Jalali dates, prices in toman.
- Phone + SMS OTP login. Diaspora phone numbers: undecided.
- Order now, pay later (v1). Online gateway later.
- Admin panel for tours/seats/orders.
- Extra sections: charity (اطعام نیازمندان), first-pilgrim support/sponsorship, videos/Instagram feed.
- Scope: Karbala first, extensible to Mashhad/Syria later.

## Brand Commitments
- Name: کاروان رفع دلتنگی. Logo: green circle with white calligraphy + green flag (`image/logo.jpg`).
- Face of the brand: سیدمو (Seyyedamo), journalist, English teacher, chef, traveler, servant of the shrine.
- Contact: 09001542030 (WhatsApp/Bale/Eitaa), t.me/seyyedamo, instagram rafeedeltangi / seyyedamo.

## Evidence on Hand
- Real tour data from posters/channel (Oct 2026).
- Photos: `image/karbala2.jpg` (night shrine), `image/Karbala.jpg`; old destination photos for later.
- Absent: testimonials, trip counts, past-caravan photos/videos, ratings. Do not fabricate — mark as placeholder.

## Product Principles
1. Seats-left and price are the truth; always visible and current.
2. Trust through a real person, not corporate polish.
3. Easy for a first-time, older pilgrim on a phone.
4. Respectful of the sacred subject.

## Accessibility & Inclusion
Older users: large tap targets, readable type (≥16px body), high contrast, simple flows.
