import { motion } from 'framer-motion'
import { HiLightBulb, HiChip, HiGlobe, HiTrendingUp } from 'react-icons/hi'
import { SiDatabricks, SiPython, SiReact } from 'react-icons/si'
import { HiCloud } from 'react-icons/hi'

const traits = [
  { icon: HiChip, label: 'Deep Tech Diver', desc: 'Love getting deep into new technologies — from Spark internals to LLM architectures.' },
  { icon: HiGlobe, label: 'Global Engineer', desc: 'Built distributed systems across Bangalore & Texas, serving Fortune 500 clients.' },
  { icon: HiLightBulb, label: 'Problem Solver', desc: 'Transitioned across 3 roles — each time learning a new stack from scratch.' },
  { icon: HiTrendingUp, label: 'Always Growing', desc: 'Actively pursuing Azure 204 & 305 certifications to become a Solution Architect.' },
]

const techHighlights = [
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiDatabricks, label: 'Databricks', color: '#FF3621' },
  { icon: HiCloud, label: 'Azure', color: '#0078D4' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
]

export default function About() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={item} className="section-label">
            About Me
          </motion.div>
          <motion.h2 variants={item} className="text-4xl font-black mb-4" style={{ color: '#e0e0ff' }}>
            The Story So Far
          </motion.h2>
          <motion.div variants={item} className="divider mb-12" style={{ maxWidth: 60 }} />

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Bio */}
            <motion.div variants={item} className="space-y-5">
              <p className="text-base leading-relaxed" style={{ color: '#8892b0' }}>
                I'm a technologist with{' '}
                <span style={{ color: '#00e5ff' }}>almost 7 years of experience</span> spanning
                data engineering, software engineering, and AI — each chapter pushing me deeper into
                the craft.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#8892b0' }}>
                My journey started at{' '}
                <span style={{ color: '#e0e0ff', fontWeight: 600 }}>Atos in Bangalore</span>, where
                I built ETL pipelines and worked with Spark, Scala, and SQL. In September 2021, I
                joined <span style={{ color: '#e0e0ff', fontWeight: 600 }}>Tredence</span> — first
                as a Data Engineer, then evolving into a Software Engineer building full-stack apps
                on Azure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#8892b0' }}>
                In September 2024, Tredence relocated me to{' '}
                <span style={{ color: '#00ff88' }}>Texas, USA</span>. Today, I work with
                Retail & CPG giants — currently{' '}
                <span style={{ color: '#00e5ff', fontWeight: 600 }}>PepsiCo</span> — building
                AI frameworks using Claude, various LLMs, and MCP Servers.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#8892b0' }}>
                What drives me?{' '}
                <span style={{ color: '#e0e0ff' }}>Getting deep into new technology</span> — whether
                that's understanding transformer internals, building production MCP servers, or
                architecting cloud solutions on Azure.
              </p>

              {/* Tech icons row */}
              <div className="flex items-center gap-4 pt-2">
                {techHighlights.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <Icon size={26} style={{ color }} />
                    <span className="text-xs" style={{ color: '#5a6a8a' }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Trait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  variants={item}
                  className="card p-5"
                  style={{ cursor: 'default' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff' }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#e0e0ff' }}>
                    {label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6878a0' }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
