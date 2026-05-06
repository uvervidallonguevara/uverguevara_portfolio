import portrait from "@/assets/uver-portrait.png";
import { Code2, Cpu, Wrench, Lightbulb } from "lucide-react";
import { useState } from "react";
import { ModeDialog, type ModeKey } from "./ModeDialog";

export function Hero() {
  const [mode, setMode] = useState<ModeKey | null>(null);
  return (
    <>
      {/* Top nav strip */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-mono tracking-tight">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 align-middle shadow-[0_0_12px_var(--primary)]" />
            <span className="text-foreground/90">Uver</span>
            <span className="text-muted-foreground"> — Computer Engineer & Innovator</span>
          </span>
          <nav className="hidden sm:flex gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition story-link">
              About
            </a>
            <a href="#resume" className="hover:text-primary transition story-link">
              Resume
            </a>
            <a href="#projects" className="hover:text-primary transition story-link">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition story-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-10 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight">
            Turn <span className="text-gradient">ideas</span>
            <br />
            into something <span className="text-gradient">real</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Developing tech that makes a difference
          </p>

          <div className="mt-8 inline-flex gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-4 py-2">
            {[
              { Icon: Code2, label: "Code", key: "code" as const },
              { Icon: Cpu, label: "Hardware", key: "hardware" as const },
              { Icon: Wrench, label: "Tools", key: "tools" as const },
              { Icon: Lightbulb, label: "Ideas", key: "ideas" as const },
            ].map(({ Icon, label, key }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                title={label}
                onClick={() => setMode(key)}
                className="group relative w-9 h-9 rounded-full flex items-center justify-center text-primary hover:bg-primary/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon className="w-4 h-4" />
                <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-secondary border border-border px-2 py-1 text-xs text-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModeDialog mode={mode} onClose={() => setMode(null)} />

      {/* About */}
      <section id="about" className="pt-24 sm:pt-32 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-1">About</p>
          <div className="grid lg:grid-cols-[1fr_auto] gap-2 lg:gap-4 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-gradient">Uver</span>
              </h2>
              <p className="text-lg text-foreground/90 mb-4">
                Computer Engineer | Turning problems into products | Still learning
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify hyphens-auto">
                <p>
                  I tend to focus on building things that actually solve something, rather than
                  getting caught up in labels. From apps like mental health tools to small systems
                  and utilities, I enjoy figuring out how ideas can become something real and
                  usable.
                </p>
                <p>
                  I usually work in a fast, experimental way—trying things out early, refining as I
                  go, and learning from what breaks. Most of my progress comes from iteration and
                  actually seeing how people interact with what I build.
                </p>
                <p>
                  I'm still exploring where this all leads, but I keep coming back to the same
                  pattern: building, adjusting, and learning through the process of creating.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="shine rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95 transition glow"
                >
                  View My Work →
                </a>
                <a
                  href="#resume"
                  className="rounded-xl border border-border bg-secondary/40 backdrop-blur px-6 py-3 text-sm font-medium hover:border-primary hover:bg-secondary/60 transition"
                >
                  Know more about me
                </a>
              </div>
            </div>

            <div className="relative justify-self-center -mt-8 lg:-mt-32 -mb-16 lg:-mb-32">
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl opacity-60" />
              <img
                src={portrait}
                alt="Portrait of Uver Guevara"
                className="relative w-[22rem] sm:w-[28rem] lg:w-[34rem] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
