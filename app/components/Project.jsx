'use client'

import { useEffect, useState } from 'react'
import { API_URL } from '../lib/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!API_URL) {
      setStatus('error')
      return
    }

    fetch(`${API_URL}/portfolio`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || [])
        setStatus('success')
      })
      .catch((err) => {
        console.error('API error:', err)
        setStatus('error')
      })
  }, [])

  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="absolute -right-40 top-20 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -left-40 bottom-0 w-[380px] h-[380px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-14 text-center animate-fade-up">
          <span className="inline-block mb-4 text-sm font-medium text-blue-500 tracking-widest uppercase">
            Portfolio
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            My Recent Works
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on, ranging from web
            applications to system platforms.
          </p>
        </div>

        {/* LOADING STATE */}
        {status === 'loading' && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="
                  rounded-2xl p-6
                  bg-white/80 dark:bg-slate-800/80
                  border border-slate-200 dark:border-white/10
                  animate-pulse
                "
              >
                <div className="h-40 rounded-xl mb-5 bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700 mb-3" />
                <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
          </div>
        )}

        {/* ERROR / EMPTY STATE */}
        {status === 'error' && (
          <div className="text-center py-16 animate-fade-up">
            <p className="text-slate-500 dark:text-gray-500">
              Projects are temporarily unavailable. Please check back later.
            </p>
          </div>
        )}

        {status === 'success' && projects.length === 0 && (
          <div className="text-center py-16 animate-fade-up">
            <p className="text-slate-500 dark:text-gray-500">
              No projects to show yet — stay tuned!
            </p>
          </div>
        )}

        {/* GRID */}
        {status === 'success' && projects.length > 0 && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={p.id ?? i}
                className="
                  group relative
                  bg-white/80 dark:bg-slate-800/80
                  backdrop-blur
                  rounded-2xl p-6
                  border border-slate-200 dark:border-white/10
                  shadow-lg shadow-black/5 dark:shadow-black/30
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10
                  hover:border-blue-500/30
                  transition-all duration-300
                  animate-fade-up
                "
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: 1,
                }}
              >
                {/* GLOW ON HOVER */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/5 group-hover:to-cyan-400/5 transition-all duration-300 pointer-events-none" />

                {/* IMAGE */}
                <div
                  className="
                    relative h-40 rounded-xl mb-5
                    bg-gradient-to-br from-slate-200 to-slate-300
                    dark:from-slate-700 dark:to-slate-800
                    flex items-center justify-center
                    overflow-hidden
                  "
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-110
                        transition-transform duration-500 ease-out
                      "
                    />
                  ) : (
                    <svg
                      className="w-10 h-10 text-slate-400 dark:text-gray-500 group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v9.75m-18 0A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25m-18 0L21 17.25"
                      />
                    </svg>
                  )}

                  {/* SHINE SWEEP ON HOVER */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>

                {/* TECH STACK */}
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
                          ring-1 ring-blue-500/10
                          group-hover:ring-blue-500/30
                          transition-all
                        "
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>

                {/* LINK */}
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      mt-5 text-sm font-medium
                      text-blue-600 dark:text-blue-400
                    "
                  >
                    View project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}