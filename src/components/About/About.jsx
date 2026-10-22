import { Eye, Users, Hand } from 'lucide-react'
import './About.css'

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
  return (
    <section id="about" className="about-section" aria-label="About Bellavierre Real Estate">
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

              {/* 2x2 Stats Grid */}
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

          {/* Middle Column: Team Image */}
          <div className="about-col about-col-middle">
            <div className="about-image-card">
              <img
                src="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788a87b1d5db7654ca7e7cd_group-confident-businesspeople-office.jpg"
                alt="Bellavierre Real Estate Team in Dubai"
                className="about-team-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: 3 Pillars (Our Vision, Expert Team, Tailored Solutions) */}
          <div className="about-col about-col-right">
            {/* Feature 1: Our Vision */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Eye size={22} strokeWidth={2.2} />
                </div>
                <h3 className="about-feature-title">Our Vision</h3>
              </div>
              <p className="about-feature-desc">
                To be a trusted leader in the Dubai luxury real estate market, offering unparalleled advisory across premium off-plan developments, prime beachfront communities, and high-yield investments.
              </p>
            </div>

            {/* Feature 2: Expert Team */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Users size={22} strokeWidth={2.2} />
                </div>
                <h3 className="about-feature-title">Expert Team</h3>
              </div>
              <p className="about-feature-desc">
                Our team comprises seasoned professionals with extensive experience in Dubai luxury real estate, developer track-record analysis, overseas buyer guidance, and handover coordination.
              </p>
            </div>

            {/* Feature 3: Tailored Solutions */}
            <div className="about-feature-item">
              <div className="about-feature-header">
                <div className="about-feature-icon-wrap" aria-hidden="true">
                  <Hand size={22} strokeWidth={2.2} />
                </div>
                <h3 className="about-feature-title">Tailored Solutions</h3>
              </div>
              <p className="about-feature-desc">
                We coordinate virtual viewings, project comparisons, documentation and handover around your time zone, so distance never means losing visibility or control.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Partners & Clients Logos */}
        <div className="about-partners-wrap">
          <h3 className="partners-title">Check Our Best Clients &amp; Partners</h3>

          {/* Row 1 */}
          <div className="partners-row">
            {partnersRow1.map((logo, idx) => (
              <div key={idx} className="partner-logo-item">
                <img src={logo} alt={`Partner ${idx + 1}`} className="partner-logo-img" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="partners-row">
            {partnersRow2.map((logo, idx) => (
              <div key={idx} className="partner-logo-item">
                <img src={logo} alt={`Partner ${idx + 9}`} className="partner-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
