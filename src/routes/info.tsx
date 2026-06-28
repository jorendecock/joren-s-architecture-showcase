import { createFileRoute } from "@tanstack/react-router";
import { info } from "@/data/info";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Info — Joren De Cock" },
      {
        name: "description",
        content: "Over Joren De Cock — architectuurstudent. CV, portfolio en contact.",
      },
    ],
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <section className="px-5 pb-24 pt-2">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={info.portrait}
            alt={info.name}
            className="w-full bg-muted"
          />
          {info.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${info.name} ${i + 2}`}
              loading="lazy"
              className="mt-6 w-full bg-muted"
            />
          ))}
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h1 className="text-2xl uppercase tracking-tight md:text-3xl">
            {info.name}
          </h1>
          <p className="mt-1 text-[13px] uppercase text-muted-foreground">
            {info.role}
          </p>

          <div className="mt-8 max-w-prose whitespace-pre-line text-[15px] leading-relaxed">
            {info.about}
          </div>

          {info.links.length > 0 && (
            <div className="mt-10">
              <p className="text-[12px] uppercase text-muted-foreground">
                Contact
              </p>
              <ul className="mt-2 space-y-1">
                {info.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {info.pdfs.length > 0 && (
            <div className="mt-8">
              <p className="text-[12px] uppercase text-muted-foreground">
                Documenten
              </p>
              <ul className="mt-2 space-y-1">
                {info.pdfs.map((pdf) => (
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
      </div>
    </section>
  );
}
