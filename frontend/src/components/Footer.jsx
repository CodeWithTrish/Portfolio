import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-6"
      style={{
        background: 'rgba(5,5,16,0.95)',
        borderTop: '1px solid rgba(0,229,255,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: '#4a5a7a' }}>
          <HiCode size={16} style={{ color: '#00e5ff' }} />
          <span>
            Built with React + Python by{' '}
            <span className="gradient-text font-semibold">Trishant Tangnoo</span>
          </span>
        </div>

        <div className="text-xs" style={{ color: '#3a4a6a' }}>
          © {year} Trishant Tangnoo · All rights reserved
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/trishant-tangnoo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#4a5a7a' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0A66C2')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#4a5a7a')}
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/trishanttangnoo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#4a5a7a' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e0e0ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#4a5a7a')}
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
