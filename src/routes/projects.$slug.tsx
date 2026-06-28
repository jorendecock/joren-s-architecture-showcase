import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.slug);
    const title = project ? `${project.title} — Joren De Cck` : "Project";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: project?.description.slice(0, 160) ?? "Project",
        },
        ...(project?.cover ? [{ property: "og:image", content: project.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.slug);
    if (!project) throw notFound();
    return project;
  },
  notFoundComponent: () => (
    <div className="px-5 py-20">
      <p>Project niet gevonden.</p>
      <Link to="/" className="underline">
        Terug
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <article className="px-5 pb-24 pt-2">
      <Link to="/" className="text-[13px] uppercase underline-offset-4 hover:underline">
        ← Projecten
      </Link>

      <header className="mt-6 max-w-3xl">
        <h1 className="text-2xl uppercase tracking-tight md:text-3xl">
          {project.title}
        </h1>
        <p className="mt-1 text-[13px] uppercase text-muted-foreground">
          {project.year}
          {project.location ? ` · ${project.location}` : ""}
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Tekst */}
        <div className="md:col-span-4">
          <div className="max-w-prose whitespace-pre-line text-[15px] leading-relaxed">
            {project.description}
          </div>

          {project.pdfs && project.pdfs.length > 0 && (
            <div className="mt-8">
              <p className="text-[12px] uppercase text-muted-foreground">
                Documenten
              </p>
              <ul className="mt-2 space-y-1">
                {project.pdfs.map((pdf) => (
                  <li key={pdf.file}>
                    <a
                      href={pdf.file}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      {pdf.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Media */}
        <div className="md:col-span-8 space-y-6">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full bg-muted"
          />
          {project.images?.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} — ${i + 2}`}
              loading="lazy"
              className="w-full bg-muted"
            />
          ))}
          {project.videos?.map((url, i) => (
            <div key={i} className="aspect-video w-full bg-muted">
              <iframe
                src={url}
                title={`${project.title} video ${i + 1}`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
