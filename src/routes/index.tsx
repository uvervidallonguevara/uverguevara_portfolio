import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Uver Guevara — Computer Engineer & Innovator" },
      {
        name: "description",
        content:
          "Portfolio of Uver Guevara — computer engineer building IoT, embedded systems, and web apps that turn ideas into real products.",
      },
      { property: "og:title", content: "Uver Guevara — Computer Engineer & Innovator" },
      {
        property: "og:description",
        content:
          "Turn ideas into something real — projects, skills, and experiments by Uver Guevara.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Uver Guevara. Built with care.
      </footer>
    </main>
  );
}
