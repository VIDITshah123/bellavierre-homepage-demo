import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Who We Are', href: '#about', id: 'about' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    let lastScroll = 0

    const onScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 20)

      // Hide on scroll down past 200px, reveal on scroll up
      if (currentScroll > 260 && currentScroll > lastScroll && !menuOpen) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScroll = currentScroll

      // Scroll spy: identify which section is currently centered in viewport
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPos = currentScroll + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActive(navLinks[i].label)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e, href, label) => {
    e.preventDefault()
    setActive(label)
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -60, duration: 1.2 })
      } else {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="brand-logo"
            aria-label="Bellavierre Real Estate Home"
            onClick={(e) => handleNavClick(e, '#hero', 'Home')}
          >
            <img
              src="/logo.png"
              alt="Bellavierre Real Estate LLC"
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Navigation with Active Scroll Spy */}
          <nav className="nav-menu" role="navigation" aria-label="Main menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${active === link.label ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href, link.label)}
              >
                {link.label}
                {active === link.label && <span className="nav-active-pill" />}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="nav-cta-btn"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
            >
              <span className="cta-dot-live" aria-hidden="true" />
              <span>Book Consultation</span>
              <span className="cta-icon-circle" aria-hidden="true">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <img
            src="/logo.png"
            alt="Bellavierre Real Estate"
            className="brand-logo-img mobile-logo"
          />
          <button
            className="drawer-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="drawer-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`drawer-link ${active === link.label ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href, link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <a
            href="#contact"
            className="drawer-cta"
            onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
          >
            Book Dubai Consultation
          </a>
          <p className="drawer-contact-phone">
            Direct: <a href="tel:+97145784312">+(971) 4 578 4312</a>
          </p>
        </div>
      </div>
    </>
  )
}
