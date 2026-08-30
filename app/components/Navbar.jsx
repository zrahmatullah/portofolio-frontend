'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Track page scroll to toggle solid background overlay
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = savedTheme ? savedTheme === 'dark' : prefersDark

    document.documentElement.classList.toggle('dark', nextTheme)
    const timer = window.setTimeout(() => setIsDark(nextTheme), 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeMenu = () => setOpen(false)
    const handleKeyDown = (event) => event.key === 'Escape' && closeMenu()

    window.addEventListener('resize', closeMenu)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    window.localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  const linkClassName = (item, mobile = false) => {
    const isActive = activeSection === item.href.slice(1)
    const shared = 'transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'

    if (mobile) {
      return `${shared} flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
        isActive
          ? 'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
      }`
    }

    return `${shared} relative py-2 text-sm font-medium ${
      isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
    }`
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-1' 
          : 'border-transparent bg-transparent py-3'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="group rounded-lg text-base font-bold tracking-tight text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white">
          Azhar <span className="text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400">As</span><span className="hidden sm:inline"> Rahmatulloh</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href} className="relative">
                  <a href={item.href} className={linkClassName(item)} aria-current={isActive ? 'page' : undefined}>
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-blue-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <button onClick={toggleTheme} className="grid size-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white" aria-label={isDark ? 'Use light theme' : 'Use dark theme'} title={isDark ? 'Use light theme' : 'Use dark theme'}>
            {isDark ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
            ) : (
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>

          <button onClick={() => setOpen((current) => !current)} className="grid size-10 place-items-center rounded-full text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-200 dark:hover:bg-white/10 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="mobile-navigation" aria-expanded={open}>
            <span className="relative block size-5" aria-hidden="true">
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1.5 rounded-full bg-current transition ${open ? 'translate-y-0 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 translate-y-1.5 rounded-full bg-current transition ${open ? 'translate-y-0 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div 
            id="mobile-navigation" 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 dark:border-white/10 dark:bg-slate-950/95 md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-4 sm:px-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)} className={linkClassName(item, true)} aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}>
                    {item.label}<span aria-hidden="true" className="ml-1 opacity-70">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
