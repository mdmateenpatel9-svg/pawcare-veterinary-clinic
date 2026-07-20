# 🐾 PawCare Veterinary Clinic — Premium Website Demo

A portfolio demo website built by **Mateen Sites** — showcasing an agency-quality, $10,000-tier veterinary clinic website.

> **Demo Notice:** PawCare Veterinary Clinic is a fictional business created solely to demonstrate web design and development capability. This is not a real clinic.

---

## ✨ Tech Stack

- **React 18** + **Vite** — fast dev server, optimized production build
- **Tailwind CSS** — utility-first styling with a custom design system
- **Framer Motion** — scroll reveals, micro-interactions, page transitions
- **React Router** — routing shell (ready to expand into multi-page)
- **Lucide React** — icon set
- **react-helmet-async** — per-page SEO meta management

## 📁 Project Structure

```
pawcare/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # All reusable UI sections (Navbar, Hero, Services, etc.)
│   ├── data/content.js     # All business copy — edit this file to rebrand the site
│   ├── pages/Home.jsx      # Assembles all sections for the homepage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               # SEO meta, Open Graph, Twitter cards, Schema.org JSON-LD
├── tailwind.config.js       # Design tokens (colors, fonts, shadows, animations)
├── netlify.toml              # Netlify build + redirect + caching config
└── package.json
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## 🏗️ Build for Production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

Output is generated in `dist/`.

## ☁️ Deploy to Netlify

**Option A — Netlify UI:**
1. Push this project to a GitHub repository.
2. In Netlify, click **Add new site → Import an existing project**.
3. Connect the repo. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**.

**Option B — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Contact Form (Netlify Forms)

The appointment form on the Contact section is wired for **Netlify Forms** out of the box — no backend needed:
- A hidden static form in `index.html` lets Netlify's build bot detect the form.
- The React form in `src/components/Contact.jsx` submits via a `fetch` POST, so it works as a client-rendered SPA form.
- Submissions will appear in your Netlify dashboard under **Site → Forms** once deployed.
- A honeypot field (`bot-field`) is included for spam protection.

If you'd rather use a different provider (Formspree, EmailJS, custom backend), just swap the `handleSubmit` logic in `Contact.jsx`.

## 🎨 Customizing for a New Client

1. **Business info & copy:** edit `src/data/content.js` — name, phone, address, hours, services, team, testimonials, FAQ.
2. **Colors & fonts:** edit `tailwind.config.js` under `theme.extend.colors` and `fontFamily`.
3. **Images:** replace the `picsum.photos` placeholder URLs throughout `src/components/*.jsx` with real client photography (search-and-replace `src="https://picsum.photos/...`).
4. **SEO:** update `index.html` meta tags and the Schema.org JSON-LD block, plus `public/sitemap.xml` and `public/robots.txt` with the real production domain.
5. **Google Map:** in `Contact.jsx`, replace the iframe `src` query (`Austin,Texas`) with the real clinic address.

## ✅ What's Included

- Fully responsive (mobile, tablet, laptop, desktop)
- Sticky glass navbar with mobile drawer menu
- Animated hero with live stat counters
- 8-service grid, "Why Choose Us" checklist, facilities showcase
- Team profiles, testimonials, FAQ accordion
- Appointment CTA banner + working contact form
- Floating WhatsApp button
- SEO: meta tags, Open Graph, Twitter Cards, Schema.org `VeterinaryCare` structured data, sitemap, robots.txt
- Accessible: semantic markup, focus states, `prefers-reduced-motion` support, ARIA labels
- Performance: code-split vendor chunks, lazy-loaded images, minimal dependencies

## 📄 License

This template was built for portfolio and client-resale purposes by Mateen Sites. Replace all placeholder content and imagery before delivering to a real client.
