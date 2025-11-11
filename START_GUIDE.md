# 🚀 Ghid de pornire rapidă - Website ROAI

## ✅ Ce am creat

Am transformat single-page HTML-ul original într-un **site multipager modern** cu Next.js, folosind culorile specificate:
- ✨ **7 pagini complete**: Acasă, Despre, Documente, Calendar, Hall of Fame, Sponsori, Contact
- 🎨 **Design consistent**: alb, blue-700, blue-200, negru
- 📱 **Responsive**: funcționează perfect pe mobile, tablet și desktop
- ♿ **Accesibil**: skip links, aria labels, semantic HTML
- 🔍 **SEO optimizat**: metadata completă pentru fiecare pagină

## 🏃 Cum pornești site-ul

### 1. Pornire rapidă (development)

```bash
npm run dev
```

Apoi deschide: http://localhost:3000

### 2. Build pentru producție

```bash
npm run build
npm start
```

## 📂 Structura site-ului

```
/ (Acasă)
├── /despre          - Informații despre olimpiadă
├── /documente       - Regulamente, resurse, cursuri
├── /calendar        - Calendar ONIA 2026 cu timeline
├── /hall-of-fame    - Campionii olimpiadei
├── /sponsori        - Parteneri și echipa
└── /contact         - Formulare contact + newsletter
```

## 🎨 Paleta de culori folosită

- **Alb** (`#ffffff`) - Fundal principal
- **Albastru închis** (`blue-700` / `#1d4ed8`) - Butoane, header-e, accente principale
- **Albastru deschis** (`blue-200` / `#bfdbfe`) - Borduri, fundal secundar
- **Negru** (`#000000`) - Text, footer

## 📋 Paginile create

### 1. **Acasă** (`/`)
- Hero section impresionant cu gradient albastru
- 3 card-uri cu link-uri rapide (Învață AI, Calendar, Campioni)
- Secțiune statistici
- Call-to-action pentru newsletter

### 2. **Despre** (`/despre`)
- Descriere completă olimpiadă
- Beneficii participare (3 card-uri)
- Secțiune parteneri

### 3. **Documente** (`/documente`)
- Documente oficiale (regulament, program, etc.)
- Resurse educaționale (PyML.ro)
- Cursuri online recomandate (categorii: începător, intermediar)
- Probleme din ediții anterioare (Locală, Județeană, Națională)

### 4. **Calendar** (`/calendar`)
- Timeline vertical cu toate etapele ONIA 2026
- Fiecare etapă are: dată, descriere, badge-uri colorate
- Design inspirat din HTML original

### 5. **Hall of Fame** (`/hall-of-fame`)
- Campionii IOAI 2025 Beijing (2 echipe)
- Card-uri pentru fiecare campion cu medalii
- Fallback pentru poze lipsă (inițiale în cercuri)

### 6. **Sponsori** (`/sponsori`)
- Organizatori (12 instituții)
- Sponsori (Bitdefender, Head Innovation)
- Echipa: Organizare, Comisie Științifică, Echipa Tehnică
- CTA pentru a deveni partener

### 7. **Contact** (`/contact`)
- Formular de contact funcțional
- Formular newsletter cu tipuri de abonare
- Informații de contact (email, adresă)
- Handlere pentru success/error messages

## 🔧 Componente reutilizabile

### Header (Navbar)
- **Desktop**: Meniu orizontal cu link-uri către toate paginile
- **Mobile**: Hamburger menu cu overlay
- Logo "ROAI" clickabil (revine la home)
- Sticky position (rămâne vizibil la scroll)

### Footer
- 3 coloane: Despre ROAI, Link-uri rapide, Contact
- Copyright dinamic cu anul curent
- Design negru cu accente albastru deschis

## 📦 Assets necesare

Am creat structura de directoare și un logo placeholder. Vezi `ASSETS_GUIDE.md` pentru detalii despre:
- Logo-uri organizatori (`public/logos/`)
- Poze echipă (`public/images/programatori/`)
- Poze campioni (`public/images/`)
- Documente (`public/documente/`)

## ✨ Caracteristici tehnice

- ✅ **TypeScript** - Type safety
- ✅ **Next.js App Router** - Routing modern
- ✅ **Tailwind CSS 4** - Styling utility-first
- ✅ **React Server Components** - Performance
- ✅ **Client Components** - Doar unde e necesar (Header, Contact)
- ✅ **Metadata API** - SEO pentru fiecare pagină
- ✅ **Responsive Design** - Mobile-first approach

## 🐛 Troubleshooting

### Site-ul nu pornește?
```bash
npm install
npm run dev
```

### Erori de Tailwind?
```bash
npm install -D tailwindcss@latest @tailwindcss/postcss@latest
```

### Imagini nu se încarcă?
- Verifică că fișierele sunt în `public/`
- Calea trebuie să înceapă cu `/` (ex: `/logos/roai.svg`)

## 📝 Următorii pași

1. **Mută assets-urile** din HTML-ul vechi (vezi `ASSETS_GUIDE.md`)
2. **Testează formularul** - conectează-l la backend real
3. **Optimizează imaginile** - folosește `next/image`
4. **Adaugă Analytics** - Google Analytics sau similar
5. **Deploy** - Vercel, Netlify sau alt hosting

## 🎯 Comparație cu HTML-ul original

| Caracteristică | HTML Original | Site Nou Next.js |
|----------------|---------------|------------------|
| Pagini | 1 (single page) | 7 (multipager) |
| Navigare | Scroll + anchors | Route-uri dedicate |
| Responsive | Tailwind CDN | Tailwind optimizat |
| SEO | Basic meta tags | Metadata API completă |
| Performance | ~OK | Excelent (SSR + SSG) |
| Maintenance | Dificil (1 fișier) | Ușor (modular) |

## 💡 Sfaturi

- **Dezvoltare**: Folosește `npm run dev` pentru hot-reload automat
- **Debugging**: Verifică consola browser-ului pentru erori
- **Styling**: Toate clasele Tailwind sunt în fișierele `.tsx`
- **Navigare**: Header-ul este mereu vizibil (sticky)

## 📧 Suport

Pentru întrebări: contact@olimpiada-ai.ro

---

**Creat cu ❤️ pentru ROAI 2025-2026**
