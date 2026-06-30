'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = ['Home', 'About', 'Works', 'Contact']

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
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-white/70 dark:bg-slate-900/70
        border-b border-black/5 dark:border-white/5
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          flex items-center justify-between
          px-4 md:px-10 py-4
        "
      >
        {/* LOGO */}
        <h1
          className="
            font-semibold
            text-sm sm:text-base md:text-lg
            text-slate-900 dark:text-white
            truncate
          "
        >
          Azhar <span className="text-blue-500">As</span>
          <span className="hidden sm:inline"> Rahmatulloh</span>
          <span className="hidden sm:inline text-sm text-gray-500 dark:text-gray-400 ml-2">
            S.Kom
          </span>
        </h1>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              relative w-9 h-9
              flex items-center justify-center
              rounded-full
              text-slate-700 dark:text-gray-300
              hover:bg-black/5 dark:hover:bg-white/10
              active:scale-90
              transition-all duration-200
            "
            aria-label="Toggle theme"
          >
            <svg
              className={`w-5 h-5 absolute transition-all duration-300 ${
                isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="4" />
              <path
                strokeLinecap="round"
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              />
            </svg>
            <svg
              className={`w-5 h-5 absolute transition-all duration-300 ${
                isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm text-slate-700 dark:text-gray-300">
            {NAV_ITEMS.map((item) => (
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

          {/* HAMBURGER -> X */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-5 h-[2px] bg-slate-700 dark:bg-gray-300 transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute w-5 h-[2px] bg-slate-700 dark:bg-gray-300 transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute w-5 h-[2px] bg-slate-700 dark:bg-gray-300 transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden
          bg-white dark:bg-slate-900
          transition-all duration-300 ease-in-out
          ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pb-4 flex flex-col gap-1 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                py-2.5 px-2 rounded-lg
                border-b border-black/5 dark:border-white/10
                hover:bg-black/5 dark:hover:bg-white/5
                transition-colors
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}