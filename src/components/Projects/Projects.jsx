import { useState, useRef, useEffect } from 'react'
import { MapPin, Bed, Bath, Maximize2, ArrowUpRight, X, Calendar, DollarSign, Award, ExternalLink } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { properties } from '../../data/projects'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All Projects', 'For Sell', 'For Investment', 'For Rent']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [selectedProperty, setSelectedProperty] = useState(null)
  const sectionRef = useRef(null)

  const filteredProperties = properties.filter((p) => {
    if (activeCategory === 'All Projects') return true
    return p.category.toLowerCase() === activeCategory.toLowerCase()
  })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.property-card', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [activeCategory])

  // Mouse tilt on card
  const handleCardMouseMove = (e, el) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const rotateX = (0.5 - y) * 10
    const rotateY = (x - 0.5) * 10

    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.02)`
    el.style.setProperty('--card-spotlight-x', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--card-spotlight-y', `${(y * 100).toFixed(1)}%`)
  }

  const handleCardMouseLeave = (el) => {
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
  }

  return (
    <section id="projects" className="featured-properties-section" ref={sectionRef} aria-label="Featured Properties">
      <div className="properties-container">
        {/* Header */}
        <div className="properties-header">
          <span className="properties-badge">Selected Projects</span>
          <h2 className="properties-heading">
            EXPLORE DUBAI OPPORTUNITIES<br />SELECTED FOR GLOBAL INVESTORS
          </h2>
          <p className="properties-subheading">
            Compare selected Dubai developments with clear guidance on locations, payment plans, handover timelines and long-term suitability.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="projects-filter-bar" role="tablist" aria-label="Filter Properties">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`projects-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Card Properties Grid with 3D Tilt */}
        <div className="properties-grid" role="list">
          {filteredProperties.map((item) => (
            <article
              key={item.id}
              className="property-card interactive-project-card"
              role="listitem"
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
              onClick={() => setSelectedProperty(item)}
            >
              <div className="property-card-spotlight" aria-hidden="true" />

              {/* Image Wrap */}
              <div className="property-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="property-img"
                  loading="lazy"
                />
                <span className="property-status-tag">{item.category}</span>
                <div className="property-view-overlay">
                  <span className="quick-view-badge">Quick View ↗</span>
                </div>
              </div>

              {/* Info Container */}
              <div className="property-meta-box">
                {/* Location */}
                <div className="property-location-line">
                  <MapPin size={15} strokeWidth={2} className="location-pin-icon" />
                  <span className="location-text">{item.location}</span>
                </div>

                {/* Title & Price */}
                <div className="property-title-price-row">
                  <h3 className="property-name">{item.title}</h3>
                  <div className="property-price-val">{item.price}</div>
                </div>

                {/* Specs / Features */}
                <div className="property-specs-row">
                  <div className="property-spec-item">
                    <Bed size={15} strokeWidth={1.8} className="spec-icon" />
                    <span>{item.beds} Beds</span>
                  </div>

                  <div className="property-spec-item">
                    <Bath size={15} strokeWidth={1.8} className="spec-icon" />
                    <span>{item.baths} Baths</span>
                  </div>

                  <div className="property-spec-item last">
                    <Maximize2 size={13} strokeWidth={1.8} className="spec-icon" />
                    <span>{item.sqft} sq.ft</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="properties-cta-center">
          <a href="#contact" className="view-all-properties-btn">
            <span>Book a Consultation For All Listings</span>
            <span className="view-all-arrow-circle" aria-hidden="true">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>

      {/* Interactive Quick-View Modal */}
      {selectedProperty && (
        <div
          className="property-modal-backdrop"
          onClick={() => setSelectedProperty(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-property-title"
        >
          <div
            className="property-modal-card glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProperty(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              <div className="modal-image-col">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="modal-property-img"
                />
                <span className="modal-category-badge">{selectedProperty.category}</span>
              </div>

              <div className="modal-info-col">
                <div className="modal-location">
                  <MapPin size={16} />
                  <span>{selectedProperty.location}</span>
                </div>
                <h3 id="modal-property-title" className="modal-title">
                  {selectedProperty.title}
                </h3>
                <div className="modal-price">{selectedProperty.price}</div>

                <div className="modal-specs-bar">
                  <div className="modal-spec">
                    <Bed size={16} />
                    <span>{selectedProperty.beds} Bedrooms</span>
                  </div>
                  <div className="modal-spec">
                    <Bath size={16} />
                    <span>{selectedProperty.baths} Bathrooms</span>
                  </div>
                  <div className="modal-spec">
                    <Maximize2 size={16} />
                    <span>{selectedProperty.sqft} sq.ft</span>
                  </div>
                </div>

                <div className="modal-highlights">
                  <div className="highlight-row">
                    <DollarSign size={18} className="highlight-icon" />
                    <div>
                      <strong>Flexible Payment Plan:</strong> 10% on Booking, 1% Monthly Installments, 40% on Handover
                    </div>
                  </div>
                  <div className="highlight-row">
                    <Award size={18} className="highlight-icon" />
                    <div>
                      <strong>Projected Return:</strong> 7.8% - 9.4% Net Annual Rental Yield
                    </div>
                  </div>
                  <div className="highlight-row">
                    <Calendar size={18} className="highlight-icon" />
                    <div>
                      <strong>Handover Window:</strong> Q4 2026 / Q2 2027 (RERA Escrow Protected)
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <a
                    href="#contact"
                    className="modal-cta-primary"
                    onClick={() => setSelectedProperty(null)}
                  >
                    <span>Schedule Private Viewing</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="https://bellavierre.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta-secondary"
                  >
                    <span>Brochure Request</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
