import {
  aboutCards,
  aboutStory,
  categories,
  contactInfo,
  filters,
  supportTopics,
  tradeCards,
  trustItems,
} from '../data/catalog'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons'

export function TrustBar() {
  return (
    <section className="trust">
      <div className="wrap trustrow">
        {trustItems.map((item) => (
          <div className="trustitem" key={item.title}>
            <span>{item.icon}</span>
            <div>
              {item.title}
              <small>{item.text}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Categories({ onBrowseAll, onSelect }) {
  return (
    <section className="section" id="categories">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2>Explore our categories</h2>
            <p>Everyday essentials, all in one place.</p>
          </div>
          <button className="textlink" type="button" onClick={onBrowseAll}>
            Browse all products&nbsp; →
          </button>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <button
              className="category"
              type="button"
              key={category.filter}
              onClick={() => onSelect(category.filter)}
            >
              <span className="cat-icon">{category.icon}</span>
              <strong>{category.title}</strong>
              <small>{category.text}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Collection({ filter, onFilter, children }) {
  return (
    <section className="section soft" id="products">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2>Discover the collection</h2>
            <p>Explore our sample catalogue. Product details are placeholders for this prototype.</p>
          </div>
        </div>
        <div className="filterbar">
          {filters.map((name) => (
            <button
              className={filter === name ? 'chip selected' : 'chip'}
              type="button"
              key={name}
              onClick={() => onFilter(name)}
            >
              {name === 'All' ? 'All products' : name}
            </button>
          ))}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Offers({ onExplore }) {
  return (
    <section className="section" id="offers">
      <div className="wrap">
        <div className="offer">
          <div className="offer-copy">
            <div className="eyebrow">A little something extra</div>
            <h2>Offers worth discovering.</h2>
            <p>
              Find seasonal highlights, curated bundles and special prices. Live promotions will appear here once your catalogue and pricing are connected.
            </p>
            <button className="btn goldbtn" type="button" onClick={onExplore}>
              Explore offers&nbsp; →
            </button>
          </div>
          <div className="offer-art" aria-hidden="true">
            ✦<span>%</span>✦
          </div>
        </div>
      </div>
    </section>
  )
}

export function ImportExport({ onEnquire }) {
  return (
    <section className="section soft" id="import-export">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">International trade</div>
            <h2>Import & Export</h2>
            <p>Connecting suppliers, products and business partners across India, Sweden and Europe.</p>
          </div>
        </div>
        <div className="categories">
          {tradeCards.map((card) => (
            <article className="category" key={card.title}>
              <span className="cat-icon">{card.icon}</span>
              <strong>{card.title}</strong>
              <small>{card.text}</small>
            </article>
          ))}
        </div>
        <div className="section-action">
          <button className="btn primary" type="button" onClick={onEnquire}>
            Discuss an import/export enquiry →
          </button>
        </div>
      </div>
    </section>
  )
}

export function Wholesale({ onQuote }) {
  return (
    <section className="section" id="wholesale">
      <div className="wrap">
        <div className="business">
          <div>
            <div className="eyebrow">For retailers, resellers & partners</div>
            <h2>Wholesale and business orders</h2>
            <p>
              Connect with MAZZEV to discuss bulk quantities, product availability, quotations, distribution and potential retail partnerships.
            </p>
            <div className="business-points">
              <span>Bulk-order enquiries</span>
              <span>Business buyer pathway</span>
              <span>Partner support</span>
            </div>
          </div>
          <div>
            <button className="btn goldbtn" type="button" onClick={onQuote}>
              Request a business quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutFeatureIcon({ name }) {
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'megaphone') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...stroke} d="M12 21h5l13-7v20L17 27h-5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
        <path {...stroke} d="M17 27v7a3 3 0 0 0 3 3h1" />
        <circle {...stroke} cx="35" cy="18" r="3.2" />
        <path {...stroke} d="M35 11.5v2.2M35 22.3v2.2M40 18h2.2M27.8 18H30" />
      </svg>
    )
  }

  if (name === 'draft') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...stroke} d="M16 34 33 17l4 4L20 38H16v-4z" />
        <path {...stroke} d="M30 20l3.5 3.5" />
        <path {...stroke} d="M12 12l9 15h-7l-2-6z" />
      </svg>
    )
  }

  if (name === 'quality') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect {...stroke} x="13" y="10" width="22" height="28" rx="2" />
        <path {...stroke} d="M19 22h12M19 28h12M19 34h8" />
        <path {...stroke} d="M28 15.5 30 17.5 34 13.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle {...stroke} cx="22" cy="22" r="8" />
      <path {...stroke} d="m27.5 27.5 8 8" />
      <path {...stroke} d="M31 13.5 35 15.5 33.5 19.5 29.5 18z" />
    </svg>
  )
}

export function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-banner">
        <div className="wrap about-banner-inner">
          <h1>About Us</h1>
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <a href="#home">Home</a>
            <span aria-hidden="true"> / </span>
            <span className="current">About Us</span>
          </nav>
        </div>
      </div>

      <div className="about-body">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <h2>{aboutStory.title}</h2>
              {aboutStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="about-media">
              <img src={aboutStory.image} alt={aboutStory.imageAlt} loading="lazy" />
            </div>
          </div>

          <div className="about-features">
            {aboutCards.map((card) => (
              <article className="about-feature" key={card.title}>
                <span className="about-feature-icon" aria-hidden="true">
                  <AboutFeatureIcon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Account({ onLogin }) {
  return (
    <section className="section" id="account">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Your MAZZEV account</div>
            <h2>Login / My Account</h2>
            <p>Account access is shown as a preview; secure authentication will be connected during development.</p>
          </div>
        </div>
        <div className="business">
          <div>
            <h2>Shopping made easier</h2>
            <p>
              In the full version, customers can manage addresses, saved items and order history. Approved business accounts can access relevant wholesale services.
            </p>
          </div>
          <div>
            <button className="btn goldbtn" type="button" onClick={onLogin}>
              Login or register →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Support({ onHelp }) {
  return (
    <section className="section soft" id="support">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Customer Care & Inquiries</div>
            <h2>Here to help</h2>
            <p>Clear answers, quick assistance and direct contact channels across Europe and India.</p>
          </div>
        </div>

        {/* Official Direct Contact & Social IDs Card */}
        <div className="contact-id-grid">
          <div className="contact-id-card insta-card">
            <div className="contact-id-icon insta-badge">
              <InstagramIcon size={24} />
            </div>
            <div className="contact-id-info">
              <span className="contact-label">Instagram Official</span>
              <strong className="contact-value">{contactInfo.instagram.id}</strong>
              <p>Follow our daily edits, product arrivals & stories</p>
            </div>
            <a
              href={contactInfo.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn"
            >
              Open Instagram ↗
            </a>
          </div>

          <div className="contact-id-card fb-card">
            <div className="contact-id-icon fb-badge">
              <FacebookIcon size={24} />
            </div>
            <div className="contact-id-info">
              <span className="contact-label">Facebook Page</span>
              <strong className="contact-value">{contactInfo.facebook.id}</strong>
              <p>Connect with our verified trade & retail community</p>
            </div>
            <a
              href={contactInfo.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn"
            >
              Open Facebook ↗
            </a>
          </div>

          <div className="contact-id-card whatsapp-card">
            <div className="contact-id-icon wa-badge">
              <WhatsAppIcon size={24} />
            </div>
            <div className="contact-id-info">
              <span className="contact-label">WhatsApp Quick Support</span>
              <strong className="contact-value">{contactInfo.whatsapp.display}</strong>
              <p>Instant queries for wholesale & consumer orders</p>
            </div>
            <a
              href={contactInfo.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn"
            >
              Message Us ↗
            </a>
          </div>

          <div className="contact-id-card email-card">
            <div className="contact-id-icon mail-badge">
              <MailIcon size={24} />
            </div>
            <div className="contact-id-info">
              <span className="contact-label">Email Support Desk</span>
              <strong className="contact-value">{contactInfo.email.address}</strong>
              <p>Replies within 24 hours on business days</p>
            </div>
            <a
              href={contactInfo.email.href}
              className="contact-action-btn"
            >
              Send Email ↗
            </a>
          </div>
        </div>

        <div className="categories" style={{ marginTop: '24px' }}>
          {supportTopics.map((topic) => (
            <button className="category" type="button" key={topic.title} onClick={() => onHelp(topic.title)}>
              <span className="cat-icon">{topic.icon}</span>
              <strong>{topic.title}</strong>
              <small>{topic.text}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

const year = new Date().getFullYear()

export function Footer({ onInfo }) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footgrid">
          <div className="footbrand">
            <a className="foot-logo" href="#home" aria-label="MAZZEV home">
              MAZZEV
            </a>
            <p>
              We are an international trading brand for everyday essentials, food, wellness and lifestyle.
              Our aim is to provide thoughtfully selected products with clear information and dependable service.
            </p>
            <div className="foot-contact">
              <p>
                <strong>Address:</strong> {contactInfo.address}
              </p>
              <p>
                <strong>Email:</strong> <a href={contactInfo.email.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><MailIcon size={14} /> {contactInfo.email.address}</a>
              </p>
              <p>
                <strong>Hotline:</strong> <a href={contactInfo.phone.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><PhoneIcon size={14} /> {contactInfo.phone.display}</a>
              </p>
            </div>

            {/* Social Channels in Footer */}
            <div className="foot-socials" aria-label="Social media">
              <a
                href={contactInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Instagram: ${contactInfo.instagram.id}`}
                aria-label="Instagram"
                className="foot-social-btn"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={contactInfo.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Facebook: ${contactInfo.facebook.id}`}
                aria-label="Facebook"
                className="foot-social-btn"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={contactInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp: ${contactInfo.whatsapp.display}`}
                aria-label="WhatsApp"
                className="foot-social-btn"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href="#support"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="foot-social-btn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          <div className="footcol">
            <strong>Information</strong>
            <button type="button" onClick={() => onInfo('terms')}>
              Terms & Conditions
            </button>
            <button type="button" onClick={() => onInfo('privacy')}>
              Privacy Policy
            </button>
          </div>

          <div className="footcol">
            <strong>Customer Service</strong>
            <button type="button" onClick={() => onInfo('contact')}>
              Frequently & Questions
            </button>
            <button type="button" onClick={() => onInfo('delivery')}>
              Shipping & Delivery
            </button>
            <button type="button" onClick={() => onInfo('contact')}>
              Direct Contact & Social IDs
            </button>
          </div>

          <div className="footcol foot-newsletter">
            <strong>Sign Up To Newsletter</strong>
            <p>Subscribe to get the latest product drops, offers and wholesale updates from Mazzev.</p>
            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault()
                onInfo('contact')
              }}
            >
              <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="copyright">
          <span>Copyright © {year} Mazzev. All Rights Reserved. · Rooted in India, delivering to Europe.</span>
          <button className="back-to-top" type="button" onClick={scrollTop} aria-label="Back to top">
            ˄
          </button>
        </div>
      </div>
    </footer>
  )
}
