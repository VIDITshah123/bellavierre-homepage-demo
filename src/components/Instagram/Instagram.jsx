import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

// Inline Instagram brand icon (lucide-react doesn't include brand icons)
const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)
import { instagramPosts } from '../../data/projects'
import './Instagram.css'

export default function InstagramFeed() {
  const scrollRef = useRef(null)

  // Drag-to-scroll
  const handleMouseDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    el.dataset.dragging = 'true'
    el.dataset.startX = e.pageX - el.offsetLeft
    el.dataset.scrollLeft = el.scrollLeft
  }
  const handleMouseMove = (e) => {
    const el = scrollRef.current
    if (!el || el.dataset.dragging !== 'true') return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - el.dataset.startX) * 1.5
    el.scrollLeft = el.dataset.scrollLeft - walk
  }
  const handleMouseUp = () => {
    if (scrollRef.current) scrollRef.current.dataset.dragging = 'false'
  }

  return (
    <section className="instagram-section" aria-label="Instagram Feed">
      <div className="instagram-inner">
        <div className="instagram-panel">
          {/* Header */}
          <div className="instagram-header container">
            <div className="instagram-header-left">
              <span className="section-badge">Follow Us</span>
              <h2 className="instagram-title">Follow Bellavierre<br />on Instagram</h2>
            </div>
            <a
              href="https://www.instagram.com/bellavierrerealestate/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold instagram-follow-btn"
              aria-label="Follow Bellavierre on Instagram"
            >
              <InstagramIcon size={16} />
              @bellavierrerealestate
            </a>
          </div>

          {/* Scrollable Feed */}
          <div
            className="instagram-feed"
            ref={scrollRef}
            role="list"
            aria-label="Instagram posts"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-card"
                role="listitem"
                aria-label={post.caption}
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="instagram-card-img"
                  loading="lazy"
                  draggable={false}
                />
                <div className="instagram-card-overlay">
                  <div className="instagram-card-caption">{post.caption}</div>
                  <ExternalLink size={16} className="instagram-card-icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
