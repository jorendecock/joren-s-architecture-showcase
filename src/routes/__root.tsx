import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-2xl">Pagina niet gevonden</h1>
        <Link to="/" className="mt-4 inline-block underline">
          Terug naar projecten
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-xl">Er ging iets mis</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-4 underline"
        >
          Opnieuw proberen
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Joren De Cock — Architectuur" },
      {
        name: "description",
        content:
          "Portfolio van Joren De Cock, architectuurstudent. Projecten, schetsen en onderzoek.",
      },
      { property: "og:title", content: "Joren De Cock — Architectuur" },
      {
        property: "og:description",
        content: "Portfolio van Joren De Cock, architectuurstudent.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-4 text-[15px] uppercase tracking-tight">
        <Link to="/" className="font-medium">
          Joren De Cock
        </Link>
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: "nav-active" }}
        >
          Projecten
        </Link>
        <Link to="/info" activeProps={{ className: "nav-active" }}>
          Info
        </Link>
      </div>
    </header>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}
