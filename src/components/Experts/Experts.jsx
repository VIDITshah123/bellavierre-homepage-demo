import { ArrowUpRight } from 'lucide-react'
import './Experts.css'

export const expertsData = [
  {
    id: 1,
    name: 'Sophia Rivera',
    bellavierreName: 'Mehwish Ashraf',
    role: 'Sustainable Housing Consultant',
    bellavierreRole: 'Senior Luxury Property Specialist',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cdfe3449d7527c7c3749_feature-agent-6.jpg',
  },
  {
    id: 2,
    name: 'Liam Carter',
    bellavierreName: 'Abuzaid Shaikh',
    role: 'Commercial Real Estate Agent',
    bellavierreRole: 'Founder & Managing Director',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cdde59ed98fc94b57727_feature-agent-1.jpg',
  },
  {
    id: 3,
    name: 'James Callahan',
    bellavierreName: 'Akshay Wankar',
    role: 'Luxury Property Specialist',
    bellavierreRole: 'Sales Manager — Dubai Off-Plan',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cbe7048e78441169bbed_feature-agent-14.jpg',
  },
  {
    id: 4,
    name: 'Emma Harrison',
    bellavierreName: 'Aiman Amir',
    role: 'Exclusive Property Advisor',
    bellavierreRole: 'Senior Investment Advisor',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cef838bc357c11134830_feature-agent-11.jpg',
  },
  {
    id: 5,
    name: 'Isabella Wright',
    bellavierreName: 'Feeba Leema',
    role: 'Short-Term Rental Expert',
    bellavierreRole: 'Operations & Client Experience Lead',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cee23d0f1a38274d4c9c_feature-agent-10.jpg',
  },
  {
    id: 6,
    name: 'Noah Clarke',
    bellavierreName: 'Navin Maanam',
    role: 'Eco-Friendly Property Specialist',
    bellavierreRole: 'Commercial & Ready Property Director',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cc25e6119c429e721456_feature-agent-13.jpg',
  },
  {
    id: 7,
    name: 'Charlotte Morgan',
    bellavierreName: 'Zeeshan Arief',
    role: 'High-End Property Consultant',
    bellavierreRole: 'Client Relationship Director',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce62d3368885a9082c63_feature-agent-8.jpg',
  },
  {
    id: 8,
    name: 'Benjamin Foster',
    bellavierreName: 'Hritikesh Lole',
    role: 'Urban Development Advisor',
    bellavierreRole: 'Real Estate Portfolio Strategist',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cbc872061cb2483d232a_feature-agent-12.jpg',
  },
]

export default function Experts() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...expertsData, ...expertsData]

  return (
    <section id="experts" className="experts-section" aria-label="Meet Our Experts">
      <div className="experts-container">
        {/* Section Header */}
        <div className="experts-header">
          <span className="experts-pill-badge">Meet Our Experts</span>
          <h2 className="experts-main-heading">
            PERSONALIZED GUIDANCE,<br />PROVEN EXPERTISE
          </h2>
        </div>

        {/* Continuous Left-to-Right Moving Track */}
        <div className="experts-marquee-container" aria-hidden="false">
          <div className="experts-marquee-track">
            {marqueeItems.map((agent, index) => (
              <div key={`${agent.id}-${index}`} className="expert-card">
                <div className="expert-image-wrap">
                  <img
                    src={agent.image}
                    alt={agent.bellavierreName || agent.name}
                    className="expert-img"
                    loading="lazy"
                  />
                </div>
                <div className="expert-info">
                  <h3 className="expert-name">{agent.name}</h3>
                  <p className="expert-role">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Experts CTA Button */}
        <div className="experts-cta-wrap">
          <a href="#contact" className="view-all-experts-btn" aria-label="View all expert agents">
            <span className="btn-text">View All Expert Agents</span>
            <span className="btn-circle-arrow" aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
