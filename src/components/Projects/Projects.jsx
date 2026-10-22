import { MapPin, Bed, Bath, Maximize2, ArrowUpRight } from 'lucide-react'
import { properties } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="featured-properties-section" aria-label="Featured Properties">
      <div className="properties-container">
        {/* Header */}
        <div className="properties-header">
          <span className="properties-badge">Selected Projects</span>
          <h2 className="properties-heading">
            EXPLORE DUBAI OPPORTUNITIES<br />SELECTED FOR GLOBAL INVESTORS
          </h2>
          <p className="properties-subheading" style={{
            fontFamily: "'Geist', 'Montserrat', sans-serif",
            fontSize: '15px',
            color: '#6b7280',
            maxWidth: '680px',
            margin: '12px auto 0 auto',
            textAlign: 'center',
            lineHeight: 1.6
          }}>
            Compare selected Dubai developments with clear guidance on locations, payment plans, handover timelines and long-term suitability.
          </p>
        </div>

        {/* 6-Card Properties Grid */}
        <div className="properties-grid" role="list">
          {properties.map((item) => (
            <article key={item.id} className="property-card" role="listitem">
              <a href={item.link} className="property-card-link">
                {/* Image Wrap */}
                <div className="property-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="property-img"
                    loading="lazy"
                  />
                  <span className="property-status-tag">{item.category}</span>
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
              </a>
            </article>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="properties-cta-center">
          <a href="#contact" className="view-all-properties-btn">
            <span>View All Projects</span>
            <span className="view-all-arrow-circle" aria-hidden="true">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
