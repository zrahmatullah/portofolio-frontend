'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '../lib/portfolioData'

export default function Hero() {
  const { name, title, description, stats } = portfolioData.about

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
  }

  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        px-6 md:px-10 py-20
        overflow-hidden
      "
    >
      {/* BACKGROUND BLOBS & DOT GRID */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl dark:bg-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />

      <div
        className="
          relative w-full max-w-6xl
          grid md:grid-cols-12 gap-16 md:gap-8
          items-center
        "
      >
        {/* LEFT: TEXT */}
        <motion.div 
          className="md:col-span-7 text-center md:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* AVAILABILITY BADGE */}
          <motion.div
            variants={badgeVariants}
            className="
              inline-flex items-center gap-2
              px-3.5 py-1.5 rounded-full
              bg-blue-500/10 border border-blue-500/20
              dark:bg-blue-400/5 dark:border-blue-400/10
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
              Available for new projects
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <span className="block text-sm font-semibold text-blue-500 tracking-widest uppercase">
              Hello, I&apos;m {name}
            </span>

            <h1
              className="
                text-5xl lg:text-6xl xl:text-7xl
                font-extrabold leading-tight tracking-tight
                text-slate-900 dark:text-white
              "
            >
              {title}{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300">
                Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="
              text-slate-600 dark:text-slate-400
              max-w-xl mx-auto md:mx-0
              leading-relaxed text-base md:text-lg
            "
          >
            I build modern, scalable, and maintainable web applications using{' '}
            <span className="text-slate-900 dark:text-white font-semibold border-b border-blue-500/30">Laravel</span>,{' '}
            <span className="text-slate-900 dark:text-white font-semibold border-b border-blue-500/30">Next.js</span>, and{' '}
            <span className="text-slate-900 dark:text-white font-semibold border-b border-blue-500/30">Vue.js</span>.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <a
              href="#contact"
              className="
                group relative overflow-hidden
                bg-blue-600 px-8 py-3.5 rounded-xl font-medium text-white
                shadow-lg shadow-blue-600/35 hover:shadow-xl hover:shadow-blue-600/40
                active:scale-95 transition-all duration-300
                flex items-center gap-2
              "
            >
              <span className="relative z-10">Hire Me</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3.5 rounded-xl font-medium
                border border-slate-300 dark:border-white/15
                text-slate-700 dark:text-slate-300
                hover:text-slate-900 dark:hover:text-white
                hover:border-slate-400 dark:hover:border-white/30
                hover:bg-slate-50 dark:hover:bg-white/5
                active:scale-95
                transition-all duration-300
                flex items-center gap-2
              "
            >
              Download CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          {/* QUICK STATS */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 max-w-md border-t border-slate-200/60 dark:border-white/5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: INTERACTIVE CODE TERMINAL */}
        <motion.div 
          className="md:col-span-5 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="
              relative w-full max-w-sm lg:max-w-md
              rounded-2xl
              bg-slate-950/90 dark:bg-slate-900/90
              border border-slate-800/80 dark:border-white/10
              shadow-2xl shadow-blue-500/10 dark:shadow-black/60
              overflow-hidden
              font-mono text-xs md:text-sm text-slate-300
              p-5
            "
          >
            {/* TERMINAL HEADER */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-900/60 dark:border-white/5">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-rose-500" />
                <span className="size-3 rounded-full bg-amber-500" />
                <span className="size-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                developer.json
              </span>
            </div>

            {/* SYNTAX HIGHLIGHTED JSON */}
            <div className="space-y-1.5 leading-relaxed text-slate-400">
              <div>
                <span className="text-blue-400">const</span>{' '}
                <span className="text-cyan-400">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-amber-400">&quot;name&quot;</span>: <span className="text-emerald-400">&quot;{name}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-amber-400">&quot;title&quot;</span>: <span className="text-emerald-400">&quot;{title}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-amber-400">&quot;skills&quot;</span>: [
              </div>
              <div className="pl-8 text-indigo-400">
                &quot;<span className="text-cyan-300">Laravel</span>&quot;, &quot;<span className="text-cyan-300">Next.js</span>&quot;, &quot;<span className="text-cyan-300">Vue.js</span>&quot;,
              </div>
              <div className="pl-8 text-indigo-400">
                &quot;<span className="text-cyan-300">TailwindCSS</span>&quot;, &quot;<span className="text-cyan-300">MySQL</span>&quot;
              </div>
              <div className="pl-4">
                ],
              </div>
              <div className="pl-4">
                <span className="text-amber-400">&quot;availability&quot;</span>: <span className="text-emerald-400">true</span>,
              </div>
              <div className="pl-4">
                <span className="text-amber-400">&quot;coffeeRequired&quot;</span>: <span className="text-emerald-400">true</span>
              </div>
              <div>&#125;;</div>
            </div>

            {/* DECORATIVE LIGHT ELEMENT */}
            <div className="absolute right-4 bottom-4 opacity-10">
              <svg className="w-20 h-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600 cursor-pointer pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}