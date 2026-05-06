import { Github, Linkedin, Facebook, Instagram, Mail, Send } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    tooltip: "See my pinned repos",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
    tooltip: "View my experience",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/",
    tooltip: "Say hi on Facebook",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/",
    tooltip: "Behind the scenes",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@example.com",
    tooltip: "Let's work together",
  },
];

export function Contact() {
  return (
    <section id="contact" className="pt-8 sm:pt-12 pb-24 sm:pb-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Contact</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Let's create something <span className="text-gradient">real and useful</span> together
        </h2>
        <p className="text-muted-foreground mb-12">
          Got something you want to build or solve? Let's connect and talk.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="surface-card rounded-3xl p-6 sm:p-8 space-y-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3.5 font-medium transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Start the Conversation
          </button>
        </form>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {socials.map(({ icon: Icon, label, href, tooltip, primary }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={`${label} — ${tooltip}`}
              className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                primary
                  ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_25%,transparent)] hover:bg-primary/25"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{label}</span>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-secondary border border-border px-2 py-1 text-xs text-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition">
                {tooltip}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
