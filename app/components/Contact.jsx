'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { API_URL } from '../lib/api'

const contactHighlights = [
  {
    title: 'Quick response',
    description: 'Usually within 1–2 business days.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2.5" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    ),
  },
  {
    title: 'Open to collaborate',
    description: 'Freelance work, ideas, and partnerships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
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

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Request failed')

      toast.success('Message sent successfully ✅')
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Failed to send message ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 dark:bg-slate-950 md:px-10"
    >
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        
        <div className="animate-fade-up">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Let&apos;s connect
          </span>

          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Let&apos;s create something <span className="text-blue-600 dark:text-blue-400">meaningful.</span>
          </h2>

          <p className="max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
            Have a project in mind, a role to discuss, or simply want to say hello? Send a message and let&apos;s start a conversation.
          </p>

          <div className="mt-10 space-y-4">
            {contactHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="
            animate-fade-up animation-delay-200
            rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl
            dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-8
          "
        >
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a message</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Fields marked with * are required.</p>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 3-7.5 18-3.6-7.4L3 10.5 21 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m9.9 13.6 4.5-4.5" /></svg>
            </div>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name *</span>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email *</span>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Message *</span>
              <textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your project..." required className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-800" />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white
              shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35
              focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-60
            "
          >
            {loading ? 'Sending...' : sent ? 'Message Sent ✓' : 'Send Message'}
            {!loading && !sent && <span aria-hidden="true">→</span>}
          </button>
        </form>
      </div>
    </section>
  )
}
