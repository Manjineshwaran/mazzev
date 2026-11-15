import { useEffect } from 'react'
import { translate } from '../i18n'
import './AboutUs.css'

const EMAIL = 'info@mazzev.com'
const PHONE_INTL = '+46764393211'

const PRODUCER_COUNT = 2
const PILLAR_COUNT = 3

export default function AboutUs({ open, onClose, lang = 'en' }) {
  const t = (key) => translate(lang, key)
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
            <span className="about-eyebrow">{t('about.eyebrow')}</span>
            <h2>{t('about.h1')}<br />{t('about.h2')}</h2>
            <p className="about-lead">{t('about.lead')}</p>
          </header>

          {/* TWO-COLUMN STORY */}
          <div className="about-story">
            <div className="about-story-text">
              <h3>{t('about.storyTitle')}</h3>
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
            </div>
            <div className="about-story-visual" aria-hidden="true">
              <div className="about-route">
                <span className="about-route-dot india">IN</span>
                <span className="about-route-line" />
                <span className="about-route-dot sweden">SE</span>
              </div>
              <p className="about-route-caption">{t('about.route')}</p>
            </div>
          </div>

          {/* PRODUCER CARDS */}
          <div className="about-cards">
            {Array.from({ length: PRODUCER_COUNT }, (_, i) => (
              <article className="about-card" key={i}>
                <h3>{t(`about.producer${i + 1}t`)}</h3>
                <p>{t(`about.producer${i + 1}d`)}</p>
              </article>
            ))}
          </div>

          {/* VALUE PILLARS */}
          <div className="about-pillars">
            {Array.from({ length: PILLAR_COUNT }, (_, i) => (
              <div className="about-pillar" key={i}>
                <span className="about-pillar-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t(`about.pillar${i + 1}t`)}</h3>
                <p>{t(`about.pillar${i + 1}d`)}</p>
              </div>
            ))}
          </div>

          {/* CONTACT CTA */}
          <div className="about-cta">
            <h3>{t('about.ctaTitle')}</h3>
            <p>{t('about.ctaText')}</p>
            <div className="about-cta-actions">
              <a className="about-btn primary" href={`mailto:${EMAIL}`}>
                {t('about.emailUs')} · {EMAIL}
              </a>
              <a className="about-btn secondary" href={`tel:${PHONE_INTL}`}>
                {t('about.call')} · {PHONE_INTL}
              </a>
            </div>
            <p className="about-cta-note">{t('about.ctaNote')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
