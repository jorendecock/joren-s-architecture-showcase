import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, type ProjectSize } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projecten — Joren De Cock" },
      {
        name: "description",
        content: "Overzicht van projecten door Joren De Cock, architectuurstudent.",
      },
    ],
  }),
  component: ProjectsIndex,
});

// Hoe groot een project op de grid verschijnt (kolommen × rijen).
// Pas hier aan om grootteverschillen aan te scherpen.
const SIZE_MAP: Record<ProjectSize, { col: string; row: string }> = {
  S: { col: "md:col-span-2", row: "md:row-span-1" },
  M: { col: "md:col-span-3", row: "md:row-span-2" },
  L: { col: "md:col-span-4", row: "md:row-span-2" },
  XL: { col: "md:col-span-6", row: "md:row-span-3" },
};

// Vaste aspect ratio per maat — bepaalt de hoogte van de foto.
const ASPECT_MAP: Record<ProjectSize, string> = {
  S: "aspect-[4/3]",
  M: "aspect-[3/4]",
  L: "aspect-[4/3]",
  XL: "aspect-[3/2]",
};

function ProjectsIndex() {
  return (
    <section className="px-5 pb-24 pt-2">
      <div
        className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-8 md:gap-x-6 md:gap-y-16"
        style={{ gridAutoFlow: "dense" }}
      >
        {projects.map((p) => {
          const size = SIZE_MAP[p.size];
          return (
            <Link
              key={p.id}
              to="/projects/$slug"
              params={{ slug: p.id }}
              className={`group block ${size.col} ${size.row}`}
            >
              <div
                className={`relative w-full overflow-hidden bg-muted ${ASPECT_MAP[p.size]}`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-2 flex items-baseline justify-between gap-3 text-[13px] uppercase tracking-tight">
                <span className="truncate">{p.title}</span>
                <span className="text-muted-foreground tabular-nums">
                  {p.year}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
