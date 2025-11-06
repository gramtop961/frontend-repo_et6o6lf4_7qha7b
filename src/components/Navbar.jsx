import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-fuchsia-500 to-indigo-500">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold tracking-wider text-white/90">Fantasia</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-fuchsia-500/30 md:block"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
