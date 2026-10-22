import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer" className="footer-section" role="contentinfo">
      <div className="footer-container">
        {/* Top Part */}
        <div className="footer-wrap-top">
          {/* Left Column: Brand & Contact Info */}
          <div className="footer-wrap-left">
            <a href="/" className="footer-brand-logo" aria-label="Bellavierre Real Estate Home">
              <img
                src="/logo.png"
                alt="Bellavierre Real Estate LLC"
                className="footer-brand-img"
              />
              <span className="footer-brand-name">BELLAVIERRE</span>
            </a>

            <div className="footer-contact-details">
              <a href="tel:+97145784312" className="footer-contact-link">
                +(971) 4 578 4312
              </a>
              <a href="mailto:admin@bellavierre.com" className="footer-contact-link">
                admin@bellavierre.com
              </a>
              <div className="footer-address">
                Office 1204, Opus Tower by Omniyat, Business Bay, Dubai, UAE
              </div>
            </div>

            {/* Social Icons matching VistaHaven */}
            <div className="footer-social-wrap" aria-label="Social media channels">
              <a
                href="https://www.facebook.com/bellavierrerealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.82-2 2-2h1.5V2.14c-.37-.05-1.5-.14-2.77-.14C12.07 2 10 3.65 10 7.37v2.13H7v4h3v10h4v-10z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/bellavierre"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26.24 26.24 0 0 0 2 12a26.24 26.24 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.24 26.24 0 0 0 22 12a26.24 26.24 0 0 0-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/bellavierrerealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Navigation and Admin links */}
          <div className="footer-wrap-right">
            <div className="footer-nav-col">
              <h3 className="footer-col-heading">Navigation</h3>
              <nav className="footer-nav-list" aria-label="Footer Navigation">
                <a href="#hero" className="footer-nav-link">Home</a>
                <a href="#about" className="footer-nav-link">About</a>
                <a href="#projects" className="footer-nav-link">Properties</a>
                <a href="#instagram" className="footer-nav-link">Blogs</a>
                <a href="#experts" className="footer-nav-link">Agents</a>
                <a href="#contact" className="footer-nav-link">Contact</a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <h3 className="footer-col-heading">Admin</h3>
              <nav className="footer-nav-list" aria-label="Admin and Regulatory">
                <a href="#services" className="footer-nav-link">Licensing</a>
                <a href="#why-us" className="footer-nav-link">Style Guide</a>
                <a href="#faq" className="footer-nav-link">Change Log</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="footer-wrap-bottom">
          <div className="footer-copyright">
            © Copyright 2026. All Rights Reserved by{' '}
            <a href="/" className="footer-copyright-link">Bellavierre Real Estate LLC</a>
          </div>
          <div className="footer-powered">
            Powered by{' '}
            <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">
              Webflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
