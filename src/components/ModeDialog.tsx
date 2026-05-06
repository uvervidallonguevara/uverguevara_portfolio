import { Code2, Cpu, Wrench, Lightbulb, Github, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

export type ModeKey = "code" | "hardware" | "tools" | "ideas";

const modes = {
  code: {
    title: "Code",
    Icon: Code2,
    subtitle: "~/uver/projects $ ls",
    theme: "github",
  },
  hardware: {
    title: "Hardware",
    Icon: Cpu,
    subtitle: "Schematics & embedded systems",
    theme: "schematic",
  },
  tools: {
    title: "Tools",
    Icon: Wrench,
    subtitle: "My daily workflow stack",
    theme: "dashboard",
  },
  ideas: {
    title: "Ideas",
    Icon: Lightbulb,
    subtitle: "Notebook · brainstorming",
    theme: "notebook",
  },
} as const;

const codeRepos = [
  {
    name: "severino-perfumes",
    desc: "E-commerce site for a boutique perfume brand.",
    lang: "TypeScript",
    stars: 12,
  },
  { name: "sched-it", desc: "Venue scheduling & availability platform.", lang: "React", stars: 8 },
  {
    name: "flood-warning",
    desc: "Arduino-based early flood detection system.",
    lang: "C++",
    stars: 15,
  },
  {
    name: "portfolio",
    desc: "This very portfolio — built with React + TanStack.",
    lang: "TypeScript",
    stars: 3,
  },
];

const hardwareItems = [
  {
    name: "Flood Warning Device",
    parts: ["Arduino UNO", "Ultrasonic HC-SR04", "Buzzer", "GSM SIM800L"],
  },
  { name: "DAUX Home Alarm", parts: ["ESP32", "PIR Sensor", "Magnetic Reed", "Siren 12V"] },
  { name: "Sensor Hand Washer", parts: ["IR Sensor", "Solenoid Valve", "Relay Module", "12V PSU"] },
];

const toolStack = [
  { group: "Editor", items: ["VS Code", "Cursor", "Vim"] },
  { group: "Version Control", items: ["Git", "GitHub", "GitHub Actions"] },
  { group: "Runtime", items: ["Node.js", "Bun", "Python"] },
  { group: "Design", items: ["Figma", "Canva", "Fritzing"] },
  { group: "Hardware", items: ["Arduino IDE", "PlatformIO", "Multimeter"] },
  { group: "DevOps", items: ["Docker", "Cloudflare", "Vercel"] },
];

const ideas = [
  {
    title: "AI-powered Mental Health Companion",
    note: "On-device journaling + sentiment trends. Private by default.",
  },
  {
    title: "Barangay Disaster Mesh",
    note: "LoRa nodes that share flood / fire alerts without internet.",
  },
  { title: "Smart Jeepney Tracker", note: "GPS + crowd-sourced ETA for PUVs in metro areas." },
  {
    title: "Study-Mode Wearable",
    note: "Haptic nudge when focus drops — paired with a Pomodoro app.",
  },
];

export function ModeDialog({ mode, onClose }: { mode: ModeKey | null; onClose: () => void }) {
  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mode, onClose]);

  if (!mode) return null;
  const m = modes[mode];
  const Icon = m.Icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={m.title}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-scale-in flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/40">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-semibold">{m.title}</h3>
              <p className="text-xs text-muted-foreground font-mono">{m.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          {mode === "code" && <CodeView />}
          {mode === "hardware" && <HardwareView />}
          {mode === "tools" && <ToolsView />}
          {mode === "ideas" && <IdeasView />}
        </div>
      </div>
    </div>
  );
}

function CodeView() {
  return (
    <div className="font-mono text-sm space-y-3">
      {codeRepos.map((r) => (
        <div
          key={r.name}
          className="rounded-lg border border-border bg-secondary/30 p-4 hover:border-primary transition"
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <a className="flex items-center gap-2 text-primary hover:underline" href="#">
              <Github className="w-4 h-4" />
              uverguevara/<span className="font-semibold">{r.name}</span>
            </a>
            <span className="text-xs text-muted-foreground">★ {r.stars}</span>
          </div>
          <p className="text-foreground/80 text-xs mt-2">{r.desc}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {r.lang}
            <span className="ml-auto inline-flex items-center gap-1 hover:text-primary cursor-pointer">
              <ExternalLink className="w-3 h-3" /> live demo
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HardwareView() {
  return (
    <div className="space-y-4">
      {hardwareItems.map((h) => (
        <div
          key={h.name}
          className="rounded-lg border border-dashed border-primary/40 bg-secondary/20 p-4"
        >
          <h4 className="text-sm font-semibold mb-3 text-primary">{h.name}</h4>
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2">
            {h.parts.map((p) => (
              <div
                key={p}
                className="relative rounded border border-border bg-background/60 px-3 py-2 text-xs font-mono text-center"
              >
                <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-primary" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent" />
                {p}
              </div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground font-mono tracking-widest">
            ── wired & tested ──
          </div>
        </div>
      ))}
    </div>
  );
}

function ToolsView() {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {toolStack.map((g) => (
        <div key={g.group} className="rounded-lg border border-border bg-secondary/30 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-3">{g.group}</p>
          <div className="flex flex-wrap gap-2">
            {g.items.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-background border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function IdeasView() {
  return (
    <div className="space-y-3">
      {ideas.map((i, idx) => (
        <div
          key={i.title}
          className="relative rounded-lg bg-[repeating-linear-gradient(transparent,transparent_27px,color-mix(in_oklab,var(--primary)_15%,transparent)_28px)] border border-border p-4 pl-10"
        >
          <span className="absolute left-3 top-3 text-xs font-mono text-muted-foreground">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <h4 className="text-sm font-semibold">💡 {i.title}</h4>
          <p className="text-xs text-muted-foreground mt-1">{i.note}</p>
        </div>
      ))}
    </div>
  );
}
