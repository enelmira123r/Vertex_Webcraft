# Vertex — Studio Web

Website i agjencisë (stil minimalist "Clay") + 3 website demonstrimi reale.

## 📂 Struktura
- `index.html` · `styles.css` · `script.js` — faqja kryesore e agjencisë
- `demos/` — 3 website reale demonstrimi:
  - `bella.html` — restorant
  - `lumi.html` — sallon bukurie
  - `fitzone.html` — palestër
- `images/` — pamjet (screenshot) e demo-ve, që shfaqen në portofol
- `favicon.svg` — ikona te tab-i i browser-it
- `brand/` — logoja për t'u përdorur kudo:
  - `logo-vertex-black.png` — për sfond të çelët (Instagram, kartëvizita, dokumente)
  - `logo-vertex-white.png` — për sfond të errët

## ▶️ Si ta hapësh
Kliko dy herë mbi `index.html`. Te seksioni "Puna", kliko një projekt → hapet demo-ja reale.

## ✏️ Çfarë të zëvendësosh (kërko `TODO`)
1. **Emri** — Find & Replace fjalën `Vertex` te `index.html`.
2. **Çmimet** — te seksioni Paketat (`index.html`).
3. **Kontaktet** — email, telefon, WhatsApp (`355600000000`), Instagram — te `index.html` dhe `script.js` (`var EMAIL`).

## 🖼️ Kur të kesh klientin e parë real
- Vendos faqen e tij te `demos/` (ose lidhe me faqen e tij live)
- Bëj një screenshot dhe ruaje te `images/`
- Shtoje si kartelë te seksioni "Puna" në `index.html`
- Hiq fjalën "Demo" nga kategoria kur është projekt real i paguar

## 🔄 Si të rigjenerosh screenshot-et e demo-ve (Windows)
```powershell
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $edge --headless=new --disable-gpu --window-size=1280,860 --screenshot="images/bella.png" "file:///C:/RRUGA/demos/bella.html"
```

## 🌐 Publikim falas (link real)
Tërhiq të gjithë dosjen `website.wbsite` te https://app.netlify.com/drop → merr një link live për sekonda. Demo-t dhe fotot funksionojnë automatikisht.

## 🎨 Ngjyrat
Te `styles.css` → `:root`: `--paper` (sfondi), `--ink` (teksti).

---
Ndërtuar me ❤️
