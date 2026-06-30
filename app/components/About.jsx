'use client'

import { useEffect, useState } from 'react'
import { API_URL } from '../lib/api'

export default function About() {
  const [about, setAbout] = useState(null)
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!API_URL) {
      setStatus('error')
      return
    }

    fetch(`${API_URL}/portfolio`)
      .then((res) => res.json())
      .then((data) => {
        setAbout(data.about)
        setStatus('success')
      })
      .catch((err) => {
        console.error('API error:', err)
        setStatus('error')
      })
  }, [])

  return (
    <section
      id="about"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
    >
      <div className="absolute -left-40 top-20 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-[380px] h-[380px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* LEFT: TEXT */}
        <div className="animate-fade-up">
          <span className="inline-block mb-4 text-sm font-medium text-blue-500 tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
            Who I Am
          </h2>

          {status === 'loading' && (
            <div className="space-y-3 max-w-xl animate-pulse">
              <div className="h-4 rounded bg-slate-200 dark:bg-slate-700 w-full" />
              <div className="h-4 rounded bg-slate-200 dark:bg-slate-700 w-5/6" />
              <div className="h-4 rounded bg-slate-200 dark:bg-slate-700 w-4/6" />
            </div>
          )}

          {status === 'error' && (
            <p className="text-slate-500 dark:text-gray-500 italic max-w-xl">
              I&apos;m a web developer passionate about building modern,
              scalable, and maintainable applications. (Content is
              temporarily unavailable.)
            </p>
          )}

          {status === 'success' && about && (
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {about.description}
            </p>
          )}

          {/* SKILL TAGS */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Laravel', 'Next.js', 'Vue.js', 'Tailwind CSS', 'MySQL'].map((skill) => (
              <span
                key={skill}
                className="
                  px-3.5 py-1.5 rounded-full text-xs font-medium
                  bg-blue-500/10 text-blue-600 dark:text-blue-400
                  ring-1 ring-blue-500/20
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="flex justify-center animate-fade-up animation-delay-200">
          <div
            className="
              relative
              w-64 h-64 md:w-80 md:h-80
              rounded-3xl
              bg-white/80 dark:bg-slate-800/80
              backdrop-blur
              flex items-center justify-center
              shadow-xl shadow-black/10 dark:shadow-black/30
              ring-1 ring-black/5 dark:ring-white/10
            "
          >
            <svg
              className="w-20 h-20 md:w-24 md:h-24 text-blue-500/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
              3+ yrs
            </div>
            <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
              S.Kom
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}