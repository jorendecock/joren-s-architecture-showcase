import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { RootLayout, NotFound, ErrorView } from "../site";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "joren de cock — architectuur student · ku leuven sint-lucas gent" },
      {
        name: "description",
        content: "architectuur student — ku leuven sint-lucas gent. portfolio van joren de cock.",
      },
      { property: "og:title", content: "joren de cock — architectuur student · ku leuven sint-lucas gent" },
      { name: "twitter:title", content: "joren de cock — architectuur student · ku leuven sint-lucas gent" },
      { property: "og:description", content: "architectuur student — ku leuven sint-lucas gent. portfolio van joren de cock." },
      { name: "twitter:description", content: "architectuur student — ku leuven sint-lucas gent. portfolio van joren de cock." },
      { name: "twitter:description", content: "architectuur student — ku leuven sint-lucas gent. portfolio van joren de cock." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7a8951ac-ecb7-475d-bb5c-88d58e78584c/id-preview-c8f97bfe--5a76af21-2487-4d57-b2bc-667d0fb2d3da.lovable.app-1782726650697.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7a8951ac-ecb7-475d-bb5c-88d58e78584c/id-preview-c8f97bfe--5a76af21-2487-4d57-b2bc-667d0fb2d3da.lovable.app-1782726650697.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap",
      },
    ],
  }),
  shellComponent: Shell,
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
});

function Shell({ children }: { children: ReactNode }) {
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
