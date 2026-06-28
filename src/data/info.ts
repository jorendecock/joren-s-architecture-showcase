// ============================================================
//  INFO — Joren De Cock
// ============================================================
//
//  Pas hier je persoonlijke info aan: tekst, foto, links naar
//  Instagram, en pdf bestanden (CV / portfolio).
//
//  Plaats foto's in /public/images/ en pdf's in /public/pdfs/
//
// ============================================================

export const info = {
  name: "Joren De Cock",
  role: "Architectuur Student",
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",

  // Tekst — gebruik \n\n voor een nieuwe alinea
  about:
    "Ik ben Joren De Cock, architectuurstudent. Op deze website verzamel ik werk uit mijn opleiding — projecten, schetsen, modellen en onderzoek.\n\nPas deze tekst aan in /src/data/info.ts.",

  // Externe links
  links: [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "Email", url: "mailto:hello@jorendecock.com" },
  ],

  // PDF's — plaats bestand in /public/pdfs/ en verwijs naar "/pdfs/bestand.pdf"
  pdfs: [
    // { label: "CV", file: "/pdfs/cv.pdf" },
    // { label: "Portfolio architectuur", file: "/pdfs/portfolio.pdf" },
  ] as { label: string; file: string }[],

  // Extra foto's
  images: [] as string[],
};
