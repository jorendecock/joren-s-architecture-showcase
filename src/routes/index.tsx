import { createFileRoute } from "@tanstack/react-router";
import { ProjectsIndex } from "../site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "projecten — joren de cock" }] }),
  component: ProjectsIndex,
});
