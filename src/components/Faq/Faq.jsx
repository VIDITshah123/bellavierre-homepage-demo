import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import './Faq.css'

const faqItems = [
  {
    id: 1,
    question: 'What Is The Process For Buying A Property?',
    answer:
      'The process begins with selecting the ideal property based on your investment strategy, followed by due diligence and reservation. For off-plan purchases, you sign the Sales and Purchase Agreement (SPA) and deposit funds into a RERA-regulated escrow account. For ready properties, transfer takes place at an official Dubai Land Department (DLD) Trustee office. Bellavierre provides end-to-end guidance from initial consultation to final Title Deed handover.',
  },
  {
    id: 2,
    question: 'How Do I Determine How Much I Can Afford?',
    answer:
      'Our advisors assess your total capital, cash flow requirements, and target ROI. In Dubai, off-plan projects offer flexible developer installment schedules (typically 10%–20% down payment, with remaining installments linked to construction milestones). For ready properties, non-resident foreign investors can access UAE mortgage financing up to 50%–60% LTV, while residents can secure up to 80% through our partner banking specialists.',
  },
  {
    id: 3,
    question: 'What Documents Are Required For Renting A Property?',
    answer:
      'To lease a property in Dubai, you will need a copy of your valid Passport, UAE Residence Visa, Emirates ID, and a local bank chequebook for rental installments. If you are an overseas landlord looking to rent out your newly purchased Dubai investment property, Bellavierre coordinates tenant sourcing, Ejari registration, DEWA connection, and ongoing property management on your behalf.',
  },
  {
    id: 4,
    question: 'Can I Terminate A Lease Agreement Early?',
    answer:
      'Under RERA regulations, early termination of an Ejari tenancy contract depends on the agreed addendum. Standard practice requires the tenant to provide 60 to 90 days written notice and compensate the landlord with 1 to 2 months rental penalty. Our team assists both landlords and tenants with transparent lease contracts and amicable dispute resolution.',
  },
  {
    id: 5,
    question: 'What Are The Risks Of Investing In Real Estate?',
    answer:
      'Key risks include developer execution delays, market cycle shifts, and unexpected vacancy periods. Bellavierre protects your capital by only recommending top-tier, financially sound master developers, verifying RERA escrow accounts and construction audits, and targeting high-demand submarkets with robust rental yields (7% to 9%+ net).',
  },
  {
    id: 6,
    question: 'How Do I Choose The Right Property To Invest In?',
    answer:
      'We curate options specifically aligned with your investment thesis—whether you want maximum short-term rental yields (holiday homes in Downtown or Dubai Marina), long-term capital appreciation in rapid-growth zones (Meydan, Dubai Islands, Dubai South near Al Maktoum Airport), or prime family residences. We provide detailed financial projections for every unit.',
  },
  {
    id: 7,
    question: 'Do High-End Properties Support Virtual Tours?',
    answer:
      'Yes, 100% of our premium off-plan launches and luxury listings support immersive 3D virtual walkthroughs, architectural rendering fly-throughs, and real-time live video walk-throughs conducted by our Dubai agents. We schedule video tours around your native time zone in the US, UK, Europe, or India so you can inspect without traveling.',
  },
  {
    id: 8,
    question: 'How Long Does The Property Transfer Process Take?',
    answer:
      'For off-plan purchases directly from developers, initial booking, Oqood registration, and contract execution take only 3 to 7 working days and can be completed remotely from abroad. For secondary ready properties, the transfer process at the DLD Trustee office takes between 15 and 30 days from signing the MOU (Form F) to receiving your official Title Deed.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0) // Default first item open as in VistaHaven

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-container">
        {/* Left Column: Heading & Badge */}
        <div className="faq-column-left">
          <div className="faq-badge">Help Center</div>
          <h2 className="faq-heading">
            FREQUENTLY ASKED<br />QUESTIONS
          </h2>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="faq-column-right">
          <div className="faq-accordion-list" role="region" aria-label="FAQ Accordion">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-toggle-circle ${isOpen ? 'active' : ''}`} aria-hidden="true">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{item.answer}</p>
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
