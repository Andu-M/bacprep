// ================================================================
//  BACPREP – FIȘIER MATERIALE
//  Editează DOAR acest fișier ca să adaugi sau ștergi materiale!
// ================================================================
//
//  CUM ADAUGI UN MATERIAL NOU:
//  1. Copiază un bloc { ... } de mai jos
//  2. Lipește-l în lista de mai jos (înainte de ];)
//  3. Completează câmpurile:
//     - titlu:      numele materialului
//     - materie:    "romana" / "matematica" / "informatica"
//     - tip:        "PDF" / "Comentariu" / "Variante" / "Sinteză" / etc.
//     - descriere:  o linie scurtă despre ce conține
//     - link:       link direct (Google Drive, sau orice alt link public)
//
//  LINK GOOGLE DRIVE:
//  - Deschide fișierul în Drive
//  - Click dreapta → "Obține link" → schimbă din "Restricționat" în "Oricine cu linkul"
//  - Copiază linkul și pune-l în câmpul link de mai jos
// ================================================================

const MATERIALE = [

  // ── ROMÂNĂ ───────────────────────────────────────────────────
  {
    titlu: "Comentariu – Moara cu Noroc (Ioan Slavici)",
    materie: "romana",
    tip: "Comentariu",
    descriere: "Analiză completă cu toate temele și motivele literare pentru subiectul al III-lea.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },
  {
    titlu: "Comentariu – Ion (Liviu Rebreanu)",
    materie: "romana",
    tip: "Comentariu",
    descriere: "Personaje, conflicte, simboluri și relații. Tot ce apare la subiectul al III-lea.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },
  {
    titlu: "Figuri de stil – Fișă sinteză",
    materie: "romana",
    tip: "Sinteză",
    descriere: "Toate figurile de stil cu definiții și exemple pentru subiectul I.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },

  // ── MATEMATICĂ ───────────────────────────────────────────────
  {
    titlu: "Variante rezolvate 2023 – M_mate-info",
    materie: "matematica",
    tip: "Variante",
    descriere: "Toate cele 100 de variante oficiale din 2023, rezolvate complet pas cu pas.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },
  {
    titlu: "Formule esențiale – Algebră și Analiză",
    materie: "matematica",
    tip: "Sinteză",
    descriere: "Fișă compactă cu toate formulele necesare: limite, derivate, integrale, șiruri.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },

  // ── INFORMATICĂ ──────────────────────────────────────────────
  {
    titlu: "Variante rezolvate 2024 – Info C++",
    materie: "informatica",
    tip: "Variante",
    descriere: "Variantele de la sesiunea 2024 rezolvate în C++, cu explicații pentru fiecare problemă.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },
  {
    titlu: "Algoritmi de sortare – Fișă sinteză",
    materie: "informatica",
    tip: "Sinteză",
    descriere: "Selection sort, bubble sort, inserție — cod C++ + explicații + complexitate.",
    link: "https://drive.google.com/file/d/INLOCUIESTE_CU_ID-UL_TAU/view"
  },

];
// ── Nu modifica nimic sub această linie ──────────────────────
