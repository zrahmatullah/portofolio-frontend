const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-12 dark:border-white/10 dark:bg-slate-950 md:px-10">
      <div className="pointer-events-none absolute -bottom-28 -right-24 size-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-slate-200 pb-10 dark:border-white/10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-block rounded-lg text-xl font-bold tracking-tight text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white">
              Azhar <span className="text-blue-600 dark:text-blue-400">As</span> Rahmatulloh
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Building thoughtful, modern web experiences with attention to detail.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rounded text-slate-600 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-slate-700 dark:text-slate-200">Azhar As Rahmatulloh</span>. All rights reserved.
          </p>
          <a href="#home" className="inline-flex w-fit items-center gap-2 rounded-lg font-medium text-slate-600 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400">
            Back to top
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m18 15-6-6-6 6" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
