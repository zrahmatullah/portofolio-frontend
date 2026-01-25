'use client'

import { useEffect, useState } from 'react'
import { API_URL } from '../lib/api'

export default function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    if (!API_URL) return   // ⬅️ guard penting untuk production

    fetch(`${API_URL}/portfolio`)
      .then(res => res.json())
      .then(data => setAbout(data.about))
      .catch(err => console.error('API error:', err))
  }, [API_URL])            // ⬅️ dependency yang benar

  if (!about) return null

  return (
    <section
      id="about"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
    >
      <div className="absolute -left-40 top-20 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        <div className="animate-fade-up">
          <span className="inline-block mb-4 text-sm font-medium text-blue-500 tracking-widest uppercase">
            About me Azhar
          </span>

          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
            Who I Am
          </h2>

          <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {about.description}
          </p>
        </div>

        <div className="flex justify-center animate-fade-up animation-delay-200">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur flex items-center justify-center shadow-xl">
            <span className="text-slate-400 dark:text-gray-500">
              Illustration
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
