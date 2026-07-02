'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const certs = [
  "Cybersecurity Essentials — Cisco Networking Academy",
  "Introduction to IoT — Cisco Networking Academy",
  "Introduction to Cybersecurity — Cisco Networking Academy",
  "CSS NC II – Computer Systems Servicing (Networking)"
];

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5 space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <GraduationCap className="text-brand-blue" /> Academic Pathway
        </h2>
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 space-y-4">
          <div>
            <span className="text-xs font-bold text-slate-400">2021 – 2026</span>
            <h3 className="text-xl font-bold mt-0.5">Bachelor of Information Technology</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Don Bosco Technical College</p>
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-1">Capstone Thesis</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
              &ldquo;EcoCyclix: A Biometric-Integrated Automated Bicycle Carousel Parking System for Enhanced Security and Accessibility&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <Award className="text-brand-purple" /> Professional Credentials
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl glass border border-slate-200 dark:border-slate-800 flex items-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
              <p className="text-xs font-medium leading-relaxed">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}