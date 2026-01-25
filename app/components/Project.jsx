'use client'

import { useEffect, useState } from 'react'
import { API_URL } from '../lib/api'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/portfolio`)
      .then(res => res.json())
      .then(data => setProjects(data.projects || []))
  }, [])

  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute -right-40 top-20 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center animate-fade-up">
          <span className="inline-block mb-4 text-sm font-medium text-blue-500 tracking-widest uppercase">
            Portfolio
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            My Recent Works
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
            A selection of projects I’ve worked on, ranging from web applications
            to system platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group
                bg-white/80 dark:bg-slate-800/80
                backdrop-blur
                rounded-2xl p-6
                border border-slate-200 dark:border-white/10
                shadow-lg shadow-black/5 dark:shadow-black/30
                hover:-translate-y-2 hover:shadow-xl
                transition
                animate-fade-up
              "
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="
                h-40 rounded-xl mb-5
                bg-slate-200 dark:bg-slate-700
                flex items-center justify-center
                overflow-hidden
              ">
                <span className="text-slate-400 dark:text-gray-500 text-sm">
                  Image
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech_stack
                  ?.split(',')
                  .map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs
                        px-3 py-1 rounded-full
                        bg-blue-500/10 text-blue-600
                        dark:text-blue-400
                      "
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>

              {/* Link */}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  className="
                    inline-flex items-center gap-1
                    mt-5 text-sm font-medium
                    text-blue-600 dark:text-blue-400
                    hover:underline
                  "
                >
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
