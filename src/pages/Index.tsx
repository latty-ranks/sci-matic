import { Calculator, FlaskConical, Leaf, Atom, Zap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SubjectCard from "@/components/SubjectCard";

const subjects = [
  {
    title: "Mathematics",
    description: "Algebra, geometry, trigonometry, statistics and more with interactive calculators.",
    icon: Calculator,
    colorClass: "bg-math",
    to: "/topics?subject=math",
  },
  {
    title: "Physics",
    description: "Forces, motion, electricity, waves and the laws that govern the universe.",
    icon: Zap,
    colorClass: "bg-physics",
    to: "/topics?subject=physics",
  },
  {
    title: "Chemistry",
    description: "Atoms, bonding, reactions and organic chemistry — from basics to advanced.",
    icon: Atom,
    colorClass: "bg-chemistry",
    to: "/topics?subject=chemistry",
  },
  {
    title: "Biology",
    description: "Cells, human systems, ecology, genetics and the science of living things.",
    icon: Leaf,
    colorClass: "bg-biology",
    to: "/topics?subject=biology",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-foreground"
              style={{
                width: `${60 + i * 40}px`,
                height: `${60 + i * 40}px`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 16}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium text-primary-foreground">
            <BookOpen className="h-4 w-4" />
            Uganda S.1 – S.4 Curriculum
          </div>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-6xl">
            Latif's Study Hub
          </h1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">× PASH MEDIA</p>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Your AI-powered study companion for Mathematics, Physics, Chemistry & Biology.
            Educate. Together we elevate. 🇺🇬
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Explore Topics
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Calculator className="h-4 w-4" />
              Math Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Choose Your Subject</h2>
          <p className="text-muted-foreground">Select a subject to explore topics from Senior 1 to Senior 4</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, i) => (
            <SubjectCard key={subject.title} {...subject} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/50 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            { icon: FlaskConical, title: "Uganda Curriculum", desc: "Content aligned with the UNEB Senior 1–4 syllabus." },
            { icon: Calculator, title: "Interactive Tools", desc: "Pythagorean theorem, equation solvers and more." },
            { icon: BookOpen, title: "Clear Explanations", desc: "Formulas, key points and step-by-step guides." },
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p className="font-medium">Latif's Study Hub × PASH MEDIA — Educate. Together we elevate. 🇺🇬</p>
        <p className="mt-1 text-xs">For support: latifisabirye123@gmail.com | © 2026 Pash Media Services</p>
      </footer>
    </div>
  );
};

export default Index;
