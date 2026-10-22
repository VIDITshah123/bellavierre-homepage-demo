import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo" aria-label="Bellavierre Real Estate Home">
            <img
              src="/logo.png"
              alt="Bellavierre Real Estate LLC"
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" role="navigation" aria-label="Main menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${active === link.label ? 'active' : ''}`}
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="nav-actions">
            <a href="#contact" className="navbar-btn" aria-label="Book a Dubai Property Consultation">
              <span className="status-dot" aria-hidden="true" />
              <span className="btn-text">Book Consultation</span>
              <span className="btn-circle-arrow" aria-hidden="true">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-drawer-top">
          <img
            src="/logo.png"
            alt="Bellavierre Real Estate LLC"
            className="brand-logo-img mobile-logo"
          />
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-drawer-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="navbar-btn mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          <span className="status-dot" aria-hidden="true" />
          <span className="btn-text">Contact Us Now</span>
          <span className="btn-circle-arrow" aria-hidden="true">
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </span>
        </a>
      </div>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
