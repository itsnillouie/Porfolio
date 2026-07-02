'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const featuredProjects = [
  {
    title: "Project Management System",
    client: "Philippine National Police (ITMS Department)",
    description:
      "Developed a centralized Project Management System adopted by the System Management Division. The platform streamlines project tracking, task management, documentation, and workflow coordination while improving collaboration between departments.",
    responsibilities: [
      "Full-stack Development",
      "Backend Architecture",
      "API Integration",
      "Database Design",
      "Documentation",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
    github: "https://github.com/itsnillouie/Project-management-System",
  },
  {
    title: "ECOCYCLIX (Capstone Thesis)",
    client: "Don Bosco Technical College",
    description:
      "A smart waste management and recycling platform developed as our capstone project. I led the development team, designed the backend architecture, managed the database, and collaborated on integrating IoT features for an efficient recycling ecosystem.",
    responsibilities: [
      "Team Leadership",
      "Project Management",
      "Backend Development",
      "Database Design",
      "IoT Integration",
    ],
    tech: ["ASP.NET", "C#", "SQL Server", "IoT"],
    github: "https://github.com/itsnillouie/ECOCYCLIX",
  },
];

const githubRepositories = [
  {
    name: "Project Management System",
    desc: "A centralized project management system developed for the Philippine National Police (ITMS Department).",
    lang: "PHP / Laravel",
    url: "https://github.com/itsnillouie/Project-management-System",
  },
  {
    name: "ECOCYCLIX Admin Panel",
    desc: "Administrative dashboard for the ECOCYCLIX waste management platform.",
    lang: "ASP.NET",
    url: "https://github.com/itsnillouie/ecocyclix-admin-panel",
  },
  {
    name: "ECOCYCLIX",
    desc: "Smart waste management and recycling platform with IoT integration.",
    lang: "ASP.NET",
    url: "https://github.com/itsnillouie/ECOCYCLIX",
  },
  {
    name: "Mercedes-Benz Landing Page",
    desc: "Responsive Mercedes-Benz inspired landing page showcasing modern UI design.",
    lang: "HTML / CSS",
    url: "https://github.com/itsnillouie/MercedezBenz-",
  },
  {
    name: "Coco Tea",
    desc: "Modern tea shop website with responsive layouts and clean user interface.",
    lang: "HTML / CSS",
    url: "https://github.com/itsnillouie/Coco-Tea",
  },
  {
    name: "Penguin Fishing",
    desc: "A fun browser game where players help a penguin catch fish while avoiding obstacles.",
    lang: "JavaScript",
    url: "https://github.com/itsnillouie/PenguinFishing",
  },
  {
    name: "Pokémon Memory Match",
    desc: "A Pokémon-themed memory game built using JavaScript.",
    lang: "JavaScript",
    url: "https://github.com/itsnillouie/PokemonMemoryMatch",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto space-y-24"
    >
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-16">
          Featured Projects
        </h2>

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
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    {project.client}
                  </span>

                  <h3 className="text-2xl font-bold mt-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-2 text-slate-500">
                      Key Roles
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.responsibilities.map((role, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold text-brand-purple"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-brand-blue transition-colors"
                  >
                    <Github size={16} />
                    Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-12">
          Open Source Repositories
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubRepositories.map((repo, i) => (
            <motion.a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/20 flex flex-col justify-between h-44 transition-all"
            >
              <div>
                <h4 className="font-bold text-base flex items-center justify-between group-hover:text-brand-blue transition-colors">
                  {repo.name}
                  <ExternalLink
                    size={15}
                    className="opacity-50 group-hover:opacity-100"
                  />
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-5">
                  {repo.desc}
                </p>
              </div>

              <span className="text-xs font-semibold text-brand-cyan">
                {repo.lang}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}