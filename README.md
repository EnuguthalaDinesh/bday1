# Happy Birthday Bhargavi (Next.js)

A seven-page birthday website with hanging photos, wandering pandas, gentle pranks,
wishes in Indian languages and scratch cards.

## 1. Personalise it (2 minutes)
Open `data/config.js` and change:
- `from`: your name (shown in the letter and finale)
- `photos`: quotes, captions and alt text. The pictures are in `public/photos/`
  (replace a file but keep its name, or add new ones and list them).
- `letter`, `wishes` and `cards`: any text you like.

## 2. Run it on your computer
```
npm install
npm run dev
```
Open http://localhost:3000

## 3. Deploy it (free)
**Vercel (easiest):** push this folder to GitHub, import the repo on vercel.com, click Deploy.
**Netlify (drag and drop):** run `npm run build`, then drag the new `out/` folder onto app.netlify.com/drop.
**Any static host:** `npm run build` creates a plain `out/` folder you can upload anywhere.

Share the link with her on her birthday.

## Notes
- Fonts load from Google Fonts, so the site needs an internet connection to look its best.
- Animations switch off automatically for people who prefer reduced motion.
