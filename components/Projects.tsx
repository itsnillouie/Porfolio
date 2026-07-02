'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const featuredProjects = [
  {
    title: "Project Management System",
    client: "Philippine National Police (ITMS Department)",
    description: "Developed a centralized Project Management System adopted by the System Management Division. The platform streamlines project tracking, task management, documentation, and workflow coordination while improving collaboration between departments.",
    responsibilities: ["Full-stack development", "Backend architecture", "API integration", "Database design", "Documentation"],
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
    github: "https://github.com/itsnillouie"
  },
  {
    title: "EcoCyclix (Capstone Thesis)",
    client: "Don Bosco Technical College",
    description: "An IoT-integrated Automated Bicycle Carousel Parking System with biometric authentication designed to improve bicycle security and accessibility. Led the development team while ensuring successful project delivery and stakeholder compliance.",
    responsibilities: ["Team Leadership", "Project Management", "Backend Development", "Database Design", "Documentation"],
    tech: ["Laravel", "PHP", "MySQL", "IoT Integration"],
    github: "https://github.com/itsnillouie"
  }
];

const githubMockData = [
  { name: "MercedesBenz", desc: "A sleek configuration concept showcase interface.", lang: "JavaScript" },
  { name: "Coco-Tea", desc: "E-Commerce solution platform for dynamic order matching management systems.", lang: "PHP" },
  { name: "Facebook Clone", desc: "Social framework infrastructure mimicking native feed pipelines.", lang: "JavaScript" },
  { name: "Penguin Fishing", desc: "Interactive game canvas simulation integrating math vectors.", lang: "HTML" },
  { name: "Pokemon Memory Match", desc: "Dynamic memory mechanics app utilizing state synchronization.", lang: "JavaScript" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-16">Featured Systems</h2>
        <div className="space-y-12">
          {featuredProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden grid lg:grid-cols-12 gap-6 p-6 lg:p-8 border border-slate-200 dark:border-slate-800"
            >
              <div className="lg:col-span-4 bg-slate-900/10 dark:bg-white/5 rounded-2xl flex items-center justify-center p-8 border border-dashed border-slate-300 dark:border-slate-700 min-h-[200px]">
                <Code className="w-12 h-12 text-slate-400 opacity-60" />
              </div>
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{project.client}</span>
                  <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-1.5 text-slate-500">Key Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.responsibilities.map((r, idx) => <span key={idx} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{r}</span>)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div className="flex gap-2">
                    {project.tech.map((t) => <span key={t} className="text-xs font-semibold text-brand-purple">#{t}</span>)}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium hover:text-brand-blue">
                    <Github size={14}/> Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-12">Open Source Repositories</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubMockData.map((repo, i) => (
            <motion.a 
              href={`https://github.com/itsnillouie/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              key={i}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/20 flex flex-col justify-between h-40"
            >
              <div>
                <h4 className="font-bold group-hover:text-brand-blue transition-colors text-base flex items-center justify-between">
                  {repo.name} <ExternalLink size={14} className="opacity-40" />
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">{repo.desc}</p>
              </div>
              <span className="text-xs font-semibold text-brand-cyan">{repo.lang}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}