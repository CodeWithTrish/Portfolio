import { motion } from 'framer-motion'
import { HiCheckCircle, HiClock, HiAcademicCap } from 'react-icons/hi'
import { SiDatabricks } from 'react-icons/si'
import { HiCloud } from 'react-icons/hi'

const certs = [
  {
    title: 'Databricks GenAI Associate Engineer',
    issuer: 'Databricks',
    status: 'achieved',
    icon: SiDatabricks,
    iconColor: '#FF3621',
    desc: 'Validated expertise in generative AI concepts, LLM fine-tuning, RAG architectures, and building GenAI solutions on the Databricks platform.',
    badge: 'Certified',
    badgeColor: '#00ff88',
    year: '2024',
    skills: ['GenAI', 'LLMs', 'RAG', 'Databricks', 'Fine-tuning'],
  },
  {
    title: 'Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft Azure',
    status: 'in-progress',
    icon: HiCloud,
    iconColor: '#0078D4',
    desc: 'Developing solutions for Azure — App Services, Functions, containers, storage, security, and monitoring. Building toward Solution Architect path.',
    badge: 'In Progress',
    badgeColor: '#f59e0b',
    year: '2025',
    skills: ['Azure App Services', 'Azure Functions', 'CosmosDB', 'ARM Templates'],
  },
  {
    title: 'Azure Solutions Architect Expert (AZ-305)',
    issuer: 'Microsoft Azure',
    status: 'in-progress',
    icon: HiCloud,
    iconColor: '#0078D4',
    desc: 'Designing cloud and hybrid solutions — infrastructure, networking, identity, data storage, and business continuity on Azure at enterprise scale.',
    badge: 'In Progress',
    badgeColor: '#f59e0b',
    year: '2025',
    skills: ['Cloud Architecture', 'Hybrid Solutions', 'Azure Networking', 'Identity & Security'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Credentials</div>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#e0e0ff' }}>
            Certifications
          </h2>
          <div className="divider mb-12" style={{ maxWidth: 60 }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="cert-card"
              >
                {/* Top accent line handled by CSS */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${cert.iconColor}15` }}
                  >
                    <Icon size={24} style={{ color: cert.iconColor }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {cert.status === 'achieved' ? (
                      <HiCheckCircle size={16} style={{ color: '#00ff88' }} />
                    ) : (
                      <HiClock size={16} style={{ color: '#f59e0b' }} />
                    )}
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        color: cert.badgeColor,
                        background: `${cert.badgeColor}18`,
                        border: `1px solid ${cert.badgeColor}40`,
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-bold text-base mb-1 leading-snug"
                  style={{ color: '#e0e0ff' }}
                >
                  {cert.title}
                </h3>
                <div className="text-xs mb-3 font-medium" style={{ color: cert.iconColor }}>
                  {cert.issuer} · {cert.year}
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#6878a0' }}>
                  {cert.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,229,255,0.06)',
                        border: '1px solid rgba(0,229,255,0.15)',
                        color: '#8892b0',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <HiAcademicCap size={18} style={{ color: '#00e5ff' }} />
            <span className="text-sm font-medium" style={{ color: '#8892b0' }}>
              Continuous learning is non-negotiable.
            </span>
          </div>
          <p className="text-xs" style={{ color: '#4a5a7a' }}>
            Working toward becoming a certified Azure Solution Architect
          </p>
        </motion.div>
      </div>
    </section>
  )
}
