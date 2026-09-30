import { createFileRoute } from "@tanstack/react-router";
import { GFlowPage } from "@/components/sections/GFlowPage";

export const Route = createFileRoute("/experience_/g-flow")({
  head: () => ({
    meta: [
      { title: "G-Flow — ROHANI" },
      {
        name: "description",
        content:
          "G-Flow är ett samhällsbaserat initiativ med ABF Södertörn och Haninge kommun som ger tjejer i socioekonomiskt utsatta områden en trygg miljö att stärka självkänsla, gemenskap och psykiskt välbefinnande.",
      },
      { property: "og:title", content: "G-Flow — ROHANI" },
      {
        property: "og:description",
        content:
          "Ett samhällsbaserat initiativ som ger tjejer en trygg, inkluderande och prestationsfri miljö för självkänsla, gemenskap och välbefinnande.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GFlowRoute,
});

function GFlowRoute() {
  return <GFlowPage />;
}
