# Venn Ruga Portfolio (React)

A Glint-inspired dark portfolio website customized for **Venn Laurence R. Ruga**.

## Features

- Dark modern design with near-black background and green accent theme
- Sticky responsive navbar with smooth scroll links and active section highlighting
- Hero with improved spacing, typewriter roles, and leadership stats strip
- Dedicated sections: Skills, About, Biography, Background, Leadership, Achievements, Gallery, Seminars, Portfolio, Contact
- Scroll reveal animations using IntersectionObserver
- Shared social links config via `src/constants/social.js`

## Tech Stack

- React.js (functional components)
- CSS (custom global style system)
- react-icons
- react-scripts

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Personalization

- [ ] Add hero headline/tagline in Hero.jsx
- [ ] Add personal bio in About.jsx
- [ ] Add biography paragraphs in Biography.jsx
- [ ] Add technical skills details in Skills.jsx cards if needed
- [ ] Replace Facebook URL in constants/social.js
- [ ] Replace GitHub URL in constants/social.js
- [ ] Add your photo to /public/photo.jpg and update src
- [ ] Add CV PDF to /public/Ruga_CV.pdf
- [ ] Replace project placeholders in Portfolio.jsx
- [ ] Add your photo in About section
- [ ] Add actual images to /public/gallery/ folder
- [ ] Update image paths in Gallery.jsx items array
- [ ] Recommended format: JPG/WebP, max 1200px wide

## Build for Production

```bash
npm run build
```
