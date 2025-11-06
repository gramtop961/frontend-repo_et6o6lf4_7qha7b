import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative z-10 bg-[#0a0a0d] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-white/70">Tell me about your idea — let’s conjure something extraordinary.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-400/40 focus:ring"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-400/40 focus:ring"
            placeholder="Email address"
            required
          />
          <textarea
            rows="5"
            className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-400/40 focus:ring"
            placeholder="Your message..."
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-3 text-emerald-200">
            {status}
          </div>
        )}

        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-white/60">
          © {new Date().getFullYear()} Fantasia. Crafted with stardust.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
