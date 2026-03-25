import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'certifications', label: 'Certs' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{
                background: 'linear-gradient(135deg, #00e5ff, #bd00ff)',
                color: '#050510',
              }}
            >
              TT
            </div>
            <span className="font-bold text-lg hidden sm:block" style={{ color: '#e0e0ff' }}>
              Trishant<span className="gradient-text">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-80}
              className="text-sm font-medium cursor-pointer transition-colors duration-200"
              style={{ color: '#8892b0' }}
              activeClass="!text-[#00e5ff]"
              spy
              onMouseEnter={(e) => (e.target.style.color = '#00e5ff')}
              onMouseLeave={(e) => (e.target.style.color = '#8892b0')}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="btn-outline text-xs py-2 px-4"
            style={{ padding: '8px 18px', fontSize: '0.8rem' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#00e5ff', background: 'rgba(0,229,255,0.08)' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-blur border-t"
            style={{ borderColor: 'rgba(0,229,255,0.1)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-2 cursor-pointer"
                  style={{ color: '#8892b0' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
