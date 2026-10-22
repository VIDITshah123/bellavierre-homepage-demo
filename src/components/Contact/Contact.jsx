import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import './Contact.css'

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
    <section id="contact" className="contact-section" aria-label="Contact Bellavierre Real Estate">
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

        {/* Floating Glassmorphism Form Card */}
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
            <form onSubmit={handleSubmit} className="contact-form-card glass" aria-label="Book a Call Form">
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

      {/* Background Villa Architecture with Top Fade Gradient */}
      <div className="contact-bg-wrap" aria-hidden="true">
        <div className="contact-bg-gradient-top"></div>
        <img
          src="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789e453099e81e883a098fd_minimalist-architecture-space-(7).jpg"
          alt="Modern luxury villa architectural backdrop"
          className="contact-bg-image"
          loading="lazy"
        />
      </div>
    </section>
  )
}
