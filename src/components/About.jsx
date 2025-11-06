import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative z-10 bg-[#0a0a0d] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I’m a front-end engineer and visual tinkerer crafting interfaces that feel like spells. My toolkit includes React, motion design, and real-time 3D. I love blending usability with wonder.
            </p>
            <p className="mt-3 text-white/70">
              When I’m not coding, I experiment with shaders, design systems, and narrative-driven prototypes. I believe interfaces can be functional rituals that delight.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Capabilities</h3>
            <ul className="mt-3 grid list-disc gap-2 pl-4 text-white/80 sm:grid-cols-2">
              <li>Reactive UI Architecture</li>
              <li>3D & WebGL Integration</li>
              <li>Design Systems</li>
              <li>Framer Motion & Micro-UX</li>
              <li>Accessibility</li>
              <li>Performance Tuning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
