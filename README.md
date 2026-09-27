# Family Bakery

A responsive landing page for a neighborhood bakery, featuring its story, location, daily baking, contact details, and opening hours.

## Key features

- Semantic HTML5 sections and keyboard-accessible navigation
- Responsive layouts for phones, tablets, and desktop screens
- Bakery photography with descriptive alternative text
- Accessible contact form that prepares an enquiry in the visitor's email app
- Reduced-motion support, visible focus states, and interactive hover feedback

## Preview

Open `index.html` in a modern browser. The page uses local photography from `images/`; Google Fonts are loaded online when available.

## Tech stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, and responsive media queries)
- Vanilla JavaScript (ES6+)
- Google Fonts: Alegreya and Alegreya Sans

## Project structure

```text
index.html
CSS/
  style.css
images/
  bakery and location photography
script.js
```

## Contact form

Submitting the form opens the visitor's configured email app with the enquiry addressed to `hello@sitename.com`. A deployed form service or server endpoint can replace this handoff if direct web submissions are needed.