'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Native API submit handler logic goes here
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto">Have a role, project alignment, or technical request? Let&apos;s build together.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <MapPin className="text-brand-blue" size={20} />
            <div><h4 className="text-xs font-bold text-slate-400">Location</h4><p className="text-sm font-medium">Antipolo City, Philippines</p></div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <Mail className="text-brand-purple" size={20} />
            <div><h4 className="text-xs font-bold text-slate-400">Email</h4><p className="text-sm font-medium">neilbudol@gmail.com</p></div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <Phone className="text-brand-cyan" size={20} />
            <div><h4 className="text-xs font-bold text-slate-400">Mobile</h4><p className="text-sm font-medium">+63 962 304 0219</p></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 glass p-6 md:p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Name</label>
              <input type="text" required className="w-full bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400">Email</label>
              <input type="email" required className="w-full bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">Subject</label>
            <input type="text" required className="w-full bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">Message</label>
            <textarea rows={4} required className="w-full bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-brand-blue text-white font-medium shadow-md flex items-center justify-center gap-2 hover:bg-brand-blue/90 active:scale-95 transition-all">
            <Send size={16}/> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}