'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '../lib/portfolioData'

export default function About() {
  const { description, skills, milestones } = portfolioData.about

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const timelineVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  return (
    <section
      id="about"
      className="relative px-6 md:px-10 py-28 overflow-hidden bg-slate-50/50 dark:bg-slate-900/20"
    >
      {/* Background blobs */}
      <div className="absolute -left-40 top-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5 pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl dark:bg-cyan-500/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="inline-block mb-3 text-sm font-semibold text-blue-500 tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who I Am & What I Do
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* LEFT: BIO & CATEGORIZED SKILLS (7 Columns) */}
          <motion.div 
            className="md:col-span-7 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                My Story
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                {description}
              </p>
            </div>

            {/* CATEGORIZED SKILLS */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technical Expertise
              </h3>
              
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Frontend Category */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5 rounded-lg text-xs font-semibold
                          bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                          shadow-sm ring-1 ring-slate-200 dark:ring-white/10
                          hover:ring-blue-500 dark:hover:ring-blue-400 hover:text-blue-500 dark:hover:text-blue-400
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Category */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5 rounded-lg text-xs font-semibold
                          bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                          shadow-sm ring-1 ring-slate-200 dark:ring-white/10
                          hover:ring-blue-500 dark:hover:ring-blue-400 hover:text-blue-500 dark:hover:text-blue-400
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools Category */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                    Database & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5 rounded-lg text-xs font-semibold
                          bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                          shadow-sm ring-1 ring-slate-200 dark:ring-white/10
                          hover:ring-blue-500 dark:hover:ring-blue-400 hover:text-blue-500 dark:hover:text-blue-400
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: PROFESSIONAL EXPERIENCE TIMELINE (5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white px-2">
              My Journey
            </h3>

            <motion.div 
              className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 space-y-8 py-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={timelineVariants}
                  className="relative pl-7 group"
                >
                  {/* Timeline dot */}
                  <div className="
                    absolute -left-[9px] top-1.5
                    size-4 rounded-full
                    bg-slate-100 dark:bg-slate-950
                    border-2 border-slate-300 dark:border-slate-800
                    group-hover:border-blue-500 dark:group-hover:border-blue-400
                    group-hover:bg-blue-500 dark:group-hover:bg-blue-400
                    transition-all duration-300
                  " />

                  {/* Year Tag */}
                  <span className="
                    inline-block text-[11px] font-bold tracking-wider uppercase
                    px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:bg-blue-400/5 dark:text-blue-400
                    mb-2
                  ">
                    {item.year}
                  </span>

                  <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                    {item.role}
                  </h4>

                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    {item.company}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}