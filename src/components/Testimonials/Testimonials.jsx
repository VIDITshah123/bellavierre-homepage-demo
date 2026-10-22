import { Star } from 'lucide-react'
import './Testimonials.css'

export const testimonialsCol1 = [
  {
    id: 'c1-1',
    name: 'Nathan Harper',
    role: 'Software Developer, USA',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c71887e2ed9af8f9a10e_reviewer-10.jpg',
    quote: 'Bellavierre made buying in Dubai from the United States straightforward. The team handled virtual viewings, explained every cost clearly and kept us updated through each stage.',
  },
  {
    id: 'c1-2',
    name: 'Jacob Reed',
    role: 'Corporate Attorney',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c716eb844945c9030759_reviewer-16.jpg',
    quote: "Olivia's professionalism and deep understanding of luxury Dubai properties gave me confidence throughout the entire process.",
  },
  {
    id: 'c1-3',
    name: 'Amelia Cooper',
    role: 'Graphic Designer, Australia',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c7160b1fd1a669fc2501_reviewer-3.jpg',
    quote: 'Managing the purchase from Australia could have been complicated, but the communication was excellent. Every document, deadline and next step was organised around our time zone.',
  },
  {
    id: 'c1-4',
    name: 'Harper Gray',
    role: 'Freelance Writer',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784cf95c71e1da0073c2240_team-4.jpg',
    quote: "Charlotte's dedication and efficiency turned my dream of owning a luxury off-plan villa into reality. Her developer guidance was invaluable.",
  },
]

export const testimonialsCol2 = [
  {
    id: 'c2-1',
    name: 'Lily Ross',
    role: 'Eco-Lifestyle Blogger',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052eb36498c29a93edfb_reviewer-12.jpg',
    quote: "Emma's expertise in sustainable and prime off-plan developments exceeded my expectations. She found me the perfect high-yield home for my family.",
  },
  {
    id: 'c2-2',
    name: 'William Parker',
    role: 'Business Owner, UK',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93ede9_reviewer-9.jpg',
    quote: 'We were investing from the UK and needed reliable local guidance. Bellavierre shortlisted strong options, compared the payment plans and helped us choose with confidence.',
  },
  {
    id: 'c2-3',
    name: 'Logan Price',
    role: 'Environmental Consultant',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93ede6_reviewer-5.jpg',
    quote: "Sophia's attention to detail and market expertise made finding our waterfront vacation property a smooth and enjoyable experience.",
  },
  {
    id: 'c2-4',
    name: 'Anthony Walker',
    role: 'Venture Capitalist',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052eb36498c29a93edff_reviewer-15.jpg',
    quote: 'Data-driven approach to developer track records, escrow verification and ROI forecasting made our multi-unit off-plan acquisition completely seamless.',
  },
]

export const testimonialsCol3 = [
  {
    id: 'c3-1',
    name: 'Samuel Brooks',
    role: 'Interior Designer',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93edf3_reviewer-1.jpg',
    quote: "Charlotte's architectural insights and developer comparisons made choosing my dream home in Dubai an inspiring journey.",
  },
  {
    id: 'c3-2',
    name: 'Sebastian Turner',
    role: 'Hospitality Manager',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93eded_reviewer-11.jpg',
    quote: "Ethan's creativity and expertise in high-yield rental properties gave me the confidence to invest in my first Sobha residence.",
  },
  {
    id: 'c3-3',
    name: 'Scarlett Mitchell',
    role: 'Event Planner',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93edeb_reviewer-8.jpg',
    quote: "Olivia's insight helped me navigate the short-term rental market and Dubai Golden Visa requirements with ease and total clarity.",
  },
  {
    id: 'c3-4',
    name: 'Alexander Hayes',
    role: 'Investment Advisor',
    avatar: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052eb36498c29a93ee01_reviewer-14.jpg',
    quote: 'The transparent fee structure and verified payment schedule gave our portfolio complete peace of mind. Truly on-the-ground experts.',
  },
]

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      {/* 5 Stars */}
      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>

      {/* Reviewer Details */}
      <div className="testimonial-reviewer">
        <img
          src={item.avatar}
          alt={item.name}
          className="reviewer-avatar"
          loading="lazy"
        />
        <div className="reviewer-info">
          <h4 className="reviewer-name">{item.name}</h4>
          <span className="reviewer-role">{item.role}</span>
        </div>
      </div>

      {/* Review Quote */}
      <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
    </div>
  )
}

export default function Testimonials() {
  // Duplicated for infinite continuous vertical scroll
  const col1Items = [...testimonialsCol1, ...testimonialsCol1]
  const col2Items = [...testimonialsCol2, ...testimonialsCol2]
  const col3Items = [...testimonialsCol3, ...testimonialsCol3]

  // Combined for mobile upward scroll
  const mobileItems = [...testimonialsCol1, ...testimonialsCol2, ...testimonialsCol3, ...testimonialsCol1, ...testimonialsCol2, ...testimonialsCol3]

  return (
    <section id="testimonials" className="testimonials-section" aria-label="Client Testimonials">
      <div className="testimonials-container">
        {/* Left Column: Heading & Description */}
        <div className="testimonials-left">
          <div className="testimonials-heading-wrap">
            <span className="testimonials-pill-badge">What Our Clients Say</span>
            <h2 className="testimonials-main-heading">
              TRUSTED BY MANY,<br />LOVED BY ALL
            </h2>
            <p className="testimonials-desc">
              Our clients’ success stories reflect our commitment to excellence. See how we’ve helped international and local investors find high-yield Dubai opportunities, prime waterfront homes, and off-plan residences with total clarity.
            </p>
          </div>
        </div>

        {/* Right Column: 3 Vertical Moving Columns (Desktop) */}
        <div className="testimonials-right desktop-testimonials">
          {/* Column 1: Moves UP */}
          <div className="testimonials-col col-move-up">
            <div className="testimonials-col-track track-up">
              {col1Items.map((item, idx) => (
                <TestimonialCard key={`col1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 2: Moves DOWN */}
          <div className="testimonials-col col-move-down">
            <div className="testimonials-col-track track-down">
              {col2Items.map((item, idx) => (
                <TestimonialCard key={`col2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 3: Moves UP */}
          <div className="testimonials-col col-move-up">
            <div className="testimonials-col-track track-up">
              {col3Items.map((item, idx) => (
                <TestimonialCard key={`col3-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: Scrolling from Down to Upward Direction */}
        <div className="testimonials-mobile-wrap mobile-testimonials">
          <div className="testimonials-mobile-track mobile-track-up">
            {mobileItems.map((item, idx) => (
              <TestimonialCard key={`mob-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
