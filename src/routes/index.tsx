import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Linkedin, Mail, MapPin, Download, ArrowRight, Menu, X,
  Rocket, TrendingUp, Wallet, GraduationCap, Briefcase, Users,
  Target, LineChart, Network, Award, BookOpen, Calendar,
  Building2, Globe2, CheckCircle2, Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anwar Ulhaq — Technical Program Manager & Startup Ecosystem Builder" },
      { name: "description", content: "Technical Program Manager, Startup Ecosystem Builder, and Venture Operations Specialist. 6+ years building programs that deliver measurable outcomes." },
      { property: "og:title", content: "Anwar Ulhaq — Portfolio" },
      { property: "og:description", content: "Building startup ecosystems that deliver outcomes. 200+ startups supported." },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/anwarr-ulhaq/";
const EMAIL = "anwarrulhaq@gmail.com";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"}`}>
      <nav className="container-px mx-auto max-w-7xl flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-base">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">AU</span>
          <span className="hidden sm:inline">Anwar Ulhaq</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            <Linkedin className="h-4 w-4" /> Connect on LinkedIn
          </a>
        </div>
        <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="container-px mx-auto max-w-7xl py-4 space-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
              </li>
            ))}
            <li className="pt-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }} />
        <div className="absolute bottom-[-20%] right-[-10%] h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, var(--cyan), transparent 60%)" }} />
      </div>
      <div className="container-px mx-auto max-w-7xl pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            Open to Global Opportunities
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            <span className="gradient-text">Anwar Ulhaq</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-foreground/80">
            Technical Program Manager &nbsp;·&nbsp; Startup Ecosystem Builder &nbsp;·&nbsp; Venture Operations Specialist
          </p>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            I help startups, innovation programs, and public-sector technology ecosystems move from ideas to measurable outcomes. With 6+ years of experience in program management, startup incubation, operations, and stakeholder coordination, I have supported 200+ startups across fintech, AI, edtech, AR/VR, and digital commerce.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              View Experience <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Pakistan
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="relative rounded-2xl border border-border bg-surface-elevated p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-cyan text-primary-foreground font-display text-2xl font-bold">
                AU
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold truncate">Anwar Ulhaq</div>
                <div className="text-sm text-muted-foreground truncate">Technical Program Manager</div>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> Rawalpindi, Pakistan
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <MiniMetric label="Startups Supported" value="200+" />
              <MiniMetric label="Revenue Enabled" value="PKR 300M+" />
              <MiniMetric label="Investment Facilitated" value="PKR 220M+" />
              <MiniMetric label="Individuals Trained" value="10,000+" />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe2 className="h-4 w-4 text-emerald" /> Available worldwide · Remote / Relocate
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
            </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-5 -right-5 hidden sm:block">
            <div className="rounded-xl border border-border bg-surface-elevated px-3 py-2 text-xs font-medium shadow-md">
              <span className="text-emerald">●</span> 6+ Years Experience
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-3">
      <div className="font-display font-bold text-base">{value}</div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

/* ---------------- Impact ---------------- */
const METRICS = [
  { value: 200, suffix: "+", label: "Startups Supported", icon: Rocket },
  { value: 300, suffix: "M+", prefix: "PKR ", label: "Revenue Enabled", icon: TrendingUp },
  { value: 220, suffix: "M+", prefix: "PKR ", label: "Investment Facilitated", icon: Wallet },
  { value: 10000, suffix: "+", label: "Individuals Trained", icon: GraduationCap },
  { value: 500, suffix: "+", label: "Internships Facilitated", icon: Briefcase },
  { value: 1200, suffix: "+", label: "Jobs Created", icon: Users },
];

function Impact() {
  return (
    <Section id="impact" eyebrow="Impact" title="Impact at a Glance" intro="Verified outcomes from program design, startup support, and ecosystem coordination.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
    </Section>
  );
}

