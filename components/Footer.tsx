import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-base">Neil Louie C. Budol</h4>
          <p className="text-xs text-slate-500 mt-0.5">Full-Stack Software Engineer</p>
        </div>
        <p className="text-xs text-slate-400 order-last sm:order-none">© 2026 All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/itsnillouie" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/neil-budol-813553399/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:neilbudol@gmail.com" className="text-slate-400 hover:text-brand-blue transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}