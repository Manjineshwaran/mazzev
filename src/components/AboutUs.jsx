import { useEffect } from 'react'
import './AboutUs.css'

const EMAIL = 'info@mazzev.com'
const PHONE_INTL = '+46764393211'

const PRODUCER_CARDS = [
  {
    title: 'Small-Scale Producers & MSMEs',
    text: 'We partner directly with artisan families, village producers and micro-enterprises across India — giving them fair prices, stable orders and access to European markets they could never reach alone.',
  },
  {
    title: 'Large-Scale Industries',
    text: 'For established manufacturers, we provide a reliable European gateway: compliant documentation, consolidated logistics and long-term supply relationships built on transparency.',
  },
]

const PILLARS = [
  {
    title: 'European Standards & Compliance',
    text: 'Every product is checked against EU quality, safety and labeling requirements before it crosses the border.',
  },
  {
    title: 'Direct & Transparent Sourcing',
    text: 'No middlemen, no hidden margins. We know our producers personally and share the story behind every product.',
  },
  {
    title: 'Flexible Scale',
    text: 'From a single carton for a boutique shop to full container loads for distributors — we grow with your business.',
  },
]

export default function AboutUs({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="about-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="About Mazzev"
    >
      <div className="about-modal">
        <button type="button" className="about-modal-close" onClick={onClose} aria-label="Close about us">
          ✕
        </button>

        <div className="about-wrap">
          {/* HERO HEADER */}
          <header className="about-hero">
            <span className="about-eyebrow">About Mazzev</span>
            <h2>
              Indian craftsmanship. European standards.
              <br />
              Global reach.
            </h2>
            <p className="about-lead">
              From Stockholm, Mazzev curates authentic Indian products and brings them to discerning
              customers across Europe — with a commitment to quality, transparency, and fair
              partnerships.
            </p>
          </header>

          {/* TWO-COLUMN STORY */}
          <div className="about-story">
            <div className="about-story-text">
              <h3>Our story</h3>
              <p>
                From our base in Stockholm, we work hand-in-hand with producers across India — from
                small family workshops to large industrial units — to bring their products to Europe.
              </p>
              <p>
                We believe trade should be simple and honest: the people who make the products should
                be paid fairly, and the people who buy them should know exactly where they come from.
                That is the bridge Mazzev builds every day.
              </p>
            </div>
            <div className="about-story-visual" aria-hidden="true">
              <div className="about-route">
                <span className="about-route-dot india">IN</span>
                <span className="about-route-line" />
                <span className="about-route-dot sweden">SE</span>
              </div>
              <p className="about-route-caption">India → Stockholm → Europe &amp; beyond</p>
            </div>
          </div>

          {/* PRODUCER CARDS */}
          <div className="about-cards">
            {PRODUCER_CARDS.map((card) => (
              <article className="about-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          {/* VALUE PILLARS */}
          <div className="about-pillars">
            {PILLARS.map((pillar, i) => (
              <div className="about-pillar" key={pillar.title}>
                <span className="about-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>

          {/* CONTACT CTA */}
          <div className="about-cta">
            <h3>Let&apos;s build something together</h3>
            <p>Whether you produce in India or buy in Europe — we&apos;d love to hear from you.</p>
            <div className="about-cta-actions">
              <a className="about-btn primary" href={`mailto:${EMAIL}`}>
                Email us · {EMAIL}
              </a>
              <a className="about-btn secondary" href={`tel:${PHONE_INTL}`}>
                Call · {PHONE_INTL}
              </a>
            </div>
            <p className="about-cta-note">Safe &amp; secure payments · Invoicing available for businesses</p>
          </div>
        </div>
      </div>
    </div>
  )
}