function MetricCard({ value, suffix, prefix, label, icon: Icon }: { value: number; suffix?: string; prefix?: string; label: string; icon: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.8, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, value, mv, rounded]);

  return (
    <div ref={ref} className="card-hover rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-cyan" />
      </div>
      <div className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        {prefix}{display}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- About ---------------- */
const ABOUT_TAGS = [
  { icon: Target, label: "Program Management" },
  { icon: Rocket, label: "Startup Incubation" },
  { icon: LineChart, label: "Venture Operations" },
  { icon: CheckCircle2, label: "KPI Tracking" },
  { icon: Network, label: "Stakeholder Management" },
  { icon: Globe2, label: "Innovation Ecosystems" },
];

function About() {
  return (
    <Section id="about" eyebrow="About" title="Building Startup Ecosystems That Deliver Outcomes">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I am a Program Management and Startup Ecosystem professional with hands-on experience in designing, managing, and scaling incubation and acceleration programs. My work sits at the intersection of entrepreneurship, public-sector innovation, venture development, operations, and technology-driven growth.
          </p>
          <p>
            At Punjab Information Technology Board, I have led startup support programs involving founders, investors, mentors, corporate partners, and government stakeholders. I specialize in converting broad innovation goals into structured execution systems with clear KPIs, milestone tracking, stakeholder ownership, and measurable results.
          </p>
          <p>
            Beyond program execution, I have also worked in digital education, banking operations, community development, and research, giving me a strong foundation in strategy, governance, financial discipline, and people-centered leadership.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 self-start">
          {ABOUT_TAGS.map((t) => (
            <div key={t.label} className="card-hover rounded-xl border border-border bg-card p-4">
              <t.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-medium">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */
const EXPERIENCE = [
  {
    title: "Technical Program Manager / Tech Incubation Manager",
    company: "Punjab Information Technology Board",
    location: "Rawalpindi, Pakistan",
    dates: "Jan 2021 – Present",
    description: "Led incubation and acceleration programs supporting 200+ startups across fintech, AI, edtech, AR/VR, and digital commerce. Designed KPI tracking systems, milestone-based execution frameworks, and founder support models that helped portfolio startups generate PKR 300M+ in revenue and secure PKR 220M+ in investment.",
    bullets: [
      "Managed founders, investors, mentors, corporates, and public-sector partners.",
      "Shifted program delivery from event-based activities to outcome-driven execution.",
      "Supported startup growth through business development, mentorship access, market linkages, and investor readiness.",
      "Contributed to 10,000+ individuals trained, 500+ internships facilitated, and 1,200+ jobs created.",
    ],
  },
  {
    title: "Founder & Project Director",
    company: "Brainiac's Digitized Education System",
    location: "Mardan, Pakistan",
    dates: "Aug 2019 – Dec 2022",
    description: "Founded and led a digital education initiative focused on technology awareness, innovation exposure, and skill development.",
    bullets: [
      "Designed workshops on AI awareness, digital tools, and entrepreneurship.",
      "Managed operations, partnerships, outreach, and execution.",
      "Built learning pathways for students to engage with practical digital skills.",
    ],
  },
  {
    title: "Assistant Operations Manager",
    company: "Bank of Khyber",
    location: "Mardan, Pakistan",
    dates: "Aug 2018 – Sep 2019",
    description: "Managed branch operations in a regulated financial environment with a focus on compliance, workflow coordination, transaction accuracy, and operational discipline.",
    bullets: [
      "Coordinated front-office and back-office operations.",
      "Supported governance, risk awareness, and financial operations.",
      "Built a strong foundation in process efficiency and operational discipline.",
    ],
  },
  {
    title: "Provincial Coordinator",
    company: "Million Smiles Foundation",
    location: "Pakistan",
    dates: "Jan 2018 – Dec 2020",
    description: "Led regional coordination of youth-led welfare initiatives aligned with Sustainable Development Goals.",
    bullets: [
      "Executed 15+ large-scale welfare initiatives.",
      "Coordinated volunteers and community stakeholders.",
      "Managed limited budgets and district-level outreach activities.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional Journey" intro="Six-plus years across startup ecosystems, education, banking operations, and community development.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <ExperienceItem key={e.title} item={e} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceItem({ item, index }: { item: typeof EXPERIENCE[number]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start`}
    >
      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
        <span className="grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background" />
      </div>
      <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8"}`}>
        <div className="text-xs font-semibold uppercase tracking-wider text-primary inline-flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5" /> {item.dates}
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
        <div className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-2 flex-wrap">
          <Building2 className="h-4 w-4 text-emerald" />
          <span className="font-medium text-foreground/80">{item.company}</span>
          <span>·</span>
          <span>{item.location}</span>
        </div>
      </div>
      <div className={`pl-12 md:pl-0 ${isLeft ? "" : "md:order-1 md:pr-8"}`}>
        <div className="card-hover rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          <ul className="mt-4 space-y-2">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Skills ---------------- */
const SKILL_GROUPS = [
  { title: "Program & Project Management", icon: Target, items: ["Program Design", "Technical Project Management", "KPI Tracking", "Milestone Planning", "Reporting Systems", "Agile/Scrum Working Knowledge"] },
  { title: "Startup & Venture Ecosystems", icon: Rocket, items: ["Startup Incubation", "Acceleration Programs", "Venture Development", "Founder Support", "Investor Readiness", "Market Access"] },
  { title: "Operations & Strategy", icon: LineChart, items: ["Business Operations", "Strategic Planning", "Process Improvement", "Performance Management", "Governance", "Risk Awareness"] },
  { title: "Leadership & Stakeholder Management", icon: Network, items: ["Cross-functional Leadership", "Public-Sector Coordination", "Partnership Development", "Communication", "Team Collaboration", "Presentation"] },
  { title: "Digital & Business Skills", icon: Globe2, items: ["Business Intelligence", "Digital Marketing", "E-commerce", "Financial Management", "Innovation Strategy", "AI Project Management"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core Competencies" intro="Multi-disciplinary capabilities across program execution, startup growth, and business strategy.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="card-hover rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="text-xs rounded-full border border-border bg-surface px-3 py-1.5 text-foreground/80">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Certifications ---------------- */
const CERTS = [
  { name: "AI Project Management", issuer: "PMI / NASBA" },
  { name: "Project Management", issuer: "Google" },
  { name: "Digital Marketing & E-commerce", issuer: "Google" },
  { name: "Business Intelligence", issuer: "Google" },
  { name: "FinTech: Finance Industry Transformation and Regulation", issuer: "HKUST" },
  { name: "Investment Management Specialization", issuer: "University of Geneva" },
  { name: "Innovation and Entrepreneurship", issuer: "Tecnológico de Monterrey" },
  { name: "Managerial Economics and Business Analysis", issuer: "University of Illinois Urbana-Champaign" },
  { name: "Financial Management Specialization", issuer: "University of Illinois Urbana-Champaign" },
  { name: "Essentials of Corporate Finance", issuer: "University of Melbourne" },
  { name: "Entrepreneurship Strategy: From Ideation to Exit", issuer: "HEC Paris" },
];

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications & Professional Development" intro="Continuous learning across program management, fintech, investment, innovation, and corporate finance.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((c) => (
          <div key={c.name} className="card-hover rounded-2xl border border-border bg-card p-5 flex gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald/15 text-emerald">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm leading-snug">{c.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
const EDUCATION = [
  { degree: "Master of Arts in International Relations", school: "Abdul Wali Khan University Mardan", years: "2020 – 2022" },
  { degree: "Master of Business Administration", school: "Abdul Wali Khan University Mardan", years: "2016 – 2019" },
  { degree: "Bachelor of Arts", school: "Abdul Wali Khan University Mardan", years: "2016 – 2018" },
  { degree: "Diploma in Business and Accounting (ACCA)", school: "Professional Academy of Commerce", years: "2014 – 2016" },
];

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid sm:grid-cols-2 gap-4">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="card-hover rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold leading-snug">{e.degree}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {e.years}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Research ---------------- */
const RESEARCH = [
  {
    type: "Publication",
    title: "The Influence of On-the-Job Training on Employee Performance of SMEs in Nowshera Region",
    description: "Research focused on the impact of employee training on SME performance and organizational outcomes.",
  },
  {
    type: "Conference Research",
    title: "Assessing the Impact of Quality of Earning on Stock Return of Firms: Evidence from Firms Listed on Pakistan Stock Exchange",
    description: "Presented at the 1st International Conference on Issues in Management and Social Sciences in the Context of COVID-19.",
  },
];

function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Research & Publications">
      <div className="grid md:grid-cols-2 gap-5">
        {RESEARCH.map((r) => (
          <div key={r.title} className="card-hover rounded-2xl border border-border bg-card p-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 text-foreground/80 px-3 py-1 text-xs font-medium">
              <BookOpen className="h-3.5 w-3.5" /> {r.type}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{r.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(`From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Meaningful" intro="I am open to global opportunities in program management, startup ecosystems, operations, strategy, and technical program management. Whether you are building an innovation program, scaling a startup ecosystem, improving venture operations, or looking for a program leader who can turn strategy into execution, let's connect.">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={MapPin} label="Location" value="Pakistan" />
          <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/anwarr-ulhaq" href={LINKEDIN_URL} external />
          <a href="/resume.pdf" className="card-hover mt-2 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Your full name" required />
            <Field name="email" type="email" label="Email" placeholder="you@company.com" required />
          </div>
          <Field name="subject" label="Subject" placeholder="How can I help?" required />
          <div>
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell me about your program, role, or opportunity..."
              className="mt-1.5 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            <Send className="h-4 w-4" /> {sent ? "Opening your mail app…" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: any; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{inner}</a>;
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition" />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="container-px mx-auto max-w-7xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © 2026 Anwar Ulhaq. Built with strategy, execution, and impact.
        </div>
        <div className="flex items-center gap-3">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Section helper ---------------- */
function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow?: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10">
          {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>}
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h2>
          {intro && <p className="mt-3 text-muted-foreground leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
