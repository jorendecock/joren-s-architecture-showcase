// ============================================================
//  PROJECTEN — Joren De Cock
// ============================================================
//
//  Hier beheer je AL je projecten. Bovenaan = nieuwste = staat
//  bovenaan op de website. Sleep een project hoger of lager in
//  deze lijst om de volgorde aan te passen.
//
//  Per project kan je instellen:
//   - id          : uniek slug (URL = /projects/<id>) → enkel kleine letters, cijfers, streepjes
//   - title       : titel van het project
//   - year        : jaartal (wordt getoond onder de titel)
//   - location    : optioneel (stad, school, ...)
//   - size        : "S" | "M" | "L" | "XL"
//                   Hoe groter, hoe belangrijker → hoe groter de foto
//                   op de homepagina. XL = heel groot, S = klein.
//   - cover       : pad naar de hoofdfoto die getoond wordt in de grid
//                   Plaats je foto's in /public/images/ en verwijs
//                   ernaar als "/images/jouw-foto.jpg".
//   - description : tekst over het project (mag meerdere paragrafen
//                   bevatten — gebruik \n\n voor een nieuwe alinea)
//   - images      : extra foto's die op de detailpagina komen
//   - videos      : optioneel — lijst met YouTube/Vimeo embed-links
//                   (bv. "https://www.youtube.com/embed/XXXXX")
//   - pdfs        : optioneel — { label, file } — plaats het pdf
//                   bestand in /public/pdfs/ en verwijs naar
//                   "/pdfs/bestandsnaam.pdf"
//
//  EEN NIEUW PROJECT TOEVOEGEN: kopieer een blok hieronder en
//  pas de waarden aan. Klaar.
//
// ============================================================

export type ProjectSize = "S" | "M" | "L" | "XL";

export interface Project {
  id: string;
  title: string;
  year: number;
  location?: string;
  size: ProjectSize;
  cover: string;
  description: string;
  images?: string[];
  videos?: string[];
  pdfs?: { label: string; file: string }[];
}

export const projects: Project[] = [
  {
    id: "project-een",
    title: "Project Een",
    year: 2025,
    location: "Gent",
    size: "XL",
    cover:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    description:
      "Korte beschrijving van dit project. Vervang deze tekst door je eigen verhaal.\n\nVoeg meerdere alinea's toe door een lege regel te gebruiken.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80",
    ],
    pdfs: [
      // { label: "Plannen (PDF)", file: "/pdfs/project-een-plannen.pdf" },
    ],
  },
  {
    id: "project-twee",
    title: "Project Twee",
    year: 2024,
    location: "Brussel",
    size: "M",
    cover:
      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1200&q=80",
    description: "Beschrijving van project twee.",
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1600&q=80",
    ],
  },
  {
    id: "project-drie",
    title: "Project Drie",
    year: 2024,
    size: "L",
    cover:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1400&q=80",
    description: "Beschrijving van project drie.",
  },
  {
    id: "project-vier",
    title: "Project Vier",
    year: 2023,
    size: "S",
    cover:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&q=80",
    description: "Beschrijving van project vier.",
  },
  {
    id: "project-vijf",
    title: "Project Vijf",
    year: 2023,
    size: "M",
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    description: "Beschrijving van project vijf.",
  },
  {
    id: "project-zes",
    title: "Project Zes",
    year: 2022,
    size: "L",
    cover:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1400&q=80",
    description: "Beschrijving van project zes.",
  },
];
