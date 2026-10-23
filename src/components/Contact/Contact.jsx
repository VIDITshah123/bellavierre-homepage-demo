import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTilt } from '../../hooks/useTilt'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const sectionRef = useRef(null)
  const bgImageRef = useRef(null)
  const formCardTiltRef = useTilt(6, 1.01)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Villa Image Parallax Scroll
    if (bgImageRef.current && sectionRef.current) {
      gsap.fromTo(
        bgImageRef.current,
        { yPercent: -15, scale: 1.08 },
        {
          yPercent: 15,
          scale: 1.15,
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

    // Header & Form Stagger Entrance
    const ctx = gsap.context(() => {
      gsap.from('.contact-header > *', {
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(formCardTiltRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [formCardTiltRef])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef} aria-label="Contact Bellavierre Real Estate">
      <div className="contact-content-container">
        {/* Header Text */}
        <div className="contact-header text-center">
          <div className="contact-badge">Get in Touch</div>
          <h2 className="contact-title">
            LET&apos;S MAKE YOUR PROPERTY JOURNEY<br />EFFORTLESS
          </h2>
          <p className="contact-subtitle">
            Have questions or ready to take the next step? Whether you&apos;re looking to buy, rent, or invest, our team is here to guide you every step of the way. Let&apos;s turn your property goals into reality.
          </p>
        </div>

        {/* Floating Glassmorphism Form Card with 3D Mouse Tilt */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-form-card glass contact-success-card" role="status" aria-live="polite">
              <CheckCircle2 size={44} className="contact-success-icon" />
              <h3 className="contact-success-title">Thank you! Your inquiry has been received.</h3>
              <p className="contact-success-desc">
                A Bellavierre Dubai property advisor will reach out to you within 24 hours to discuss tailored options.
              </p>
              <button
                type="button"
                className="contact-reset-btn"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
                }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form
              ref={formCardTiltRef}
              onSubmit={handleSubmit}
              className="contact-form-card glass"
              aria-label="Book a Call Form"
            >
              <div className="contact-form-row">
                <div className="contact-input-field">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
                <div className="contact-input-field">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
                <div className="contact-input-field">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
              </div>

              <div className="contact-input-field full-width">
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="What Can We Help You ?"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-text-input contact-textarea"
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
                aria-label="Book a Call"
              >
                <span>{loading ? 'Please wait...' : 'Book a Call'}</span>
                {!loading && <ArrowUpRight size={17} className="contact-btn-arrow" />}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Background Villa Architecture with True Parallax Scroll */}
      <div className="contact-bg-wrap" aria-hidden="true">
        <div className="contact-bg-gradient-top"></div>
        <img
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Modern luxury Dubai architectural estate backdrop"
          className="contact-bg-image parallax-villa"
          loading="lazy"
        />
      </div>
    </section>
  )
}
