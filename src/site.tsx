// ============================================================
//  JOREN DE COCK — ALLE INHOUD VAN DE WEBSITE IN 1 BESTAND
// ============================================================
//
//  Hier pas je ALLES aan: projecten, info, lettertype, kleuren,
//  groottes. Geen ander bestand nodig.
//
//  - PROJECTEN toevoegen / aanpassen → zie PROJECTS hieronder
//  - INFO (over jou, foto's, links) → zie INFO hieronder
//  - LETTERTYPE / KLEUR → zie src/styles.css
//
//  Foto's: plaats in /public/images/ en verwijs als "/images/x.jpg"
//  PDF's:  plaats in /public/pdfs/   en verwijs als "/pdfs/x.pdf"
//
// ============================================================

import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ============================================================
//  1. PROJECTEN
// ============================================================

export type ProjectSize = "S" | "M" | "L" | "XL";
export type ProjectAlign = "left" | "center" | "right";

export interface Project {
  id: string;
  title: string;
  year: number;
  location?: string;
  size: ProjectSize;
  align: ProjectAlign;
  cover: string;
  description: string;
  images?: string[];
  videos?: string[];
  pdfs?: { label: string; file: string }[];
}

// kleine helper zodat elk project automatisch wat voorbeeldfoto's
// en tekst krijgt (zodat je meteen ziet hoe een detailpagina eruitziet).
// vervang `images` en `description` per project door je eigen materiaal.
const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1800&q=80",
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1800&q=80",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1800&q=80",
];

const SAMPLE_TEXT =
  "korte beschrijving van dit project. vervang deze tekst door je eigen verhaal: het concept, het programma, de site, de materialen.\n\ngebruik een lege regel voor een nieuwe alinea. zo kan je makkelijk meerdere stukken tekst achter elkaar plaatsen zonder iets aan de opmaak te moeten doen.";

export const projects: Project[] = [
  { id: "project-01", title: "atelier aan de leie", year: 2025, location: "gent", size: "XL", align: "left",
    cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-02", title: "houten paviljoen", year: 2025, location: "brussel", size: "M", align: "right",
    cover: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-03", title: "betonnen kapel", year: 2024, location: "antwerpen", size: "L", align: "center",
    cover: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1600&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-04", title: "huis op de heuvel", year: 2024, size: "S", align: "left",
    cover: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-05", title: "stadshal", year: 2024, location: "leuven", size: "M", align: "right",
    cover: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-06", title: "modulaire woning", year: 2024, size: "L", align: "left",
    cover: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1600&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-07", title: "bibliotheek", year: 2023, location: "brugge", size: "XL", align: "right",
    cover: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1800&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-08", title: "atelierruimte", year: 2023, size: "M", align: "center",
    cover: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-09", title: "schoolgebouw", year: 2023, location: "kortrijk", size: "L", align: "left",
    cover: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1600&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-10", title: "rijwoning", year: 2023, size: "S", align: "right",
    cover: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-11", title: "kerkrestauratie", year: 2022, location: "mechelen", size: "M", align: "left",
    cover: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-12", title: "stedelijk plein", year: 2022, size: "XL", align: "center",
    cover: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1800&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-13", title: "boshut", year: 2022, size: "S", align: "left",
    cover: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-14", title: "tentoonstellingsruimte", year: 2022, location: "gent", size: "L", align: "right",
    cover: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-15", title: "loft conversie", year: 2021, size: "M", align: "left",
    cover: "https://images.unsplash.com/photo-1490735891913-40897c6045cf?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-16", title: "kustvilla", year: 2021, location: "knokke", size: "L", align: "center",
    cover: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1600&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-17", title: "studio aan het water", year: 2021, size: "S", align: "right",
    cover: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
  { id: "project-18", title: "eerste ontwerp", year: 2020, size: "M", align: "left",
    cover: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1400&q=80",
    description: SAMPLE_TEXT, images: SAMPLE_IMAGES },
];

// ============================================================
//  2. INFO
// ============================================================

export const info = {
  name: "joren de cock",
  role: "architectuur student",
  about:
    "ik ben joren de cock, architectuurstudent. op deze website verzamel ik werk uit mijn opleiding — projecten, schetsen, modellen en onderzoek.\n\npas deze tekst aan in src/site.tsx.",
  photos: [
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80", size: "M" as ProjectSize, align: "left" as ProjectAlign, caption: "portret" },
    { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1400&q=80", size: "L" as ProjectSize, align: "right" as ProjectAlign, caption: "atelier" },
    { src: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=1400&q=80", size: "S" as ProjectSize, align: "center" as ProjectAlign, caption: "schets" },
  ],
  links: [
    { label: "instagram", url: "https://www.instagram.com/" },
    { label: "email", url: "mailto:hello@jorendecock.com" },
  ],
  pdfs: [] as { label: string; file: string }[],
};

// ============================================================
//  3. WEERGAVE
// ============================================================

// breedte per maat. mobiel = altijd volledige breedte (gewoon onder elkaar).
const WIDTH_MAP: Record<ProjectSize, string> = {
  S: "md:w-[28%]",
  M: "md:w-[42%]",
  L: "md:w-[58%]",
  XL: "md:w-[78%]",
};

const ALIGN_MAP: Record<ProjectAlign, string> = {
  left: "md:mr-auto",
  center: "md:mx-auto",
  right: "md:ml-auto",
};

// ------------------------------------------------------------
//  HEADER
// ------------------------------------------------------------

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="flex items-baseline justify-between px-5 py-4 text-[15px] md:text-[20px] lowercase tracking-tight">
        <span className="select-none">jorendecock.archi</span>
        <nav className="flex gap-5 md:gap-8">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "nav-active" }}>
            projecten
          </Link>
          <Link to="/info" activeProps={{ className: "nav-active" }}>
            info
          </Link>
        </nav>
      </div>
    </header>
  );
}

