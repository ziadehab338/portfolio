'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  BrainCircuit,
  Database,
  Layers3,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

const projects = [
  {
    title: 'Intelligent Predictive Maintenance & Counterfactual Optimization System',
    category: 'Predictive Maintenance • Explainable AI • Optimization',
    description:
      'A complete intelligent predictive maintenance system that goes beyond traditional machine learning by predicting machine failure, identifying failure type, assessing risk before breakdown, and generating preventive recommendations through explainable AI.',
    points: [
      'Binary failure prediction using Logistic Regression',
      'Multi-class failure type classification using XGBoost',
      'Risk level assessment even before failure happens',
      'Counterfactual explanations using DiCE',
      'Interactive Streamlit web application for real-time analysis',
      'Counterfactual visualization between original and safe states',
      'Sensor importance analysis for decision transparency',
      'Cost-based recommendation layer to suggest the lowest-change solution',
      'Multiple generation methods: Genetic, KD-Tree, and Random',
    ],
    link: 'https://github.com/ziadehab338',
  },
  {
    title: 'Terms & Privacy Risk Detection System',
    category: 'Explainable AI • NLP • Legal Tech',
    description:
      'An advanced hybrid explainable AI system that analyzes Terms of Service and Privacy Policies, uncovers hidden risks, and transforms complex legal language into clear, interpretable, and actionable insights.',
    points: [
      'Clause-level legal text analysis',
      'Hybrid AI architecture: rule-based reasoning + machine learning',
      'Binary risky / non-risky clause prediction',
      'Multi-class risk type classification',
      'Risk scoring with human-readable explanations',
      'Detects data sharing, tracking, payments, permissions, and legal liability risks',
      'Comparative layer between rule-based and ML outputs',
      'Interactive Streamlit interface for user-friendly analysis',
      'Built for transparency, interpretability, and real-world user awareness',
    ],
    link: 'https://github.com/ziadehab338',
  },
  {
    title: 'University Management Web Application',
    category: 'Full-Stack Web Development • Team Project',
    description:
      'A complete university management website developed with my team, where we built both the front end and back end and implemented full user flows across the university ecosystem.',
    points: [
      'Built as a full website for university operations and campus activities',
      'Worked on both frontend and backend development',
      'Covered major user roles including Student, Doctor, TA, Professor, and external users',
      'Implemented different user cases across the university environment',
      'Included support for bazaars, events, and campus interactions',
      'Focused on real workflows and complete user journeys',
    ],
    link: 'https://github.com/ziadehab338',
  },
  {
    title: 'Attack on Titan Game',
    category: 'Java • OOP • GUI',
    description:
      'A GUI-based Java game implementing core object-oriented design concepts such as inheritance and polymorphism.',
    points: [
      'OOP design',
      'Game logic implementation',
      'Desktop GUI project',
      'Clean Java structure',
    ],
    link: 'https://github.com/ziadehab338',
  },
  {
    title: 'Chess System',
    category: 'Prolog • Logic Programming',
    description:
      'A logic-based chess engine that validates legal moves and enforces rules using declarative programming.',
    points: [
      'Legal move validation',
      'Rule-based engine',
      'Complex chess constraints',
      'Declarative logic',
    ],
    link: 'https://github.com/ziadehab338',
  },
  {
    title: 'Data Analysis Internship Work',
    category: 'Python • Oracle • Data Cleaning',
    description:
      'Automation work built during internship experience to improve data cleaning and support business reporting quality.',
    points: [
      'Python automation scripts',
      'Cleaner reporting flow',
      'Industry-focused work',
      'Practical impact',
    ],
    link: 'https://github.com/ziadehab338',
  },
];

const skills = {
  languages: ['Java', 'Python', 'C', 'SQL', 'Haskell', 'Prolog', 'JavaScript'],
  engineering: [
    'OOP',
    'Data Structures',
    'Algorithms',
    'Database Design',
    'Full-Stack Development',
    'Problem Solving',
  ],
  ai: [
    'Machine Learning',
    'NLP',
    'Explainable AI',
    'Data Preprocessing',
    'Model Training',
    'Risk Classification',
  ],
  tools: ['Git', 'GitHub', 'Postman', 'Power BI', 'Excel', 'Visual Studio', 'Spyder'],
};

