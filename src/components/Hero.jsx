import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0d] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative gradient overlay - won’t block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl rounded-xl bg-black/40 p-6 backdrop-blur-md ring-1 ring-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-200 ring-1 ring-purple-400/30">
            <Rocket className="h-4 w-4" />
            <span>Fantasy • Futuristic • Cyber Aesthetic</span>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Crafting surreal web experiences
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              with code and imagination
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            I blend interactive 3D, motion, and modern web tech to build interfaces that feel alive. Dive into my world of fantastical UI.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              Contact Me
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/20 transition hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/20 transition hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
