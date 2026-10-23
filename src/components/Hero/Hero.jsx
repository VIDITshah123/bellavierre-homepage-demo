import { useEffect, useRef } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

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
  const bgImageRef = useRef(null)
  const contentRef = useRef(null)
  const ratingRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // 1. Parallax Scroll Effect on Hero Background Image
    if (bgImageRef.current && sectionRef.current) {
      gsap.to(bgImageRef.current, {
        yPercent: 20,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 2. Parallax fade & upward motion on Hero Content
    if (contentRef.current && sectionRef.current) {
      gsap.to(contentRef.current, {
        y: -60,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 3. Staggered Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-heading-line', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
      })
      gsap.from('.hero-description', {
        y: 25,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      })
      gsap.from('.hero-action-btn', {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        delay: 0.6,
        ease: 'power3.out',
      })
      gsap.from('.achieve-list', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        delay: 0.7,
        ease: 'power3.out',
      })
      gsap.from('.hero-rating-grid', {
        scale: 0.85,
        opacity: 0,
        duration: 1.1,
        delay: 0.8,
        ease: 'back.out(1.5)',
      })
    }, sectionRef)

    // 4. Counter number counting animation
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

    // 5. Interactive 3D Mouse Parallax on Hero Card
    const card = sectionRef.current
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          x: x * 25,
          y: y * 25,
          duration: 0.8,
          ease: 'power2.out',
        })
      }
      if (ratingRef.current) {
        gsap.to(ratingRef.current, {
          x: -x * 15,
          y: -y * 15,
          duration: 0.8,
          ease: 'power2.out',
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove)

    return () => {
      ctx.revert()
      observer.disconnect()
      card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const animateCounters = () => {
    counterRefs.current.forEach((el, i) => {
      if (!el) return
      const stat = stats[i]
      const end = stat.value
      const duration = 1600
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
        {/* Parallax Background Image Container */}
        <div className="hero-bg-image-wrapper" aria-hidden="true">
          <img
            ref={bgImageRef}
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2600&q=90"
            alt="Dubai Luxury Architecture Skyline at Golden Twilight"
            className="hero-parallax-bg-img"
            loading="eager"
          />
          <div className="hero-bg-overlay" />
          <div className="hero-ambient-glow" />
          <div className="hero-light-beam" />
        </div>

        {/* Top/Main Content */}
        <div className="hero-content" ref={contentRef}>
          {/* Dubai Market Indicator Pill */}
          <div className="hero-market-pill">
            <span className="market-pill-dot" />
            <span className="market-pill-text">Dubai RERA Licensed • 2026 Prime Off-Plan Portfolio</span>
          </div>

          <h1 className="hero-heading">
            <span className="hero-heading-line">YOUR DUBAI PROPERTY TEAM,</span><br />
            <span className="hero-heading-line">ON THE GROUND FOR YOU</span>
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

        {/* Bottom Right Corner Cutout Dock with floating parallax */}
        <div className="hero-rating-grid" ref={ratingRef} aria-label="Customer ratings and featured agents">
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
