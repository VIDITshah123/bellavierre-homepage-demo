import { useEffect, useRef } from 'react'
import { Eye, Users, Hand } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const statsData = [
  { value: '200', suffix: '+', label: 'Projects Complete' },
  { value: '70', suffix: '+', label: 'Happy Clients' },
  { prefix: '$', value: '10M', suffix: '+', label: 'Project Value' },
  { value: '90', suffix: '%', label: 'Client Retention Rate' },
]

const partnersRow1 = [
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f18_logoipsum-285.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f12_logoipsum-284.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f11_logoipsum-283.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f0c_logoipsum-280.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f10_logoipsum-259.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f17_logoipsum-253.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f16_logoipsum-220.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f0f_logoipsum-242.svg',
]

const partnersRow2 = [
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f15_logoipsum-288.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f14_logoipsum-323.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f0a_logoipsum-330.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f0b_logoipsum-329.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f13_logoipsum-317.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f09_logoipsum-287.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f08_logoipsum-291.svg',
  'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788b7c58b085eea2bc22f07_logoipsum-311.svg',
]

export default function About() {
  const sectionRef = useRef(null)
  const teamImgRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Parallax on Middle Team Image
    if (teamImgRef.current && sectionRef.current) {
      gsap.fromTo(
        teamImgRef.current,
        { yPercent: -12, scale: 1.05 },
        {
          yPercent: 12,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      )
    }

    // Reveal on Pillars & Stats without risk of staying hidden
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-col-left',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        '.about-feature-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-label="About Bellavierre Real Estate">
      <div className="about-container">
        {/* Top: 3-Column Layout */}
        <div className="about-three-columns">
          {/* Left Column: Heading, Copy, 2x2 Stats */}
          <div className="about-col about-col-left">
            <div className="about-heading-wrap">
              <span className="about-pill-badge">Who We Are</span>
              <h2 className="about-main-heading">
                REDEFINING EXCELLENCE IN REAL ESTATE
              </h2>
            </div>

            <div className="about-text-wrap">
              <p className="about-p">
                We are a Dubai-based real estate advisory firm specialising in off-plan and ready properties. Our team provides end-to-end guidance — from project discovery and due diligence to reservation, documentation, and handover — ensuring you invest with confidence.
              </p>
              <p className="about-p">
                Our journey is defined by on-the-ground market expertise, rigorous developer due diligence, and an unwavering commitment to client satisfaction.
              </p>

              {/* 2x2 Stats Grid with Interactive Hover */}
              <div className="about-stats-grid">
                {statsData.map((stat, i) => (
                  <div key={i} className="about-stat-item">
                    <div className="about-stat-number-wrap">
                      <span className="about-stat-num">
                        {stat.prefix || ''}{stat.value}
                      </span>
                      <span className="about-stat-suffix">{stat.suffix}</span>
                    </div>
                    <div className="about-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Team Image with Parallax & Floating Badge */}
          <div className="about-col about-col-middle">
            <div className="about-image-card">
              <img
                ref={teamImgRef}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
                alt="Bellavierre Real Estate Advisory Team in Dubai"
                className="about-team-img parallax-team-img"
                loading="lazy"
              />
              <div className="about-img-gradient-overlay" aria-hidden="true" />
              {/* Floating Luxury Authority Badge */}
              <div className="about-floating-authority-badge">
                <span className="authority-badge-num">15+</span>
                <div className="authority-badge-text">
                  <span className="authority-bold">Years of Trust</span>
                  <span className="authority-sub">Dubai Luxury Market</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Interactive Feature Pillar Cards */}
          <div className="about-col about-col-right">
            {/* Feature 1: Our Vision */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Eye size={20} strokeWidth={2.2} className="about-feature-icon" />
                </div>
                <div className="about-feature-title-wrap">
                  <span className="about-feature-num">01</span>
                  <h3 className="about-feature-title">Our Vision</h3>
                </div>
              </div>
              <p className="about-feature-desc">
                To be a trusted leader in the Dubai luxury real estate market, offering unparalleled advisory across premium off-plan developments, prime beachfront communities, and high-yield investments.
              </p>
            </div>

            {/* Feature 2: Expert Team */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Users size={20} strokeWidth={2.2} className="about-feature-icon" />
                </div>
                <div className="about-feature-title-wrap">
                  <span className="about-feature-num">02</span>
                  <h3 className="about-feature-title">Expert Team</h3>
                </div>
              </div>
              <p className="about-feature-desc">
                Our team comprises seasoned professionals with extensive experience in Dubai luxury real estate, developer track-record analysis, overseas buyer guidance, and handover coordination.
              </p>
            </div>

            {/* Feature 3: Tailored Solutions */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Hand size={20} strokeWidth={2.2} className="about-feature-icon" />
                </div>
                <div className="about-feature-title-wrap">
                  <span className="about-feature-num">03</span>
                  <h3 className="about-feature-title">Tailored Solutions</h3>
                </div>
              </div>
              <p className="about-feature-desc">
                We coordinate virtual viewings, project comparisons, documentation and handover around your time zone, so distance never means losing visibility or control.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Partners & Clients Logos with Infinite Scroll Marquee */}
        <div className="about-partners-wrap">
          <h3 className="partners-title">Check Our Best Clients &amp; Partners</h3>

          {/* Row 1 — Moving Left */}
          <div className="partners-marquee-container">
            <div className="partners-marquee-track move-left">
              {[...partnersRow1, ...partnersRow1].map((logo, idx) => (
                <div key={idx} className="partner-logo-item">
                  <img src={logo} alt="Partner Logo" className="partner-logo-img" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — Moving Right */}
          <div className="partners-marquee-container">
            <div className="partners-marquee-track move-right">
              {[...partnersRow2, ...partnersRow2].map((logo, idx) => (
                <div key={idx} className="partner-logo-item">
                  <img src={logo} alt="Partner Logo" className="partner-logo-img" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
