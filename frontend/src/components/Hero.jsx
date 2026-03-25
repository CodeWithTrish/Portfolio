import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiArrowDown, HiCode, HiLocationMarker } from 'react-icons/hi'
import { SiDatabricks } from 'react-icons/si'

const roles = [
  'AI Engineer',
  'Data Architect',
  'Full-Stack Developer',
  'LLM Framework Builder',
]

const stats = [
  { value: '7+', label: 'Years Experience', color: '#00e5ff' },
  { value: '2', label: 'Countries', color: '#bd00ff' },
  { value: '3', label: 'Role Evolutions', color: '#00ff88' },
  { value: '∞', label: 'Curiosity', color: '#00e5ff' },
]

function Particles() {
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    color: i % 3 === 0 ? '#00e5ff' : i % 3 === 1 ? '#bd00ff' : '#00ff88',
  }))

  return (
    <div className="particles">
      {items.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="gradient-text font-mono">
      {displayed}
      <span className="cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Radial glow blobs */}
      <div
        className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: '10%',
          right: '-10%',
          background: 'radial-gradient(circle, #bd00ff, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          bottom: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, #00e5ff, transparent 70%)',
        }}
      />

      <Particles />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-label mb-4"
            >
              Hello, World!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#e0e0ff' }}
            >
              Trishant{' '}
              <span
                className="gradient-text"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.4))' }}
              >
                Tangnoo
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl font-medium mb-6"
              style={{ color: '#8892b0', minHeight: '1.8rem' }}
            >
              <TypewriterRole />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: '#7080a0' }}
            >
              Building intelligent systems at{' '}
              <span style={{ color: '#00e5ff' }}>PepsiCo</span> via Tredence — from
              ETL pipelines to LLM-powered AI frameworks. Currently based in{' '}
              <span style={{ color: '#00ff88' }}>Texas, USA</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
              style={{ color: '#6878a0', fontSize: '0.875rem' }}
            >
              <HiLocationMarker size={16} style={{ color: '#00e5ff' }} />
              Texas, United States
              <span style={{ color: 'rgba(0,229,255,0.3)' }}>•</span>
              <SiDatabricks size={14} style={{ color: '#FF3621' }} />
              <span>GenAI Associate Certified</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <Link to="experience" smooth duration={600} offset={-80}>
                <button className="btn-primary">
                  <HiCode size={18} />
                  View My Work
                </button>
              </Link>
              <Link to="contact" smooth duration={600} offset={-80}>
                <button className="btn-outline">Get in Touch</button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Stats + visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            {/* Code-like card */}
            <div
              className="card p-6 font-mono text-sm"
              style={{ fontSize: '0.82rem', lineHeight: 1.8 }}
            >
              <div style={{ color: '#6878a0' }}>// current_status.json</div>
              <div style={{ color: '#e0e0ff' }}>{'{'}</div>
              <div className="pl-4">
                <span style={{ color: '#bd00ff' }}>"role"</span>
                <span style={{ color: '#8892b0' }}>: </span>
                <span style={{ color: '#00ff88' }}>"AI Engineer"</span>
                <span style={{ color: '#8892b0' }}>,</span>
              </div>
              <div className="pl-4">
                <span style={{ color: '#bd00ff' }}>"client"</span>
                <span style={{ color: '#8892b0' }}>: </span>
                <span style={{ color: '#00ff88' }}>"PepsiCo"</span>
                <span style={{ color: '#8892b0' }}>,</span>
              </div>
              <div className="pl-4">
                <span style={{ color: '#bd00ff' }}>"location"</span>
                <span style={{ color: '#8892b0' }}>: </span>
                <span style={{ color: '#00ff88' }}>"Texas, USA"</span>
                <span style={{ color: '#8892b0' }}>,</span>
              </div>
              <div className="pl-4">
                <span style={{ color: '#bd00ff' }}>"focus"</span>
                <span style={{ color: '#8892b0' }}>: </span>
                <span style={{ color: '#00e5ff' }}>["LLMs", "MCP Servers", "AI Frameworks"]</span>
                <span style={{ color: '#8892b0' }}>,</span>
              </div>
              <div className="pl-4">
                <span style={{ color: '#bd00ff' }}>"open_to"</span>
                <span style={{ color: '#8892b0' }}>: </span>
                <span style={{ color: '#00e5ff' }}>"new opportunities"</span>
              </div>
              <div style={{ color: '#e0e0ff' }}>{'}'}</div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="stat-card"
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: s.color, textShadow: `0 0 20px ${s.color}60` }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: '#6878a0' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        >
          <Link to="about" smooth duration={600} offset={-80}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{ color: 'rgba(0,229,255,0.5)' }}
            >
              <HiArrowDown size={22} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
