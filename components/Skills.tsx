'use client';

import { motion } from 'framer-motion';

const coreSkills = [
  { title: "Full-Stack Development", items: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"], progress: 95 },
  { title: "Backend Engineering", items: ["REST APIs", "Authentication", "Authorization", "Modular Architecture"], progress: 90 },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "Supabase"], progress: 85 },
  { title: "Software Engineering", items: ["Clean Code", "Scalable Architecture", "Performance Optimization"], progress: 90 },
  { title: "System Analysis", items: ["Requirements Gathering", "Workflow Optimization", "Documentation"], progress: 88 },
  { title: "Project Management", items: ["Agile", "Scrum", "Sprint Planning", "Task Delegation"], progress: 85 },
  { title: "Team Leadership", items: ["Mentoring", "Collaboration", "Communication", "Coordination"], progress: 92 },
];

const techStack = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  Backend: ["PHP", "Laravel"],
  Database: ["MySQL", "PostgreSQL", "Supabase"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  Methodologies: ["Agile", "Scrum"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSkills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-lg mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-brand-blue to-brand-cyan h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-10">Tech Ecosystem</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(techStack).map(([category, items], i) => (
            <div key={category} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30">
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-purple mb-3">{category}</h4>
              <ul className="space-y-1.5 text-sm font-medium">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}