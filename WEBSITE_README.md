# Website ROAI - Olimpiada Națională de Inteligență Artificială

Site multipager modern pentru Olimpiada Națională de Inteligență Artificială (ROAI), dezvoltat cu Next.js 14+ și Tailwind CSS.

## 🎨 Design

Site-ul folosește o paletă de culori simplă și profesională:
- **Alb** (#ffffff) - fundal principal
- **Albastru închis** (blue-700 / #1d4ed8) - elemente principale, butoane, headere
- **Albastru deschis** (blue-200 / #bfdbfe) - accente, borduri
- **Negru** (#000000) - text, footer

## 📁 Structura proiectului

```
src/
├── app/
│   ├── layout.tsx          # Layout principal cu Header și Footer
│   ├── page.tsx            # Pagina de acasă
│   ├── despre/
│   │   └── page.tsx        # Despre olimpiadă
│   ├── documente/
│   │   └── page.tsx        # Documente și resurse
│   ├── calendar/
│   │   └── page.tsx        # Calendar ONIA 2026
│   ├── hall-of-fame/
│   │   └── page.tsx        # Campioni olimpiadei
│   ├── sponsori/
│   │   └── page.tsx        # Sponsori și parteneri
│   └── contact/
│       └── page.tsx        # Contact și newsletter
├── components/
│   ├── Header.tsx          # Navbar cu navigare
│   └── Footer.tsx          # Footer cu info și linkuri
└── globals.css             # Stiluri globale Tailwind
```

## 🚀 Pagini

1. **Acasă** (`/`) - Hero section, statistici, CTA către alte secțiuni
2. **Despre** (`/despre`) - Informații despre olimpiadă, beneficii
3. **Documente** (`/documente`) - Regulamente, resurse educaționale, cursuri, probleme
4. **Calendar** (`/calendar`) - Timeline complet ONIA 2026
5. **Hall of Fame** (`/hall-of-fame`) - Campionii care au reprezentat România
6. **Sponsori** (`/sponsori`) - Parteneri, sponsori și echipa
7. **Contact** (`/contact`) - Formular contact și newsletter

## 🛠️ Tehnologii

- **Next.js 16** - Framework React cu App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling utility-first
- **React 19** - UI library

## 📦 Instalare și rulare

```bash
# Instalare dependențe
npm install

# Rulare în modul development
npm run dev

# Build pentru producție
npm run build

# Rulare versiune de producție
npm start
```

Site-ul va fi disponibil la `http://localhost:3000`

## 🎯 Caracteristici

- ✅ Design responsive (mobile-first)
- ✅ SEO optimizat cu metadata pentru fiecare pagină
- ✅ Navigare cu Header sticky
- ✅ Formulare funcționale (contact + newsletter)
- ✅ Accesibilitate (skip links, aria labels)
- ✅ Timeline interactiv pentru calendar
- ✅ Cards pentru documente și resurse
- ✅ Secțiune Hall of Fame cu medalii

## 📝 TODO

- [ ] Adăugare imagini și logo-uri în directorul `public/`
- [ ] Conectare formular la backend real
- [ ] Adăugare Google Analytics / Tag Manager
- [ ] Optimizare imagini (next/image)
- [ ] Adăugare animații (framer-motion)

## 🎨 Customizare culori

Pentru a modifica culorile, editează:
- Clasele Tailwind în componente (ex: `bg-blue-700` → `bg-blue-600`)
- Variabilele din `globals.css` dacă sunt adăugate custom properties

## 📱 Assets necesare

Plasează următoarele în directorul `public/`:
- `/logos/` - Logo-uri organizatori, sponsori
- `/images/` - Poze campioni Hall of Fame
- `/documente/` - PDF-uri, documente descărcabile

## 📧 Contact

Pentru întrebări despre site: contact@olimpiada-ai.ro
