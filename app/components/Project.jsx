'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../lib/portfolioData'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { projects } = portfolioData

  // Dynamically extract categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  // Gradients list to give fallback cards a beautiful premium look
  const gradients = [
    'from-blue-600 to-cyan-500',
    'from-purple-600 to-pink-500',
    'from-emerald-500 to-teal-400',
    'from-amber-500 to-orange-400',
    'from-indigo-600 to-violet-500',
    'from-rose-500 to-pink-600'
  ]

  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-28 overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="absolute -right-40 top-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5 pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl dark:bg-cyan-505/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-3 text-sm font-semibold text-blue-500 tracking-widest uppercase">
            Portfolio
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Recent Works
          </h2>

          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />

          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on, ranging from full-stack web
            applications to specialized front-end layouts.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  relative px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase
                  transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${isActive 
                    ? 'text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                  }
                `}
              >
                {/* Active Indicator Slide Background */}
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            )
          })}
        </div>

        {/* PROJECTS GRID WITH MORPHING ANIMATIONS */}
        <motion.div 
          layout 
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => {
              // Select deterministic gradient based on index
              const gradient = gradients[i % gradients.length]
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  key={p.id}
                  className="
                    group relative flex flex-col justify-between
                    bg-white/80 dark:bg-slate-900/60
                    backdrop-blur-md
                    rounded-2xl p-6
                    border border-slate-200 dark:border-white/10
                    shadow-md shadow-slate-200/50 dark:shadow-black/40
                    hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-black/70
                    hover:border-blue-500/20 dark:hover:border-blue-400/20
                    transition-all duration-300
                    overflow-hidden
                  "
                >
                  <div>
                    {/* CARD LIGHT GLOW */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/5 group-hover:to-cyan-400/5 transition-all duration-300 pointer-events-none" />

                    {/* DYNAMIC CARD IMAGE HEADER (Gradient fallback or actual image) */}
                    <div
                      className="
                        relative h-40 rounded-xl mb-5
                        overflow-hidden flex items-center justify-center
                      "
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="
                            w-full h-full object-cover
                            group-hover:scale-105
                            transition-transform duration-500 ease-out
                          "
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center opacity-85 group-hover:scale-105 transition-transform duration-500 ease-out`}>
                          {/* Decorative pattern lines overlay */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]" />
                          <svg
                            className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform duration-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Shine Sweep On Hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      {/* Floating Category Badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-widest bg-slate-900/80 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    {/* TECH STACK TAGS */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tech_stack.split(',').map((tech, idx) => (
                        <span
                          key={idx}
                          className="
                            text-[10px] font-bold uppercase tracking-wider
                            px-2.5 py-1 rounded-md
                            bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                            ring-1 ring-slate-200/50 dark:ring-white/5
                            group-hover:ring-blue-500/10 dark:group-hover:ring-blue-400/10
                            transition-all
                          "
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    {/* LINK FOOTER */}
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                      {p.demo_url && (
                        <a
                          href={p.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1.5
                            text-sm font-semibold
                            text-blue-600 dark:text-blue-400
                            hover:text-blue-700 dark:hover:text-blue-300
                            transition-colors
                          "
                        >
                          Live Demo
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {p.code_url && (
                        <a
                          href={p.code_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1.5
                            text-sm font-semibold
                            text-slate-600 dark:text-slate-400
                            hover:text-slate-900 dark:hover:text-white
                            transition-colors
                          "
                        >
                          Source Code
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}