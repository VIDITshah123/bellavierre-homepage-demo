import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll <= 0) return

      const currentScroll = window.scrollY
      const progress = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100)
      setScrollProgress(progress)
      setShowBackToTop(currentScroll > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Radius for SVG circle
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <>
      {/* Top Thin Progress Bar */}
      <div className="scroll-progress-bar-container" aria-hidden="true">
        <div
          className="scroll-progress-bar-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top with Radial Progress Ring */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <svg className="progress-ring" width="48" height="48" viewBox="0 0 48 48">
          <circle
            className="progress-ring-track"
            stroke="rgba(0, 0, 0, 0.08)"
            strokeWidth="2.5"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
          <circle
            className="progress-ring-indicator"
            stroke="#111827"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
        </svg>
        <span className="back-to-top-icon">
          <ArrowUp size={16} strokeWidth={2.5} />
        </span>
      </button>
    </>
  )
}
