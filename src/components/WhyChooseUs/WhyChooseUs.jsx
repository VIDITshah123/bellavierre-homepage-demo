import { ShieldCheck, Users, Search, FolderKanban, Globe, Building2 } from 'lucide-react'
import './WhyChooseUs.css'

const reasons = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Client-First Advice',
    description: 'Advice shaped around your budget, goals and preferred timeline — whether you prioritise rental income, capital growth or a future Dubai home.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Experts with Team Spirit',
    description: 'Our multi-skilled on-the-ground team provides innovative, forward-thinking solutions and rigorous analysis of the UAE property market.',
  },
  {
    id: 3,
    icon: Search,
    title: 'Transparent Process',
    description: 'We maintain complete transparency in every aspect — from verified developer track records to payment plans, escrow safeguards, and real handover timelines.',
  },
  {
    id: 4,
    icon: FolderKanban,
    title: 'End-to-End Support',
    description: 'From first enquiry, virtual viewings, and reservation, through documentation, developer coordination, and final key handover.',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Time Zone Alignment',
    description: 'We coordinate virtual viewings, project comparisons, documentation and handover around your time zone, so distance never means losing visibility.',
  },
  {
    id: 6,
    icon: Building2,
    title: 'Direct Developer Access',
    description: 'Direct partnerships with leading UAE developers like Sobha Realty, Danube Properties, and luxury waterfront developers across Dubai and Abu Dhabi.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-choose-section" aria-label="Why Overseas Investors Choose Bellavierre">
      <div className="why-choose-container">
        {/* Header */}
        <div className="why-choose-header">
          <span className="why-choose-badge">Confidence at Every Step</span>
          <h2 className="why-choose-heading">
            WHY OVERSEAS INVESTORS<br />CHOOSE BELLAVIERRE
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="why-choose-grid">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="why-choose-card">
                <div className="why-choose-icon-box" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">{item.title}</h3>
                <p className="why-choose-card-desc">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
