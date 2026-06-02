// ================================================================
//  BACPREP – FIȘIER MATERIALE
//  Editează DOAR acest fișier ca să adaugi sau ștergi materiale!
// ================================================================
//
//  CUM ADAUGI UN MATERIAL NOU:
//  1. Copiază un bloc { ... } de mai jos
//  2. Completează câmpurile:
//     - titlu:      numele materialului
//     - materie:    "romana" / "matematica" / "informatica"
//     - tip:        "PDF" / "Comentariu" / "Variante" / "Sinteză"
//     - descriere:  o linie scurtă despre ce conține
//     - file:       calea către PDF din folderul fisiere/
//                   ex: "fisiere/romana/moara-cu-noroc.pdf"
// ================================================================

const MATERIALE = [

  // ── ROMÂNĂ ───────────────────────────────────────────────────
  {
    titlu: "Comentariu – Moara cu Noroc (Ioan Slavici)",
    materie: "romana",
    tip: "Comentariu",
    descriere: "Analiză completă cu toate temele și motivele literare pentru subiectul al III-lea.",
    file: "fisiere/romana/comentariu-moara-cu-noroc.pdf"
  },
  {
    titlu: "Comentariu – Ion (Liviu Rebreanu)",
    materie: "romana",
    tip: "Comentariu",
    descriere: "Personaje, conflicte, simboluri și relații. Tot ce apare la subiectul al III-lea.",
    file: "fisiere/romana/comentariu-ion.pdf"
  },
  {
    titlu: "Figuri de stil – Fișă sinteză",
    materie: "romana",
    tip: "Sinteză",
    descriere: "Toate figurile de stil cu definiții și exemple pentru subiectul I.",
    file: "fisiere/romana/figuri-de-stil.pdf"
  },

  // ── MATEMATICĂ ───────────────────────────────────────────────
  {
    titlu: "Variante rezolvate 2023 – M_mate-info",
    materie: "matematica",
    tip: "Variante",
    descriere: "Toate cele 100 de variante oficiale din 2023, rezolvate complet pas cu pas.",
    file: "fisiere/matematica/variante-2023.pdf"
  },
  {
    titlu: "Formule esențiale – Algebră și Analiză",
    materie: "matematica",
    tip: "Sinteză",
    descriere: "Fișă compactă cu toate formulele necesare: limite, derivate, integrale, șiruri.",
    file: "fisiere/matematica/formule-esential.pdf"
  },

  // ── INFORMATICĂ ──────────────────────────────────────────────
  {
    titlu: "Variante rezolvate 2024 – Info C++",
    materie: "informatica",
    tip: "Variante",
    descriere: "Variantele de la sesiunea 2024 rezolvate în C++, cu explicații pentru fiecare problemă.",
    file: "fisiere/informatica/variante-2024.pdf"
  },
  {
    titlu: "Algoritmi de sortare – Fișă sinteză",
    materie: "informatica",
    tip: "Sinteză",
    descriere: "Selection sort, bubble sort, inserție — cod C++ + explicații + complexitate.",
    file: "fisiere/informatica/algoritmi-sortare.pdf"
  },

];
// ── Nu modifica nimic sub această linie ──────────────────────
