import './Marquee.css'

export default function MarqueeBand({ text = 'selected projects', rows = 2 }) {
  const items = Array(12).fill(null).map((_, i) => (
    i % 2 === 0
      ? <span key={i} className="marquee-dot" aria-hidden="true">·</span>
      : <span key={i} className="marquee-text">{text}</span>
  ))

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-row marquee-row--left">
        <div className="marquee-track marquee-track--left">
          {items}{items}
        </div>
      </div>
      {rows > 1 && (
        <div className="marquee-row marquee-row--right">
          <div className="marquee-track marquee-track--right">
            {items}{items}
          </div>
        </div>
      )}
    </div>
  )
}
