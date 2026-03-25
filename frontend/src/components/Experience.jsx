import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiCalendar, HiBriefcase } from 'react-icons/hi'
import { SiDatabricks } from 'react-icons/si'

const experiences = [
  {
    company: 'Tredence Inc.',
    role: 'AI Engineer',
    period: 'Jan 2024 – Present',
    location: 'Texas, USA',
    type: 'current',
    color: '#00e5ff',
    client: 'PepsiCo (Retail & CPG)',
    highlights: [
      'Building AI frameworks using Claude and various LLMs across PepsiCo business units',
      'Designed and deployed production-grade MCP (Model Context Protocol) servers',
      'Architecting end-to-end AI pipelines integrating LLMs with enterprise data systems',
      'Working with Retail & CPG clients across Texas to accelerate AI adoption',
    ],
    tech: ['Python', 'Claude', 'LLMs', 'MCP Servers', 'Azure', 'AI Frameworks'],
  },
  {
    company: 'Tredence Inc.',
    role: 'Software Engineer',
    period: 'Sep 2022 – Dec 2023',
    location: 'Bangalore, India',
    type: 'past',
    color: '#bd00ff',
    highlights: [
      'Built full-stack web applications using React, Node.js, and Python',
      'Deployed and managed services on Azure App Services',
      'Developed REST APIs consumed by large-scale retail analytics dashboards',
      'Led frontend architecture decisions for a client-facing reporting platform',
    ],
    tech: ['JavaScript', 'React', 'Node.js', 'Python', 'Azure App Services', 'REST APIs'],
  },
  {
    company: 'Tredence Inc.',
    role: 'Data Engineer',
    period: 'Sep 2021 – Aug 2022',
    location: 'Bangalore, India',
    type: 'past',
    color: '#00ff88',
    highlights: [
      'Designed and maintained scalable ETL pipelines on Databricks',
      'Built data transformation workflows using PySpark and Scala',
      'Created interactive dashboards and reports in Power BI',
      'Optimized SQL queries reducing report generation time by 60%',
    ],
    tech: ['Python', 'PySpark', 'Scala', 'SQL', 'Databricks', 'Power BI', 'Delta Lake'],
  },
  {
    company: 'Atos',
    role: 'Data & ETL Engineer',
    period: 'Dec 2019 – Aug 2021',
    location: 'Bangalore, India',
    type: 'past',
    color: '#f59e0b',
    highlights: [
      'Part of the core ETL team responsible for enterprise data integration',
      'Developed and maintained data pipelines using Python and SQL',
      'Worked with Spark for large-scale batch processing',
      'Collaborated on Power BI dashboards for business intelligence reporting',
    ],
    tech: ['Python', 'Spark', 'SQL', 'ETL', 'Power BI', 'Data Warehousing'],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <div
        className="timeline-dot absolute left-0"
        style={{
          borderColor: exp.color,
          boxShadow: `0 0 15px ${exp.color}40`,
          top: 4,
        }}
      >
        <HiBriefcase size={16} style={{ color: exp.color }} />
      </div>

      {/* Card */}
      <div
        className="card p-6 mb-6"
        style={{
          borderLeft: `2px solid ${exp.color}40`,
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold" style={{ color: '#e0e0ff' }}>
                {exp.role}
              </h3>
              {exp.type === 'current' && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(0,229,255,0.1)',
                    color: '#00e5ff',
                    border: '1px solid rgba(0,229,255,0.3)',
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <div className="font-semibold text-sm" style={{ color: exp.color }}>
              {exp.company}
            </div>
            {exp.client && (
              <div className="text-xs mt-0.5" style={{ color: '#6878a0' }}>
                Client: {exp.client}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end gap-1 text-xs" style={{ color: '#6878a0' }}>
            <span className="flex items-center gap-1">
              <HiCalendar size={12} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <HiLocationMarker size={12} />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#8892b0' }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: exp.color }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="skill-badge text-xs" style={{ fontSize: '0.75rem' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Career Timeline</div>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#e0e0ff' }}>
            Work Experience
          </h2>
          <div className="divider mb-12" style={{ maxWidth: 60 }} />
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="timeline-line" style={{ left: 20 }} />

          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
