import { LanguageProvider } from "@/lib/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { useScrollPolish } from "@/hooks/use-scroll-polish";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6">404</p>
        <h1 className="font-serif text-5xl md:text-6xl">Sidan hittades inte</h1>
        <p className="mt-5 text-base text-foreground/65 leading-relaxed">
          Sidan du söker finns inte, eller har finessigt flyttat sig.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Till startsidan
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }): any {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Den här sidan kunde inte laddas</h1>
        <p className="mt-3 text-base text-foreground/65">
          Något gick fel hos oss. Du kan försöka igen, eller gå till
          startsidan.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90"
          >
            Försök igen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-secondary"
          >
            Till startsidan
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rohani — Peace of Mind | Psykologi, välbefinnande & ledarskap" },
      {
        name: "description",
        content:
          "Rohani är ett psykologibaserat välbefinnande- och utvecklingsföretag som hjälper organisationer, ledare och individer att frodas genom evidensbaserad psykologi, mindfulness och ledarskapsutveckling.",
      },
      { name: "author", content: "Rohani" },
      { property: "og:site_name", content: "Rohani" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rohani",
          description:
            "Psykologibaserat välbefinnande- och utvecklingsföretag som erbjuder ledarskapsutveckling, företagshälsa, coaching och retreats.",
          slogan: "Peace of Mind",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // resolvedLocation only changes once the new page has actually rendered,
  // so the scroll effects measure the new page, not the old one.
  const pathname = useRouterState({ select: (s) => s.resolvedLocation?.pathname ?? s.location.pathname });
  useScrollPolish(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
