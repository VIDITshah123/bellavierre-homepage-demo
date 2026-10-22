import { useEffect, useRef } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import './Hero.css'

const stats = [
  { value: 5.77, prefix: 'AED ', suffix: 'M+', label: 'Top Deal Closed' },
  { value: 10, suffix: '+', label: 'Curated Off-Plan' },
  { value: 2, suffix: '', label: 'Markets: Dubai & Abu Dhabi' },
]

const agentAvatars = [
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d05b514f5847cc5a7a7b_agent-1.jpg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d05b154b9286f2e0dc64_agent-0.jpg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789cbfc73863d34426b4fd6_agent-3.jpg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d0161095b45687aba4fe_agent-2.jpg',
]

export default function Hero() {
  const sectionRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    counterRefs.current.forEach((el, i) => {
      if (!el) return
      const stat = stats[i]
      const end = stat.value
      const duration = 1400
      const start = Date.now()
      const isDecimal = end % 1 !== 0

      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = isDecimal
          ? (eased * end).toFixed(2)
          : Math.round(eased * end)
        el.textContent = `${stat.prefix || ''}${current}${stat.suffix}`
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }

  return (
    <section id="hero" className="hero-section" ref={sectionRef} aria-label="Hero">
      <div className="hero-bg-wrap">
        {/* Top/Main Content */}
        <div className="hero-content">
          <h1 className="hero-heading">
            YOUR DUBAI PROPERTY TEAM,<br />
            ON THE GROUND FOR YOU
          </h1>

          <div className="hero-description">
            <p className="hero-description-text">
              Compare selected Dubai developments with clear guidance on locations, payment plans, handover timelines and long-term suitability. Helping global investors buy with clarity and confidence.
            </p>
          </div>

          <a href="#contact" className="hero-action-btn">
            <span className="btn-label">Book a Dubai Consultation</span>
            <span className="btn-circle" aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>

          {/* Bottom Left Stats */}
          <div className="achieves-wrap">
            {stats.map((stat, i) => (
              <div key={i} className="achieve-list">
                <div className="achieve-number-wrap">
                  <span
                    className="achieve-number"
                    ref={(el) => (counterRefs.current[i] = el)}
                  >
                    {stat.prefix || ''}{stat.value}{stat.suffix}
                  </span>
                </div>
                <div className="achieve-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Right Corner Cutout Dock */}
        <div className="hero-rating-grid" aria-label="Customer ratings and featured agents">
          {/* Row 1, Col 1: Empty */}
          <div className="hero-rating-grid-item" />

          {/* Row 1, Col 2: Top-Right Inverted Corner */}
          <div className="hero-rating-grid-item">
            <div className="corner-top-right" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Row 2, Col 1: Bottom-Left Inverted Corner */}
          <div className="hero-rating-grid-item">
            <div className="corner-bottom-left" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Row 2, Col 2: Rating Badge */}
          <div className="hero-rating-grid-item">
            <div className="hero-rating-wrap">
              <div className="hero-rating-clients-wrap">
                {agentAvatars.map((src, i) => (
                  <div key={i} className="client-avator">
                    <img
                      src={src}
                      alt={`Featured Dubai property advisor ${i + 1}`}
                      loading="eager"
                    />
                  </div>
                ))}
              </div>

              <div className="hero-rating-text-wrap">
                <div className="hero-rating-title">Trusted by Global Investors</div>
                <div className="hero-rating-stars">
                  <div className="stars-icons" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="hero-rating-score">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