function SectionTitle({
  mini,
  title,
  subtitle,
}: {
  mini: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
        {mini}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div variants={item}>
      <Card className="group h-full overflow-hidden rounded-[30px] border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-[0_25px_80px_rgba(34,211,238,0.08)]">
        <CardContent className="p-7">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-slate-200 hover:bg-slate-900/80"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ZiadEhabPortfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(to_bottom,#020617,#020617,#030712)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-[100px] h-[340px] w-[340px] rounded-full bg-fuchsia-500/15 blur-[130px]" />
        <div className="absolute bottom-[-80px] left-[25%] h-[340px] w-[340px] rounded-full bg-blue-500/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%)]" />
      </div>

      <main className="mx-auto flex w-full max-w-[1450px] flex-col gap-24 px-5 py-6 md:px-10 lg:px-16">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="sticky top-4 z-50"
        >
          <div className="mx-auto flex w-full items-center justify-between rounded-[26px] border border-white/10 bg-slate-900/60 px-5 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-sm font-black text-white shadow-lg">
                ZE
              </div>
              <div>
                <p className="text-sm font-bold text-white">Zeiad Ehab</p>
                <p className="text-xs text-slate-400">Software Engineer • AI & Data</p>
              </div>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <a href="#about" className="text-sm text-slate-300 transition hover:text-white">
                About
              </a>
              <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">
                Projects
              </a>
              <a href="#skills" className="text-sm text-slate-300 transition hover:text-white">
                Skills
              </a>
              <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ziadehab338"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zeiad-ehab-b3ab1b349?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.nav>

        <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.25)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_30%,rgba(99,102,241,0.08)_62%,transparent)]" />
          <div className="absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="absolute bottom-[-80px] left-[-40px] h-60 w-60 rounded-full border border-cyan-400/10 bg-cyan-400/10 blur-3xl" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative grid gap-10 p-7 md:p-10 xl:grid-cols-[1.15fr_0.85fr] xl:p-14"
          >
            <motion.div variants={item} className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-cyan-200 hover:bg-cyan-400/10">
                  Computer Engineering Student
                </Badge>
                <Badge className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1 text-violet-200 hover:bg-violet-400/10">
                  Software Engineering + Data Science
                </Badge>
              </div>

              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
                  PROJECTS & EXPERIENCE
                </p>

                <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-white md:text-7xl xl:text-[96px]">
                  Zeiad Ehab
                </h1>

                <p className="max-w-3xl text-xl leading-9 text-slate-200 md:text-2xl">
                  Software Engineer & AI Enthusiast building polished digital products,
                  explainable systems, and data-driven tools that solve real problems.
                </p>

                <p className="max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                  Focused on full-stack development, machine learning, and intelligent
                  decision-support systems, with hands-on work in legal risk analysis,
                  predictive maintenance, and software engineering.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-white px-6 text-slate-950 shadow-[0_10px_40px_rgba(255,255,255,0.18)] hover:bg-slate-200"
                >
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  <a href="https://github.com/ziadehab338" target="_blank" rel="noreferrer">
                    Explore GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-cyan-400/20 bg-cyan-400/5 px-6 text-cyan-100 hover:bg-cyan-400/10"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { number: '6+', label: 'Projects showcased' },
                  { number: '2022', label: 'Started Computer Engineering at GUC' },
                  { number: '1', label: 'Industry internship' },
                  { number: 'AI', label: 'Focus on practical smart systems' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                    className="rounded-[28px] border border-white/10 bg-slate-950/40 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
                  >
                    <div className="text-4xl font-black text-white">{stat.number}</div>
                    <div className="mt-3 text-sm leading-7 text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-6">
              <Card className="overflow-hidden rounded-[32px] border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-[0_20px_80px_rgba(34,211,238,0.08)]">
                <CardContent className="relative p-8">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-3xl font-black text-white shadow-[0_20px_50px_rgba(59,130,246,0.35)]"
                    >
                      ZE
                    </motion.div>

                    <div>
                      <h2 className="text-3xl font-black text-white">Software Engineer</h2>
                      <p className="mt-1 text-base text-slate-400">AI • Data • Full-Stack</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-slate-300">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Location</p>
                      <p className="mt-2 text-white">New Cairo, Cairo, Egypt</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Email</p>
                      <a
                        href="mailto:zeiadehabmohamed@gmail.com"
                        className="mt-2 block text-white transition hover:text-cyan-300"
                      >
                        zeiadehabmohamed@gmail.com
                      </a>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Phone</p>
                      <a
                        href="tel:+201069911789"
                        className="mt-2 block text-white transition hover:text-cyan-300"
                      >
                        +20 106 991 1789
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://github.com/ziadehab338"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-slate-200 transition hover:bg-white/10"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/zeiad-ehab-b3ab1b349?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-slate-200 transition hover:bg-white/10"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="/cv.pdf"
                     target="_blank"
                     rel="noreferrer"
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-4 text-center text-sm font-semibold text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-400/20"
                    >
                      View CV
                    </a>
                    <a
                      href="/cv.pdf"
                      download
                      className="rounded-2xl border border-violet-400/20 bg-violet-400/10 px-4 py-4 text-center text-sm font-semibold text-violet-100 transition hover:-translate-y-1 hover:bg-violet-400/20"
                    >
                      Download CV
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[32px] border-white/10 bg-white/[0.04] backdrop-blur-xl">
                <CardContent className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    What I Bring
                  </p>

                  <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">
                    <p>
                      Strong software engineering base in algorithms, databases, OOP, and
                      problem solving.
                    </p>
                    <p>
                      Hands-on work in explainable AI, machine learning pipelines, and
                      practical data-driven products.
                    </p>
                    <p>
                      Ability to turn technical work into polished, usable, and
                      presentation-ready solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full rounded-[32px] border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <SectionTitle
                  mini="About Me"
                  title="Engineering practical systems with real value"
                  subtitle="I focus on software engineering, machine learning, and explainable AI, while aiming to build projects that are both technically solid and visually polished."
                />
                <p className="mt-5 text-base leading-8 text-slate-300">
                  I am a Computer Engineering student at the German University in Cairo
                  with a strong interest in building systems that do more than just work —
                  they communicate value clearly and solve meaningful problems.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  I enjoy combining engineering structure with clean presentation so the
                  final product feels strong both technically and visually.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full rounded-[32px] border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <SectionTitle mini="Education & Experience" title="Built on real foundations" />

                <div className="mt-6 space-y-5">
                  <div className="rounded-[26px] border border-white/10 bg-slate-900/50 p-6 transition hover:bg-white/[0.05]">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-1 h-5 w-5 text-cyan-300" />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          German University in Cairo (GUC)
                        </h3>
                        <p className="mt-2 text-slate-300">Bachelor of Computer Engineering</p>
                        <p className="mt-1 text-sm text-slate-500">2022 – Present</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-slate-900/50 p-6 transition hover:bg-white/[0.05]">
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-5 w-5 text-violet-300" />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Data Analysis Intern — Ezz Steel
                        </h3>
                        <p className="mt-2 leading-7 text-slate-300">
                          Developed Python scripts to automate data cleaning for Oracle
                          databases, improving data quality and reporting accuracy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-slate-900/50 p-6 transition hover:bg-white/[0.05]">
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-5 w-5 text-cyan-300" />
                      <div>
                        <h3 className="text-xl font-bold text-white">Volunteering — AYB</h3>
                        <p className="mt-2 leading-7 text-slate-300">
                          Participated in community and charity activities supporting people
                          in need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="space-y-6">
          <SectionTitle
            mini="Featured Projects"
            title="Engineering Solutions & Intelligent Systems"
            subtitle="A curated collection of scalable applications and AI-driven systems designed to bridge the gap between complex logic and real-world impact."
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <Card className="group h-full overflow-hidden rounded-[30px] border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white/[0.07] hover:shadow-[0_30px_100px_rgba(34,211,238,0.08)]">
                  <CardContent className="relative flex h-full flex-col p-7">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-lg font-black text-cyan-200">
                        {project.title.charAt(0)}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        View
                      </a>
                    </div>

                    <p className="text-sm font-semibold tracking-wide text-cyan-300">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-slate-300 md:text-[15px]">
                      {project.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      {project.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="space-y-6">
          <SectionTitle
            mini="Technical Stack"
            title="Expertise & Technologies"
            subtitle="A comprehensive toolkit spanning Software Engineering, AI research, and Full-stack development."
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            <SkillCard title="Languages" items={skills.languages} />
            <SkillCard title="Software Engineering" items={skills.engineering} />
            <SkillCard title="AI & Data" items={skills.ai} />
            <SkillCard title="Tools" items={skills.tools} />
          </motion.div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <Card className="overflow-hidden rounded-[36px] border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 shadow-[0_30px_120px_rgba(0,0,0,0.20)]">
              <CardContent className="p-8 md:p-10 lg:p-12">
                <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <SectionTitle
                      mini="Contact"
                      title="Let’s build something valuable"
                      subtitle="Open to internships, software engineering opportunities, and AI/data-driven work."
                    />

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200"
                      >
                        <a href="mailto:zeiadehabmohamed@gmail.com">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Me
                        </a>
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-2xl border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                      >
                        <a href="tel:+201069911789">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Me
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <a
                      href="mailto:zeiadehabmohamed@gmail.com"
                      className="rounded-[24px] border border-white/10 bg-slate-900/45 p-5 transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="mt-2 text-white">zeiadehabmohamed@gmail.com</p>
                    </a>

                    <a
                      href="https://github.com/ziadehab338"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[24px] border border-white/10 bg-slate-900/45 p-5 transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-slate-400">GitHub</p>
                          <p className="mt-2 text-white">github.com/ziadehab338</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-cyan-300" />
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/zeiad-ehab-b3ab1b349?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[24px] border border-white/10 bg-slate-900/45 p-5 transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-slate-400">LinkedIn</p>
                          <p className="mt-2 text-white">View Profile</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-cyan-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}