// ------------------------------------------------------------
//  PROJECTEN — HOOFDPAGINA
// ------------------------------------------------------------
//
//  - één project per rij
//  - mobiel: full-width onder elkaar
//  - bij hover komt de titel NAAST de foto (niet erover)
//  - geen zoom/transform op de foto
//  - kleine verticale ruimte tussen projecten
//

function ProjectRow({ p }: { p: Project }) {
  const wrapperAlign = ALIGN_MAP[p.align];
  // titel komt aan de andere kant van de uitlijning (zodat hij in de witruimte staat)
  const titleSide = p.align === "right" ? "md:-left-3 md:-translate-x-full" : "md:-right-3 md:translate-x-full";

  return (
    <li className={`w-full ${WIDTH_MAP[p.size]} ${wrapperAlign}`}>
      <Link
        to="/projects/$slug"
        params={{ slug: p.id }}
        className="group relative block"
      >
        <img src={p.cover} alt="" loading="lazy" className="block w-full" />
        {/* titel verschijnt enkel bij hover, NAAST de foto in de witruimte (op desktop) */}
        <span
          className={`pointer-events-none absolute bottom-0 left-0 mt-2 block w-full text-[14px] lowercase tracking-tight opacity-0 transition-opacity duration-200 group-hover:opacity-100
            md:left-auto md:bottom-2 md:w-auto md:whitespace-nowrap md:text-[15px] ${titleSide}`}
          style={{ position: "absolute" }}
        >
          <span className="block px-1 md:px-3">{p.title}</span>
        </span>
      </Link>
    </li>
  );
}

export function ProjectsIndex() {
  return (
    <section className="px-5 pb-32 pt-4">
      <ul className="flex flex-col gap-3 md:gap-4">
        {projects.map((p) => (
          <ProjectRow key={p.id} p={p} />
        ))}
      </ul>
    </section>
  );
}

// ------------------------------------------------------------
//  PROJECT DETAIL
// ------------------------------------------------------------

