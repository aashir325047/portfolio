import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Cpu, Github, Linkedin, Mail, Microscope, Rocket, Sparkles, Workflow } from 'lucide-react';

const stats = [
  { label: 'ML Foundations', value: 'Regression + Classification' },
  { label: 'Signal Work', value: 'EMG & OCR Projects' },
  { label: 'Engineering Focus', value: 'Assistive Robotics' },
];

const skills = [
  'Python',
  'Machine Learning',
  'Signal Processing',
  'Embedded Systems',
  'Arduino',
  'C/C++',
  'React & TypeScript',
  'Computer Vision',
];

const projects = [
  {
    title: 'EMG-Controlled Prosthetic Hand',
    description: 'Built a human-centered assistive system that translates biosignals into control actions for a prosthetic hand with servo-based actuation.',
    impact: 'Assistive robotics • Embedded control',
  },
  {
    title: 'OCR & Image Processing Work',
    description: 'Explored text extraction and visual information processing pipelines with a focus on practical interpretation and pattern recognition.',
    impact: 'Computer Vision • Pattern Recognition',
  },
  {
    title: 'Applied ML Portfolio Projects',
    description: 'Developed foundational machine learning work around regression, classification, and model refinement through feature engineering and evaluation.',
    impact: 'ML fundamentals • Model improvement',
  },
];

const highlights = [
  'Aspiring AI/ML Engineer with a strong interest in intelligent assistive systems.',
  'Combines software engineering, machine learning, and embedded hardware thinking.',
  'Focused on building real-world solutions around biosignals, robotics, and human-computer interaction.',
];

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="text-lg font-semibold tracking-[0.3em] text-sky-300 uppercase">Aashir Ali Khan</div>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-20 lg:px-10">
        <section className="grid items-center gap-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-8 shadow-soft backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-200">
              <Sparkles size={16} /> AI / ML Engineer • Software Engineer
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building intelligent systems at the intersection of <span className="text-sky-300">AI</span>, <span className="text-violet-300">biomedical signals</span>, and <span className="text-emerald-300">assistive technology</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I am Aashir Ali Khan, an aspiring AI/ML engineer focused on practical solutions in machine learning, embedded systems, and human-centered robotics. My work bridges software engineering with biosignal-driven control systems and intelligent prosthetics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400">Explore Projects <ArrowRight size={18} /></a>
              <a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">Let’s Connect</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
            <div className="mb-6 flex items-center gap-3 text-sky-300">
              <BrainCircuit size={24} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">Profile Snapshot</span>
            </div>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 text-violet-300">
              <Microscope size={20} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">About Me</span>
            </div>
            <p className="text-slate-300">
              I am driven by the idea of turning raw signals and data into useful, human-centered intelligence. My path has been shaped by machine learning coursework, image and signal processing exploration, and hands-on work on EMG-driven prosthetic and robotic systems.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 text-emerald-300">
              <Rocket size={20} />
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

        <section id="projects" className="rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sky-300">
                <Workflow size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.25em]">Selected Projects</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">Applied projects with real-world relevance</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.25rem] border border-slate-800 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-5 inline-flex rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">{project.impact}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 text-amber-300">
              <Cpu size={20} />
              <span className="text-sm font-medium uppercase tracking-[0.25em]">Technical Stack</span>
            </div>
            <p className="text-slate-300">My growth path is grounded in core engineering principles, from classical ML to embedded hardware and modern frontend development.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-xl">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sky-300">
                <Mail size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.25em]">Contact</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">Let’s build something impactful together.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">I’m actively seeking opportunities where AI, machine learning, and assistive technologies can create meaningful impact.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:aashir@example.com" className="rounded-full bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200">Email Me</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"><Github size={18} className="inline" /> GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"><Linkedin size={18} className="inline" /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
