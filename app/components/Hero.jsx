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
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-32 -right-40 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />

      <div
        className="
          relative w-full max-w-6xl
          grid md:grid-cols-2 gap-20
          items-center
        "
      >
        <div
          className="
            text-center md:text-left
            animate-fade-up
          "
        >
          <span className="inline-block mb-5 text-sm font-medium text-blue-500 tracking-widest uppercase">
            Hello, I’m Azhar As Rahmatulloh
          </span>

          <h1 className="
            text-5xl md:text-6xl
            font-extrabold leading-tight
            text-slate-900 dark:text-white
          ">
            Web <span className="text-blue-500">Developer</span>
          </h1>

          <p className="
            mt-6
            text-slate-600 dark:text-gray-400
            max-w-xl mx-auto md:mx-0
            leading-relaxed
          ">
            I build modern, scalable, and maintainable web applications
            using <span className="text-slate-900 dark:text-white font-medium">Laravel</span> ,
            <span className="text-slate-900 dark:text-white font-medium">Next.js</span>. &{' '}
            <span className="text-slate-900 dark:text-white font-medium">vue.js</span>.
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="
                bg-blue-600 px-8 py-3 rounded-xl font-medium text-white
                shadow-lg shadow-blue-600/30
                hover:scale-105 hover:shadow-blue-600/40
                transition
              "
            >
              Hire Me
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              className="
                px-8 py-3 rounded-xl
                border border-slate-300 dark:border-white/15
                text-slate-700 dark:text-gray-300
                hover:text-slate-900 dark:hover:text-white
                hover:border-slate-500 dark:hover:border-white/40
                transition
              "
            >
              Download CV
            </a>
          </div>
        </div>
        <div
          className="
            flex justify-center
            animate-fade-up animation-delay-200
          "
        >
          <div
            className="
              relative
              w-72 h-72 md:w-96 md:h-96
              rounded-3xl
              bg-white/80 dark:bg-slate-800/80
              backdrop-blur
              flex items-center justify-center
              shadow-xl shadow-black/10 dark:shadow-black/30
              animate-float
            "
          >
            <span className="text-slate-400 dark:text-gray-500">
              Illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
