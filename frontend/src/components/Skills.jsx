import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  SiPython, SiApachespark, SiScala, SiPostgresql,
  SiJavascript, SiReact, SiNodedotjs, SiDatabricks,
  SiDocker, SiGit,
} from 'react-icons/si'
import { HiCode, HiDatabase, HiChip, HiCloud, HiChartBar } from 'react-icons/hi'

const categories = [
  {
    name: 'AI & Machine Learning',
    icon: HiChip,
    color: '#00e5ff',
    skills: [
      { name: 'Claude / Anthropic', level: 95 },
      { name: 'LLM Frameworks', level: 90 },
      { name: 'MCP Servers', level: 88 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'AI Agent Design', level: 85 },
      { name: 'RAG Systems', level: 80 },
    ],
  },
  {
    name: 'Data Engineering',
    icon: HiDatabase,
    color: '#00ff88',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Apache Spark / PySpark', level: 90 },
      { name: 'Scala', level: 78 },
      { name: 'SQL', level: 93 },
      { name: 'Databricks', level: 88 },
      { name: 'Power BI', level: 82 },
    ],
  },
  {
    name: 'Software Engineering',
    icon: HiCode,
    color: '#bd00ff',
    skills: [
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'Python (Backend)', level: 93 },
      { name: 'REST APIs', level: 90 },
      { name: 'FastAPI / Flask', level: 85 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: HiCloud,
    color: '#f59e0b',
    skills: [
      { name: 'Microsoft Azure', level: 85 },
      { name: 'Azure App Services', level: 82 },
      { name: 'Databricks Platform', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'CI/CD Pipelines', level: 78 },
    ],
  },
]

const techIcons = [
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiApachespark, label: 'Spark', color: '#E25A1C' },
  { icon: SiScala, label: 'Scala', color: '#DC322F' },
  { icon: SiPostgresql, label: 'SQL', color: '#336791' },
  { icon: HiChartBar, label: 'Power BI', color: '#F2C811' },
  { icon: SiJavascript, label: 'JS', color: '#F7DF1E' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: HiCloud, label: 'Azure', color: '#0078D4' },
  { icon: SiDatabricks, label: 'Databricks', color: '#FF3621' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
]

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: '#c0d0f0' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}90)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Technical Arsenal</div>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#e0e0ff' }}>
            Skills & Technologies
          </h2>
          <div className="divider mb-12" style={{ maxWidth: 60 }} />
        </motion.div>

        {/* Tech icons row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16 p-6 rounded-2xl"
          style={{ background: 'rgba(13,13,31,0.5)', border: '1px solid rgba(0,229,255,0.08)' }}
        >
          {techIcons.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 group cursor-default transition-transform duration-200 hover:-translate-y-1"
            >
              <Icon
                size={32}
                style={{ color, filter: `drop-shadow(0 0 8px ${color}60)` }}
              />
              <span className="text-xs" style={{ color: '#5a6a8a' }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${cat.color}15`, color: cat.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold" style={{ color: '#e0e0ff' }}>{cat.name}</h3>
                </div>
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={0.4 + catIdx * 0.1 + i * 0.05}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
