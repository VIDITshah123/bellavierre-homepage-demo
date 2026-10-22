import { useEffect, useRef } from 'react'
import { ShieldCheck, Users, Search, FolderKanban, Globe, Building2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhyChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Client-First Advice',
    description:
      'Advice shaped around your budget, goals and preferred timeline — whether you prioritise rental income, capital growth or a future Dubai home.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Experts with Team Spirit',
    description:
      'Our multi-skilled on-the-ground team provides innovative, forward-thinking solutions and rigorous analysis of the UAE property market.',
  },
  {
    id: 3,
    icon: Search,
    title: 'Transparent Process',
    description:
      'We maintain complete transparency in every aspect — from verified developer track records to payment plans, escrow safeguards, and real handover timelines.',
  },
  {
    id: 4,
    icon: FolderKanban,
    title: 'End-to-End Support',
    description:
      'From first enquiry, virtual viewings, and reservation, through documentation, developer coordination, and final key handover.',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Time Zone Alignment',
    description:
      'We coordinate virtual viewings, project comparisons, documentation and handover around your time zone, so distance never means losing visibility.',
  },
  {
    id: 6,
    icon: Building2,
    title: 'Direct Developer Access',
    description:
      'Direct partnerships with leading UAE developers like Sobha Realty, Danube Properties, and luxury waterfront developers across Dubai and Abu Dhabi.',
  },
]

// Interactive 3D Tilt Card Component
function TiltCard({ item }) {
  const cardRef = useRef(null)
  const Icon = item.icon

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const rotateX = (0.5 - y) * 12
    const rotateY = (x - 0.5) * 12

    el.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale(1.02)`
    el.style.setProperty('--spotlight-x', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--spotlight-y', `${(y * 100).toFixed(1)}%`)
  }

  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
  }

  return (
    <div
      ref={cardRef}
      className="why-choose-card interactive-tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-spotlight-glare" aria-hidden="true" />
      <div className="why-choose-icon-box" aria-hidden="true">
        <Icon size={26} strokeWidth={2} className="why-icon" />
      </div>
      <h3 className="why-choose-card-title">{item.title}</h3>
      <p className="why-choose-card-desc">{item.description}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.why-choose-header > *', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.interactive-tilt-card', {
        y: 45,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="why-us"
      className="why-choose-section"
      ref={sectionRef}
      aria-label="Why Overseas Investors Choose Bellavierre"
    >
      <div className="why-choose-container">
        {/* Header */}
        <div className="why-choose-header">
          <span className="why-choose-badge">Confidence at Every Step</span>
          <h2 className="why-choose-heading">
            WHY OVERSEAS INVESTORS<br />CHOOSE BELLAVIERRE
          </h2>
        </div>

        {/* 6-Card Grid with 3D Tilt */}
        <div className="why-choose-grid">
          {reasons.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
