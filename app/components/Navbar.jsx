'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <nav className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-white/70 dark:bg-slate-900/70
      border-b border-black/5 dark:border-white/5
    ">
      <div className="
        max-w-6xl mx-auto
        flex items-center justify-between
        px-4 md:px-10 py-4
      ">
        {/* LOGO */}
        {/* <h1 className="font-semibold text-base md:text-lg text-slate-900 dark:text-white truncate">
         */}
         <h1 className="
            font-semibold
            text-sm sm:text-base md:text-lg
            text-slate-900 dark:text-white
            truncate
          ">

          Azhar <span className="text-blue-500">As</span>
          <span className="hidden sm:inline"> Rahmatulloh</span>
          <span className="hidden sm:inline text-sm text-gray-500 dark:text-gray-400 ml-2">
            S.Kom
          </span>
        </h1>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              text-slate-700 dark:text-gray-300
              hover:bg-black/5 dark:hover:bg-white/10
              transition
            "
            aria-label="Toggle theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm text-slate-700 dark:text-gray-300">
            {['Home', 'About', 'Works', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative transition
                    hover:text-blue-600 dark:hover:text-white
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-blue-500
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          md:hidden
          px-4 pb-4
          flex flex-col gap-3
          text-sm
          bg-white dark:bg-slate-900
        ">
          {['Home', 'About', 'Works', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-black/5 dark:border-white/10"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
