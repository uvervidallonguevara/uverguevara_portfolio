const tech = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 78 },
  { name: "Firebase", level: 72 },
  { name: "Git & Version Control", level: 80 },
];

const hardware = [
  { name: "ESP32", level: 85 },
  { name: "Arduino", level: 88 },
  { name: "Logic Circuits", level: 80 },
  { name: "PCB Designing", level: 70 },
  { name: "Blynk IoT", level: 78 },
  { name: "Optimization", level: 72 },
];

const strengths = [
  "Embedded Systems Development",
  "IoT System Integration",
  "Circuit Design & Analysis",
  "Hardware–Software Integration",
];

const interests = [
  "Playing Sports",
  "Playing online games",
  "Exploring hardware & IoT systems",
  "Learning new technologies",
  "Reading about tech & innovation",
  "Problem-solving through building",
];

function Bar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="text-primary font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card rounded-3xl p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export function Skills() {
  return (
    <section id="resume" className="pt-8 sm:pt-12 pb-24 sm:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Resume</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Skills <span className="text-gradient">& Experience</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card title="Tech & Development" subtitle="Modern web & mobile">
              <div className="space-y-4">
                {tech.map((t) => (
                  <Bar key={t.name} {...t} />
                ))}
              </div>
            </Card>
            <Card title="Hardware & Embedded" subtitle="IoT & circuit design">
              <div className="space-y-4">
                {hardware.map((t) => (
                  <Bar key={t.name} {...t} />
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card title="Key Strengths">
              <div className="grid sm:grid-cols-2 gap-3">
                {strengths.map((s) => (
                  <div
                    key={s}
                    className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-center"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </Card>
            <Card title="Interests & Hobbies">
              <div className="flex flex-wrap gap-2">
                {interests.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
            <Card title="Professional Experience">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently building independent projects across embedded systems and web platforms.
                Open to collaborations, internships, and freelance work in IoT, hardware
                integration, and full-stack development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
