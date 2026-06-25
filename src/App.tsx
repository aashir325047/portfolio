import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const highlights = [
  'Aspiring AI/ML engineer building practical systems around biosignals and intelligent control.',
  'Bridges software engineering, machine learning, and embedded hardware with a human-centered design mindset.',
  'Focused on projects that can create real-world impact in assistive technology and robotics.',
];

const stats = [
  { value: '3+', label: 'Applied engineering domains' },
  { value: 'ML', label: 'Foundations in regression + classification' },
  { value: 'EMG', label: 'Biosignal-driven system interest' },
];

const projects = [
  {
    title: 'EMG-Controlled Prosthetic Hand',
    description: 'Developed an assistive robotics concept that converts biosignals into control commands for a prosthetic hand with servo actuation.',
    tag: 'Assistive Technology',
  },
  {
    title: 'OCR & Image Processing Work',
    description: 'Explored visual information pipelines and pattern recognition to extract meaning from images and documents.',
    tag: 'Computer Vision',
  },
  {
    title: 'Applied ML Projects',
    description: 'Built and refined models around regression, classification, and feature-driven experimentation to strengthen core AI skills.',
    tag: 'Machine Learning',
  },
];

const skillGroups = [
  {
    title: 'AI / ML',
    items: ['Python', 'Regression & Classification', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'Systems',
    items: ['Embedded Systems', 'Arduino', 'Signal Processing', 'Control Logic'],
  },
  {
    title: 'Software',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'C / C++'],
  },
];

const focusAreas = [
  {
    title: 'Applied Research Mindset',
    description: 'I enjoy turning ideas into working systems rather than just discussing them at a conceptual level.',
  },
  {
    title: 'Human-Centered Engineering',
    description: 'My strongest interest lies in technologies that support people, especially through robotics and assistive design.',
  },
  {
    title: 'Cross-Disciplinary Growth',
    description: 'I continue to grow across AI, signal processing, embedded hardware, and modern software development.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 text-base text-white">AA</span>
            Aashir Ali Khan
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-20 pt-8 lg:px-10 lg:pt-10">
        <section className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
              <Sparkles size={16} /> AI / ML Engineer • Software Engineer
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building thoughtful AI systems for <span className="text-sky-300">real-world impact</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I’m Aashir Ali Khan, an aspiring AI/ML engineer focused on practical solutions in machine learning, biosignal-driven systems, embedded technology, and assistive robotics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
                Explore Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">
                Let’s Connect
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
            <div className="flex items-center gap-3 text-sky-300">
              <BrainCircuit size={22} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">Profile Snapshot</span>
            </div>
            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-xl font-semibold text-white">AK</div>
                <div>
                  <p className="text-lg font-semibold text-white">Aashir Ali Khan</p>
                  <p className="text-sm text-slate-400">AI/ML • Embedded Systems • Robotics</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 text-violet-300">
              <Microscope size={18} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">About Me</span>
            </div>
            <p className="text-slate-300">
              My interest lies in the space where machine learning meets physical systems. I’m motivated by projects that translate data and signals into meaningful actions, especially in assistive technology and intelligent robotics.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 text-emerald-300">
              <Rocket size={18} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">What I’m Building</span>
            </div>
            <ul className="space-y-3 text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sky-300">
                <Workflow size={18} />
                <span className="text-sm font-medium uppercase tracking-[0.25em]">Selected Projects</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">Work that reflects both depth and direction.</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">Each project reflects a growing focus on intelligent systems, practical engineering, and purposeful problem-solving.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-200">{project.tag}</div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2 text-amber-300">
              <Zap size={18} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">Engineering Focus</span>
            </div>
            <div className="space-y-4">
              {focusAreas.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="skills" className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2 text-cyan-300">
              <Cpu size={18} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">Core Skills</span>
            </div>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sky-300">
                <Mail size={18} />
                <span className="text-sm font-medium uppercase tracking-[0.25em]">Contact</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">Let’s build something meaningful together.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">I’m open to opportunities where AI, intelligent systems, software engineering, and human-centered technology can create real value.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:aashir@example.com" className="rounded-full bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200">Email Me</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"><Github size={18} className="mr-2 inline" />GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"><Linkedin size={18} className="mr-2 inline" />LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
