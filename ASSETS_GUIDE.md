# Ghid pentru mutarea assets-urilor

Acest document descrie ce fișiere trebuie mutate din HTML-ul original în directorul `public/` al proiectului Next.js.

## 📁 Structura necesară în `public/`

```
public/
├── logos/
│   ├── roai.svg
│   ├── bitdefender.95ae000c.png
│   ├── hria.png
│   ├── minister.webp
│   ├── upir.jpeg
│   ├── unibu-2.jpeg
│   └── oraganizatori/
│       ├── unstpb.3a713b2d.jpeg
│       ├── airomania.26d19a99.jpg
│       ├── aria.1e05057e.png
│       ├── ilds.eb7cf084.png
│       ├── uaic.85d0bb79.webp
│       ├── ubb.db2f1971.svg
│       ├── upt.da1e7ae2.jpg
│       └── uvt.4dcbccb2.png
├── images/
│   └── programatori/
│       ├── emilonea.jpg
│       ├── danielpopa.jpg
│       ├── liviu.png
│       ├── denistroncota.jpeg
│       ├── colca.jpeg
│       ├── alexbotici.jpeg
│       ├── rusudinu.jpeg
│       ├── rochian.png
│       ├── mihainan.jpeg
│       └── dimitriu.jpeg
│   └── (poze campioni Hall of Fame)
│       ├── mihai_mocanu.jpg
│       ├── roland_petrean.jpg
│       ├── mircea_rebengiuc.jpg
│       ├── stefan_asandei.jpg
│       ├── tudor_musat.jpg
│       ├── tudor_morariu.jpg
│       ├── alex_dumitrascu.jpg
│       ├── simon_slanina.jpg
│       ├── andrei_letu2024.jpg
│       ├── tudor_musat2024.jpg
│       ├── bogdan_miron2024.jpg
│       ├── tudor_morariu2024.jpg
│       ├── moldovan_2024.jpg
│       ├── stanciu_2024.jpg
│       ├── nicolae_2024.jpg
│       ├── rebengiuc_2024.jpg
│       ├── botnaru_2024.jpg
│       ├── bratoveanu_2024.jpg
│       ├── dumitrascu_2024.jpg
│       └── mocanu_2024.jpg
└── documente/
    ├── Regulament_OIA_2024.docx
    ├── Raport_IOIA_2025.docx
    ├── programa.pdf
    ├── acreditare.pdf
    ├── IOAI2024Assignment.pdf
    ├── OI_AI_2024_NLP.ipynb
    ├── IOAI2024_CV_Problem_EVAL.ipynb
    ├── IOAI2024_CV_Problem_TASK.ipynb
    ├── IOAI2024_CV_Problem_Intro.ipynb
    ├── locala/
    │   ├── Problema1-etlocala.zip
    │   └── Problema2-etlocala.zip
    ├── judeteana/
    │   ├── Problema1-etjudeteana.zip
    │   └── Problema2-etjudeteana.zip
    └── nationala/
        ├── Problema1-etnationala.zip
        └── Problema2-etnationala.zip
```

## 🔄 Pași pentru mutare

1. **Crează directoarele necesare:**
   ```bash
   mkdir -p public/logos/oraganizatori
   mkdir -p public/images/programatori
   mkdir -p public/documente/locala
   mkdir -p public/documente/judeteana
   mkdir -p public/documente/nationala
   ```

2. **Mută logo-urile** din HTML-ul original în `public/logos/`

3. **Mută imaginile** echipei în `public/images/programatori/`

4. **Mută pozele** campionilor în `public/images/`

5. **Mută documentele** (PDF, DOCX, IPYNB, ZIP) în `public/documente/` și subdirectoarele respective

## ⚠️ Note importante

- Toate căile din cod sunt deja setate să caute în `public/` (ex: `/logos/roai.svg`)
- Next.js servește automat fișierele din `public/` la root URL
- Imaginile pot fi optimizate ulterior folosind componenta `next/image`
- Pentru poze lipsă în Hall of Fame, sunt implementate fallback-uri cu inițiale

## 🎯 Verificare

După mutare, verifică că toate imaginile se încarcă accesând:
- http://localhost:3000/ (logo-uri și poze)
- http://localhost:3000/hall-of-fame (poze campioni)
- http://localhost:3000/sponsori (logo-uri organizatori)
- http://localhost:3000/documente (linkuri descărcare)

## 📝 Fișiere opționale

Dacă lipsesc unele assets, site-ul va funcționa oricum cu:
- Fallback-uri pentru imagini (inițiale în cercuri colorate)
- Text simplu pentru logo-uri lipsă
- Linkuri către documente (chiar dacă fișierul lipsește)
