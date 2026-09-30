# The Vanguard Initiative — Website

**Tagline:** Raising Pioneers, Not Participants  
**Live URL:** *(add your domain here)*

---

## 📁 File structure

```
tvi-website/
│
├── index.html            ← Home page
├── about.html            ← About Us
├── what-we-do.html       ← What We Do
├── programmes.html       ← EMERGE Programmes
├── get-involved.html     ← Get Involved (volunteer, partner, sponsor)
├── events.html           ← Events
├── impact.html           ← Our Impact
├── donate.html           ← Donate
├── contact.html          ← Contact Us
│
├── assets/
│   ├── style.css         ← All shared styles (colours, fonts, layout)
│   └── main.js           ← All shared JavaScript (forms, nav, interactions)
│
├── _redirects            ← Cloudflare URL redirect rules
└── README.md             ← This file
```

---

## 🚀 Deploying to Cloudflare Pages

### First time setup

1. Push this repo to GitHub.
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select your GitHub repo.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Output directory:** `.` (a single dot)
5. Click **Save and Deploy**. Done — live in ~30 seconds.

### Every update after that

```bash
# Edit any file, then:
git add .
git commit -m "Update homepage hero text"
git push
# Cloudflare auto-deploys in ~30 seconds
```

---

## ✏️ How to edit each page

Each page is a standalone HTML file. Open the file you want, find the section, edit the text, save, and push.

| What you want to change | File to open |
|---|---|
| Home hero, intro, programme cards | `index.html` |
| Founder story, vision/mission, values | `about.html` |
| 5 pillars, delivery model | `what-we-do.html` |
| EMERGE programmes, enquiry form | `programmes.html` |
| Volunteer/partner/sponsor form | `get-involved.html` |
| Upcoming events, mailing list | `events.html` |
| Impact stats, testimonials | `impact.html` |
| Donation amounts, payment details | `donate.html` |
| Contact info, email, phone, address | `contact.html` |
| Navigation bar, footer links | All pages share the same nav/footer HTML — edit in each file OR ask your developer to build a component system |
| All colours and fonts | `assets/style.css` — edit the `:root {}` variables at the top |
| Form behaviour, buttons | `assets/main.js` |

---

## 🎨 Changing colours

Open `assets/style.css` and find the `:root` block at the very top:

```css
:root {
  --gold: #C9A84C;           /* ← main accent colour */
  --gold-light: #E2C47A;
  --gold-dark: #A07830;
  --navy: #0F1F3D;           /* ← primary dark colour */
  --navy-mid: #162848;
  ...
}
```

Change any hex value there and it updates everywhere on the site automatically.

---

## 📬 Connecting real forms (Formspree — free)

Currently, forms show a success message on the screen only. To receive real emails:

1. Go to [formspree.io](https://formspree.io) → create a free account.
2. Create a new form → copy your form ID (looks like `xpwzabcd`).
3. Open `assets/main.js` and in `submitContactForm()`, replace the section with:

```js
async function submitContactForm() {
  const data = {
    name:    document.getElementById('cName').value,
    email:   document.getElementById('cEmail').value,
    subject: document.getElementById('cSubject').value,
    message: document.getElementById('cMessage').value,
  };
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    document.getElementById('contactFormContent').style.display = 'none';
    document.getElementById('contactFormSuccess').style.display = 'block';
  }
}
```

Repeat the same pattern for `submitProgrammeForm()` and `submitInvolveForm()`.

---

## 💳 Connecting donations

The donate page is UI-only. Add a payment provider when ready:

- **Stripe** — most flexible, supports one-off + recurring
- **PayPal Giving Fund** — free for registered UK charities
- **Donorbox** — charity-specific, embeds as an iframe easily

---

## 📋 Content placeholders to fill in

Search each file for these and replace with real information:

| Placeholder | Where |
|---|---|
| `[Email address to be added]` | `contact.html` |
| `[Phone number to be added]` | `contact.html` |
| `[Office address to be added]` | `contact.html` |
| `Participant story coming soon` | `impact.html` |
| `Placeholder — to be updated` | `impact.html` (stats) |
| `Payment details coming soon` | `donate.html` |
| Social media `href="#"` links | All pages (footer + contact) |

---

## 📄 Legal checklist before going live

- [ ] Add real Privacy Policy page
- [ ] Add real Terms & Conditions page  
- [ ] Add charity registration number to footer
- [ ] Connect real contact form backend
- [ ] Test donation payment flow
- [ ] Add cookie notice if using analytics (Google Analytics, etc.)

---

Built for The Vanguard Initiative · © 2025
