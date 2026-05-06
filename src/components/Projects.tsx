import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import floodImg from "@/assets/project-flood.png";
import dauxImg from "@/assets/project-daux.png";
import schedItImg from "@/assets/project-schedit.png";
import handWasherImg from "@/assets/project-handwasher.png";
import severinoImg from "@/assets/project-severino.png";

const projects = [
  {
    title: "Flood Warning Device",
    slug: "flood-warning-device",
    tag: "IoT • Arduino",
    description:
      "An early flood detection and warning system that alerts users when water levels rise to dangerous heights.",
    image: floodImg,
    accent: "from-primary/30 to-accent/20",
  },
  {
    title: "DAUX — Home Security Alarm",
    slug: "daux-home-security-alarm",
    tag: "Hardware • Security",
    description:
      "A home security alarm system designed to detect intrusions and notify homeowners in real time.",
    image: dauxImg,
    accent: "from-accent/30 to-primary/20",
  },
  {
    title: "Sched-It",
    slug: "sched-it",
    tag: "Web • Scheduling",
    description:
      "A scheduling system that organizes venue availability and event reservations in one place.",
    image: schedItImg,
    accent: "from-primary/40 to-accent/10",
  },
  {
    title: "Sensor Hand Washer & Dryer",
    slug: "sensor-hand-washer-dryer",
    tag: "IoT • Sensors",
    description:
      "A touchless, sensor-powered hand washing and drying station for hygienic public use.",
    image: handWasherImg,
    accent: "from-accent/20 to-primary/30",
  },
  {
    title: "Severino",
    slug: "severino",
    tag: "Web • E-commerce",
    description:
      "An online ordering website for a boutique perfume brand with a clean, elegant shopping experience.",
    image: severinoImg,
    accent: "from-primary/30 to-accent/20",
  },
];

export function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (slug: string) => {
    navigate({ to: `/projects/${slug}` });
  };

  return (
    <section id="projects" className="pt-8 sm:pt-12 pb-24 sm:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2 text-center">Projects</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Things <span className="text-gradient">I've Built</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              onClick={() => handleProjectClick(p.slug)}
              className="shine surface-card rounded-3xl p-6 group hover:-translate-y-2 transition-all duration-500 hover:glow cursor-pointer"
            >
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.accent} mb-5 overflow-hidden border border-border relative`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-mono mb-2">
                {p.tag}
              </p>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
