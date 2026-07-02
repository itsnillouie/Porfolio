'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const fullRole ="Full-Stack Software Engineer";

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setRoleText(fullRole.slice(0, index + 1));

    index++;

    if (index > fullRole.length) {
      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-12 gap-8 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm tracking-widest uppercase font-semibold text-brand-blue">Welcome to my space</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-2">
              Neil Louie C. Budol
            </h1>
            <div className="h-10 mt-3">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                {roleText}<span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-base md:text-lg leading-relaxed">
              Specializing in backend systems, scalable web applications, database architecture, and modern software development solutions.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl font-medium bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all transform hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="/resume.pdf" download className="px-6 py-3 rounded-xl font-medium glass border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-0.5">
              Download Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-5 pt-4">
            <a href="https://github.com/itsnillouie">GitHub</a>
            <a href="https://www.linkedin.com/in/neil-budol-813553399/">LinkedIn</a>
            <a href="mailto:neilbudol@gmail.com">Email</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:col-span-5 glass p-6 md:p-8 rounded-3xl relative border border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Direct Matrix
          </h3>
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-3"><MapPin size={18} className="text-brand-blue"/> Antipolo City, Philippines</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand-purple"/> neilbudol@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand-cyan"/> +63 962 304 0219</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

