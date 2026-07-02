'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify md:text-center">
          I am an Information Technology graduate passionate about building scalable web applications and solving real-world problems through software engineering. I enjoy developing full-stack systems, designing secure backend architectures, optimizing databases, and collaborating with teams using Agile methodologies. I continuously improve my skills by working on real projects and learning modern technologies.
        </p>
      </motion.div>
    </section>
  );
}