'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const contactHighlights = [
  {
    title: 'Quick response',
    description: 'Usually within 1–2 business days.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2.5" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    ),
  },
  {
    title: 'Open to collaborate',
    description: 'Freelance work, collaborative ideas, and partnerships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2.5 21a5.5 5.5 0 0 1 11 0m-5.5-5.5a5.5 5.5 0 0 1 5.5-5.5 5.5 5.5 0 0 1 5.5 5.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API submission delay
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      toast.success('Message sent successfully! ✅')
      setForm({ name: '', email: '', message: '' })

      // Reset confirmation message state after 5 seconds
      setTimeout(() => {
        setSent(false)
      }, 5000)
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-6 py-28 dark:bg-slate-950 md:px-10"
    >
      {/* Background radial blobs */}
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/5 pointer-events-none" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/5 pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Let&apos;s connect
          </span>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Let&apos;s create something <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">meaningful.</span>
          </h2>

          <p className="max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
            Have a project in mind, a job opportunity, or just want to say hello? Drop a message here and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-10 space-y-6">
            {contactHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-4 group">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 dark:shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick email option */}
          <div className="pt-4 border-t border-slate-200/60 dark:border-white/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Or mail directly</p>
            <a 
              href="mailto:azhar.asrah@gmail.com" 
              className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 decoration-blue-500 transition-colors"
            >
              azharrahmatullah01@gmail.com
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl
            dark:border-white/5 dark:bg-slate-900/60 dark:shadow-black/40 sm:p-8
            hover:border-blue-500/10 dark:hover:border-blue-400/10 transition-all duration-300
          "
        >
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a message</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">All fields are required *</p>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 3-7.5 18-3.6-7.4L3 10.5 21 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.9 13.6 4.5-4.5" />
              </svg>
            </div>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name *</span>
              <input 
                type="text"
                value={form.name} 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                placeholder="Your full name" 
                required 
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800/40 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800/80" 
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email *</span>
              <input 
                type="email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                placeholder="you@email.com" 
                required 
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800/40 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800/80" 
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Message *</span>
              <textarea 
                rows="5" 
                value={form.message} 
                onChange={e => setForm({ ...form, message: e.target.value })} 
                placeholder="Tell me a little about your project..." 
                required 
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800/40 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800/80" 
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white
              shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35
              focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-60
            "
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : sent ? (
              'Message Sent ✓'
            ) : (
              'Send Message'
            )}
            {!loading && !sent && <span aria-hidden="true">→</span>}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
