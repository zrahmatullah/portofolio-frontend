'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        px-6 md:px-10
        overflow-hidden
      "
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-32 -right-40 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div
        className="
          relative w-full max-w-6xl
          grid md:grid-cols-2 gap-16 md:gap-20
          items-center
        "
      >
        {/* LEFT: TEXT */}
        <div className="text-center md:text-left animate-fade-up">
          {/* AVAILABILITY BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              mb-5 px-3.5 py-1.5 rounded-full
              bg-blue-500/10 border border-blue-500/20
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-wide">
              Available for new projects
            </span>
          </div>

          <span className="block mb-3 text-sm font-medium text-blue-500 tracking-widest uppercase">
            Hello, I&apos;m Azhar As Rahmatulloh
          </span>

          <h1
            className="
              text-5xl md:text-6xl
              font-extrabold leading-tight tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Web{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p
            className="
              mt-6
              text-slate-600 dark:text-gray-400
              max-w-xl mx-auto md:mx-0
              leading-relaxed
            "
          >
            I build modern, scalable, and maintainable web applications using{' '}
            <span className="text-slate-900 dark:text-white font-medium">Laravel</span>,{' '}
            <span className="text-slate-900 dark:text-white font-medium">Next.js</span>, and{' '}
            <span className="text-slate-900 dark:text-white font-medium">Vue.js</span>.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="
                group relative overflow-hidden
                bg-blue-600 px-8 py-3 rounded-xl font-medium text-white
                shadow-lg shadow-blue-600/30
                hover:shadow-xl hover:shadow-blue-600/40
                active:scale-95
                transition-all duration-300
              "
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3 rounded-xl
                border border-slate-300 dark:border-white/15
                text-slate-700 dark:text-gray-300
                hover:text-slate-900 dark:hover:text-white
                hover:border-slate-500 dark:hover:border-white/40
                active:scale-95
                transition-all duration-300
              "
            >
              Download CV
            </a>
          </div>

          {/* QUICK STATS */}
          <div className="mt-12 flex justify-center md:justify-start gap-8">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Done' },
              { value: '15+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="flex justify-center animate-fade-up animation-delay-200">
          <div
            className="
              relative
              w-72 h-72 md:w-96 md:h-96
              rounded-3xl
              bg-white/80 dark:bg-slate-800/80
              backdrop-blur
              flex items-center justify-center
              shadow-xl shadow-black/10 dark:shadow-black/30
              ring-1 ring-black/5 dark:ring-white/10
              animate-float
            "
          >
            {/* DECORATIVE CODE ICON */}
            <svg
              className="w-24 h-24 md:w-28 md:h-28 text-blue-500/40"
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

            {/* FLOATING TECH BADGES */}
            <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
              Laravel
            </div>
            <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
              Next.js
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
              Vue.js
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-gray-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}