import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectPage,
  head: () => ({
    meta: [
      { title: "Project Details" },
      { name: "description", content: "Project details and updates." },
    ],
  }),
});

function ProjectPage() {
  const { projectId } = Route.useParams();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gradient">
          {projectId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </h1>
        <p className="text-lg text-muted-foreground">
          This project is currently under active development. Please check back soon for updates.
        </p>
      </div>
    </main>
  );
}
