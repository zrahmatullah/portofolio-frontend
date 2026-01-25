'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)

    if (next) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <nav className="
      sticky top-0 z-50
      flex justify-between items-center
      px-10 py-5
      backdrop-blur-md
      bg-white/70 dark:bg-slate-900/70
      border-b border-black/5 dark:border-white/5
      transition-colors
    ">
      <h1 className="font-semibold text-lg tracking-wide text-slate-900 dark:text-white">
        Azhar <span className="text-blue-500">As Rahmatulloh</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">S.Kom</span>
      </h1>
      <div className="flex items-center gap-6">
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
          {isDark ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M21.64 13.65A9 9 0 0110.35 2.36a7 7 0 1011.29 11.29z" />
            </svg>
        ) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M12 4.5a1 1 0 011 1V7a1 1 0 01-2 0V5.5a1 1 0 011-1zm0 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm7.5-3.5a1 1 0 01-1-1h-1.5a1 1 0 010-2H18.5a1 1 0 011 1zm-11 0a1 1 0 01-1 1H5.5a1 1 0 010-2H7.5a1 1 0 011 1zm8.78 4.78a1 1 0 01-1.42 0l-1.06-1.06a1 1 0 011.42-1.42l1.06 1.06a1 1 0 010 1.42zM7.7 8.7a1 1 0 01-1.42 0L5.22 7.64a1 1 0 011.42-1.42l1.06 1.06a1 1 0 010 1.42zm8.08-1.06a1 1 0 010-1.42l1.06-1.06a1 1 0 011.42 1.42L17.2 7.64a1 1 0 01-1.42 0zM7.64 17.2a1 1 0 010-1.42l1.06-1.06a1 1 0 011.42 1.42L9.06 17.2a1 1 0 01-1.42 0z" />
            </svg>
        )}
        </button>
        <ul className="flex gap-8 text-sm text-slate-700 dark:text-gray-300">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Works', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  relative transition
                  hover:text-blue-600 dark:hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-blue-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
