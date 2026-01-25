'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { API_URL } from '../lib/api'

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
    } catch (e) {
      toast.error('Failed to send message ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute -left-40 bottom-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <div className="animate-fade-up">
          <span className="inline-block mb-4 text-sm font-medium text-blue-500 tracking-widest uppercase">
            Contact
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Got a project in mind?
          </h2>

          <p className="text-slate-600 dark:text-gray-400 max-w-md leading-relaxed">
            I’m open for freelance projects, collaborations, or just a friendly chat.
            Feel free to send me a message and I’ll get back to you soon.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="
            animate-fade-up animation-delay-200
            bg-white/80 dark:bg-slate-800/80
            backdrop-blur
            p-8 rounded-2xl
            border border-slate-200 dark:border-white/10
            shadow-xl shadow-black/5 dark:shadow-black/30
            space-y-5
          "
        >
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-900 dark:text-white
              placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
            "
          />

          <input
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-900 dark:text-white
              placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
            "
          />

          <textarea
            rows="4"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project"
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-slate-100 dark:bg-slate-700
              text-slate-900 dark:text-white
              placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              resize-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-xl font-medium text-white
              bg-blue-600
              shadow-lg shadow-blue-600/30
              hover:shadow-blue-600/40 hover:scale-[1.02]
              transition
              disabled:opacity-60
            "
          >
            {loading ? 'Sending...' : sent ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