export function ProjectDetail({ project }: { project: Project }) {
  const media: { type: "img" | "video"; src: string }[] = [
    { type: "img", src: project.cover },
    ...(project.images ?? []).map((src) => ({ type: "img" as const, src })),
    ...(project.videos ?? []).map((src) => ({ type: "video" as const, src })),
  ];

  return (
    <article className="px-5 pb-32 pt-4">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="text-[18px] md:text-[22px] lowercase tracking-tight">{project.title}</h1>
        <p className="mt-1 text-[13px] lowercase text-muted-foreground">
          {project.year}
          {project.location ? ` · ${project.location}` : ""}
        </p>
        <p className="mx-auto mt-6 max-w-prose whitespace-pre-line text-[15px] leading-relaxed">
          {project.description}
        </p>
        {project.pdfs && project.pdfs.length > 0 && (
          <ul className="mt-6 flex justify-center gap-4 text-[13px] lowercase">
            {project.pdfs.map((pdf) => (
              <li key={pdf.file}>
                <a href={pdf.file} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {pdf.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="flex flex-col gap-3 md:gap-4">
        {media.map((m, i) => (
          <div
            key={i}
            className={`w-full md:w-[70%] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          >
            {m.type === "img" ? (
              <img src={m.src} alt="" loading="lazy" className="block w-full" />
            ) : (
              <div className="aspect-video w-full bg-muted">
                <iframe
                  src={m.src}
                  title=""
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-[13px] lowercase">
        <Link to="/" className="underline underline-offset-4">terug naar projecten</Link>
      </div>
    </article>
  );
}

// ------------------------------------------------------------
//  INFO
// ------------------------------------------------------------

export function InfoPage() {
  return (
    <section className="px-5 pb-32 pt-4">
      <div className="mx-auto mb-12 max-w-prose text-center">
        <h1 className="text-[18px] md:text-[22px] lowercase tracking-tight">{info.name}</h1>
        <p className="mt-1 text-[13px] lowercase text-muted-foreground">{info.role}</p>
        <p className="mt-6 whitespace-pre-line text-[15px] leading-relaxed">{info.about}</p>

        {info.links.length > 0 && (
          <ul className="mt-6 flex justify-center gap-4 text-[13px] lowercase">
            {info.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}

        {info.pdfs.length > 0 && (
          <ul className="mt-3 flex justify-center gap-4 text-[13px] lowercase">
            {info.pdfs.map((pdf) => (
              <li key={pdf.file}>
                <a href={pdf.file} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {pdf.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="flex flex-col gap-3 md:gap-4">
        {info.photos.map((ph, i) => {
          const titleSide = ph.align === "right" ? "md:-left-3 md:-translate-x-full" : "md:-right-3 md:translate-x-full";
          return (
            <li key={i} className={`group relative w-full ${WIDTH_MAP[ph.size]} ${ALIGN_MAP[ph.align]}`}>
              <img src={ph.src} alt={ph.caption ?? ""} loading="lazy" className="block w-full" />
              {ph.caption && (
                <span
                  className={`pointer-events-none absolute bottom-0 left-0 block w-full text-[14px] lowercase tracking-tight opacity-0 transition-opacity duration-200 group-hover:opacity-100
                    md:left-auto md:bottom-2 md:w-auto md:whitespace-nowrap md:text-[15px] ${titleSide}`}
                >
                  <span className="block px-1 md:px-3">{ph.caption}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ------------------------------------------------------------
//  ROOT LAYOUT
// ------------------------------------------------------------

const queryClient = new QueryClient();

export function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[16px] lowercase">pagina niet gevonden</h1>
        <Link to="/" className="mt-4 inline-block underline lowercase">terug naar projecten</Link>
      </div>
    </div>
  );
}

export function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[16px] lowercase">er ging iets mis</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-4 underline lowercase"
        >
          opnieuw proberen
        </button>
      </div>
    </div>
  );
}

export function RootShellContent({ children }: { children: ReactNode }) {
  return children;
}
