'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Sync theme setting on initialization
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) setShowBackToTop(true);
      else setShowBackToTop(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 const toggleTheme = () =>
  setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan z-50 origin-left" style={{ scaleX }} />
      
      {/* Dynamic Global Theme Injector */}
      <div className="relative z-10">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { theme, toggleTheme } as any);
          }
          return child;
        })}
      </div>

      {/* Floating Particles/Blob background decoration elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-brand-blue mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-brand-purple mix-blend-multiply filter blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-[20%] left-[30%] w-80 h-80 rounded-full bg-brand-cyan mix-blend-multiply filter blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Back to Top Trigger */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:scale-110 active:scale-95 transition-transform z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}