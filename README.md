# Álvaro Zarzuela — Portfolio

Software Engineer & Builder · Founder of **Valiware Loyalty** · Applied AI & Cryptographic Systems

**Live:** https://alvarozcode.github.io/Portfolio-Web/

A single-page, bilingual (EN default / ES) portfolio built with plain HTML, CSS and JavaScript. No framework or build step. It is deployed as-is on GitHub Pages.

## Structure

```
index.html        Single-page markup (all sections, inline SVG icon sprite)
styles.css        Design tokens (dark/light), layout, components, motion
main.js           Language switch, theme toggle, mobile nav, scroll reveal
i18n.js           EN / ES translation dictionary
404.html          Not-found page; redirects legacy URLs (proyectos.html…) to sections
assets/
  cv-english.pdf  English CV (hero button in EN view)
  cv-spanish.pdf  Spanish CV (hero button in ES view)
  favicon.svg
  img/profile.jpeg
```

## How translation works

- Translatable text carries `data-i18n="section.key"`, and translatable attributes carry `data-i18n-attr="aria-label:key"`.
- `i18n.js` exposes `window.I18N = { en: {...}, es: {...} }`. `main.js` swaps the text in place without reloading the page and stores the choice in `localStorage`.
- English is the default. Technology names and badges are deliberately not translated.
- To add a string, add the key to **both** `en` and `es` in `i18n.js`, then reference it in `index.html`.

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

## Contact

alvarozcode@gmail.com · [LinkedIn](https://www.linkedin.com/in/%C3%A1lvaro-zarzuela-moncada-98938035b/) · [GitHub](https://github.com/alvarozcode)
