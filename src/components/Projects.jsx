import React from 'react';
import { Code2, Layout, Palette } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI',
    tag: 'Frontend • Motion',
    icon: <Layout className="h-5 w-5" />,
    desc: 'A micro-interaction heavy UI kit inspired by sci-fi control panels and holographic displays.',
  },
  {
    title: 'Starlight Engine',
    tag: '3D • WebGL',
    icon: <Code2 className="h-5 w-5" />,
    desc: 'Lightweight 3D scene explorer with post-processing and cinematic camera moves.',
  },
  {
    title: 'Prism Craft',
    tag: 'Brand • Visual',
    icon: <Palette className="h-5 w-5" />,
    desc: 'Identity system with iridescent gradients and cyberpunk typography for a creative studio.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-[#0a0a0d] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of fantasy-meets-tech explorations.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 md:block"
          >
            Work with me
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-fuchsia-400/40 hover:from-fuchsia-500/10"
            >
              <div className="mb-4 flex items-center gap-3 text-fuchsia-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30">
                  {p.icon}
                </span>
                <div className="text-xs uppercase tracking-wider text-white/60">{p.tag}</div>
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm text-fuchsia-300 opacity-0 transition group-hover:opacity-100">
                <span>View details</span>
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
