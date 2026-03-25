import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#e0e0ff' }}>
            Contact Me
          </h2>
          <div className="divider mb-12" style={{ maxWidth: 60 }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-base leading-relaxed" style={{ color: '#8892b0' }}>
              Whether you want to discuss an AI project, explore collaboration opportunities,
              or just connect — my inbox is always open.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
                >
                  <HiLocationMarker size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#e0e0ff' }}>Location</div>
                  <div className="text-xs" style={{ color: '#6878a0' }}>Texas, United States</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
                >
                  <HiMail size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#e0e0ff' }}>Email</div>
                  <div className="text-xs" style={{ color: '#6878a0' }}>trishant.tangnoo@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/trishant-tangnoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(10,102,194,0.15)',
                  border: '1px solid rgba(10,102,194,0.3)',
                  color: '#0A66C2',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(10,102,194,0.25)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10,102,194,0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/trishanttangnoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#e0e0ff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8892b0' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8892b0' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8892b0' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's collaborate on an AI project"
                  className="form-input"
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-1.5 block" style={{ color: '#8892b0' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div
                  className="flex items-center gap-2 text-sm p-3 rounded-lg"
                  style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)', color: '#00ff88' }}
                >
                  <HiCheckCircle size={18} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div
                  className="flex items-center gap-2 text-sm p-3 rounded-lg"
                  style={{ background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)', color: '#ff6b6b' }}
                >
                  <HiExclamationCircle size={18} />
                  Something went wrong. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === 'loading' ? 0.7 : 1 }}
              >
                <HiPaperAirplane size={16} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
