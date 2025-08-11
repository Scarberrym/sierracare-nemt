# SierraCare Dialysis Transport – Web App (Vercel)

A minimal, production-ready Next.js app for booking NEMT rides. Deployed on Vercel.

## Features
- Next.js 14 App Router
- Booking request form → serverless API (`/api/bookings`)
- Simple, clean UI + header/footer
- Ready for domain on GoDaddy

---

## 1) Local Setup
```bash
npm install
npm run dev
```
Visit http://localhost:3000

---

## 2) Deploy to Vercel
1. Create a free account at vercel.com and install the Vercel CLI (optional).
2. Push this folder to a GitHub repo **or** import the folder directly in Vercel.
3. In Vercel, **New Project** → Framework: Next.js → build defaults are fine.
4. Add any environment variables you need (see `.env.example`), then **Deploy**.

The public URL will look like `https://<project>.vercel.app`.

---

## 3) Connect Your GoDaddy Domain (sierracarenemt.com)
In Vercel → Project → **Settings → Domains** → `Add` your domain.

Vercel will show you **exact DNS records** to add in GoDaddy:
- CNAME for `www` → cname.vercel-dns.com
- A or ALIAS for root `@` → Vercel’s record (or use `A` records Vercel provides)

**In GoDaddy**: Domain → **Manage DNS** → **Add** the records exactly as Vercel shows.
Propagation can take 15–60 minutes (up to 24 hours).

Enable **SSL** in Vercel (it’s automatic once DNS is correct).

---

## 4) Email at @sierracarenemt.com (optional)
Use Google Workspace, Microsoft 365, or Zoho.
Add provider **MX** and **TXT** records in GoDaddy. Then set SPF/DKIM to avoid spam.

---

## 5) Optional Enhancements
- Replace `/api/bookings` to save to a database (PlanetScale, Neon, Supabase)
- Send confirmation emails (Resend or SendGrid)
- Add admin page to view bookings with password protection
- Add geocoding/distance (Mapbox/Google Maps) for pricing and routing

---

## Brand Assets
`/public/logo.png` is a placeholder. Replace with your finalized SierraCare logo when ready.
