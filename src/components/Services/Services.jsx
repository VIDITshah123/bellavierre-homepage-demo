import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Compass, Building2, TrendingUp, ShieldCheck } from 'lucide-react'
import './Services.css'

const servicesData = [
  {
    id: '01',
    tabNumber: '01',
    tabTitle: 'OVERSEAS ADVISORY',
    title: 'Overseas Buyer Advisory',
    description:
      'Personal guidance for overseas buyers, from project comparison and virtual viewings through reservation and purchase coordination.',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    badgeNumber: '01',
    badgeTitle: 'Overseas Buyer Advisory',
    icon: Compass,
  },
  {
    id: '02',
    tabNumber: '02',
    tabTitle: 'PROJECT SELECTION',
    title: 'Project Selection & Due Diligence',
    description:
      'We compare developers, locations, payment plans and handover timelines so you can buy with clarity.',
    image:
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1600&q=85',
    badgeNumber: '02',
    badgeTitle: 'Project Selection & Due Diligence',
    icon: Building2,
  },
  {
    id: '03',
    tabNumber: '03',
    tabTitle: 'INVESTMENT STRATEGY',
    title: 'Investment Strategy',
    description:
      'Advice shaped around your budget, goals and preferred timeline — whether you prioritise rental income, capital growth or a future Dubai home.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    badgeNumber: '03',
    badgeTitle: 'Investment Strategy',
    icon: TrendingUp,
  },
  {
    id: '04',
    tabNumber: '04',
    tabTitle: 'PURCHASE SUPPORT',
    title: 'End to End Purchase Support',
    description:
      'From reservation and documentation to developer coordination and final handover, our Dubai team supports you at every stage.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    badgeNumber: '04',
    badgeTitle: 'End to End Support',
    icon: ShieldCheck,
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1) // Default to 02
  const hoverTimerRef = useRef(null)
  const lastSwitchTimeRef = useRef(0)

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
      }
    }
  }, [])

  const selectService = (index, immediate = false) => {
    if (index === activeIndex) return

    const now = Date.now()
    // Anti-flicker lock: if an accordion transition recently started (< 260ms),
    // ignore edge-sweep crossing events to prevent boundary oscillation
    if (!immediate && now - lastSwitchTimeRef.current < 260) {
      return
    }

    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }

    if (immediate) {
      lastSwitchTimeRef.current = now
      setActiveIndex(index)
    } else {
      // 90ms intent delay: ensures the user deliberately paused/hovered on this tile,
      // completely eliminating jitter when the cursor brushes past an edge
      hoverTimerRef.current = setTimeout(() => {
        lastSwitchTimeRef.current = Date.now()
        setActiveIndex(index)
      }, 90)
    }
  }

  const handleMouseEnter = (index) => {
    selectService(index, false)
  }

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }

  const currentService = servicesData[activeIndex]
  const ActiveIcon = currentService.icon

  return (
    <section id="services" className="feature-service-section" aria-label="Our Services">
      <span id="service" className="service-anchor-alias" aria-hidden="true" />
      <div className="feature-service-container">
        {/* Header */}
        <div className="feature-service-header">
          <span className="service-pill-badge">What We Offer</span>
          <h2 className="service-main-heading">
            COMPREHENSIVE DUBAI PROPERTY SERVICES
          </h2>
          <p className="service-subtext">
            Our services are shaped around your goals — whether you&apos;re an overseas buyer, a seasoned investor, or purchasing for personal use.
          </p>
        </div>

        {/* Interactive Accordion / Slider Wrap */}
        <div className="feature-service-wrap">
          {/* Left Column: Active Service Details */}
          <div className="feature-service-left">
            <div className="feature-service-info-box" key={currentService.id}>
              <div className="service-icon-wrap" aria-hidden="true">
                <ActiveIcon size={30} strokeWidth={1.8} className="service-lucide-icon" />
              </div>
              <h3 className="service-info-title">{currentService.title}</h3>
              <p className="service-info-desc">{currentService.description}</p>
            </div>
          </div>

          {/* Mobile Tabs Switcher (Visible only <= 768px) */}
          <div className="service-mobile-tabs" role="tablist" aria-label="Services selector">
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index
              const shortTitle = service.tabTitle.split(' ')[0]
              return (
                <button
                  key={service.id}
                  type="button"
                  className={`service-mobile-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => selectService(index, true)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="mob-tab-num">{service.tabNumber}</span>
                  <span className="mob-tab-label">{shortTitle}</span>
                </button>
              )
            })}
          </div>

          {/* Right Column: Interactive Horizontal Accordion */}
          <div
            className="feature-service-right"
            role="tablist"
            onMouseLeave={handleMouseLeave}
          >
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index
              const isToLeft = index < activeIndex

              return (
                <div
                  key={service.id}
                  className={`feature-service-pane ${isActive ? 'is-active' : 'is-collapsed'}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => selectService(index, true)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      selectService(index, true)
                    }
                  }}
                >
                  {/* Expanded Image Card */}
                  <div className="service-active-card" aria-hidden={!isActive}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-img"
                      loading="eager"
                    />

                    {/* Bottom-Right Corner Cutout Dock */}
                    <div className="service-corner-dock" aria-hidden="true">
                      {/* Top-Right Inverted Corner Fillet */}
                      <div className="service-corner-top-right">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
                        </svg>
                      </div>

                      {/* Bottom-Left Inverted Corner Fillet */}
                      <div className="service-corner-bottom-left">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
                        </svg>
                      </div>

                      {/* White Badge Content */}
                      <div className="service-badge-content">
                        <div className="service-badge-num">{service.badgeNumber}</div>
                        <div className="service-badge-title">{service.badgeTitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Collapsed Vertical Tab Spine */}
                  <div className="service-vertical-spine" aria-hidden={isActive}>
                    {/* Direction Arrow */}
                    <div className="service-spine-arrow" aria-hidden="true">
                      {isToLeft ? (
                        <ArrowLeft size={16} strokeWidth={2} />
                      ) : (
                        <ArrowRight size={16} strokeWidth={2} className="arrow-rotate-up" />
                      )}
                    </div>

                    {/* Rotated Vertical Title */}
                    <div className="service-vertical-text">
                      <span className="spine-number">{service.tabNumber}</span>
                      <span className="spine-title">{service.tabTitle}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
