import { useMemo, useState } from 'react'
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  WhatsAppIcon,
} from './components/Icons'

const PHONE = '0764393211'
const PHONE_INTL = '+46764393211'
const EMAIL = 'info@mazzev.com'
const WEB3FORMS_ACCESS_KEY = '7d810e2d-be5e-4358-a3bf-11b33cbbde80'
const INSTAGRAM_URL = 'https://instagram.com/mazzev.official'
const INSTAGRAM_ID = 'mazzev.official'
const FACEBOOK_URL = 'https://facebook.com/mazzevofficial'
const FACEBOOK_ID = 'facebook.com/mazzevofficial'
const WHATSAPP_URL = 'https://wa.me/46764393211'

const CATEGORIES = [
  { id: 'all', label: 'All products' },
  { id: 'oils', label: 'Cold-pressed oils' },
  { id: 'rice', label: 'Rice' },
  { id: 'bars', label: 'Chikki bars' },
  { id: 'balls', label: 'Chikki balls' },
  { id: 'rounds', label: 'Chikki rounds' },
  { id: 'candy', label: 'Sliced candy' },
  { id: 'jars', label: 'Jars' },
  { id: 'textiles', label: 'Textiles' },
  { id: 'kids', label: 'Kids' },
]

const PRODUCTS = [
  { cat: 'oils', name: 'Sesame oil', desc: 'For cooking, massage and daily wellness.' },
  { cat: 'oils', name: 'Groundnut oil', desc: 'An everyday cooking oil for frying and sautéing.' },
  { cat: 'oils', name: 'Coconut oil', desc: 'For cooking, hair and skin care.' },
  { cat: 'rice', name: 'Rice', desc: 'A staple Indian rice for everyday meals.' },
  { cat: 'bars', name: 'Small peanut bar', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Regular peanut bar', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Regular crushed peanut bar', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Large peanut bar', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Large crushed peanut bar', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Peanut family pack', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Regular peanut bar (20 pcs)', desc: 'Minimum order 10 kg.' },
  { cat: 'bars', name: 'Small peanut bar pack (20 pcs)', desc: 'Minimum order 10 kg.' },
  { cat: 'balls', name: 'Peanut balls pack', desc: 'Minimum order 10 kg.' },
  { cat: 'balls', name: 'White sesame balls pack', desc: 'Minimum order 10 kg.' },
  { cat: 'balls', name: 'Black sesame balls pack', desc: 'Minimum order 10 kg.' },
  { cat: 'balls', name: 'Puffed rice balls pack', desc: 'Minimum order 10 kg.' },
  { cat: 'balls', name: 'Roasted gram ball pack', desc: 'Minimum order 10 kg.' },
  { cat: 'rounds', name: 'Peanut round', desc: 'Minimum order 10 kg.' },
  { cat: 'rounds', name: 'White sesame round', desc: 'Minimum order 10 kg.' },
  { cat: 'rounds', name: 'Black sesame round', desc: 'Minimum order 10 kg.' },
  { cat: 'candy', name: 'Peanut sliced candy pack', desc: 'Minimum order 10 kg.' },
  { cat: 'candy', name: 'Crushed peanut sliced candy pack', desc: 'Minimum order 10 kg.' },
  { cat: 'candy', name: 'Peanut sliced candy box', desc: 'Minimum order 10 kg.' },
  { cat: 'candy', name: 'White sesame sliced candy box', desc: 'Minimum order 10 kg.' },
  { cat: 'candy', name: 'Black sesame sliced candy box', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Peanut balls PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'White sesame balls PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Black sesame balls PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Roasted gram balls PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Peanut sliced candy PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Peanut candy jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Crushed peanut candy PET jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Small peanut bar jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Small crushed peanut bar jar', desc: 'Minimum order 10 kg.' },
  { cat: 'jars', name: 'Small black sesame bar jar', desc: 'Minimum order 10 kg.' },
  { cat: 'textiles', name: 'Cotton mesh bags', desc: 'Reusable cotton mesh bags for shopping and storage.' },
  { cat: 'kids', name: 'Wooden teether rattle', desc: 'A wooden teether and rattle toy that makes a gentle sound.' },
]

const WHY = [
  ['Rooted in India', 'Products come from makers we know and trust.'],
  ['Chosen with care', 'A small range, picked for quality and honest sourcing.'],
  ['Clear information', 'You see what a product is and where it comes from.'],
  ['Made for Europe', 'Imported and delivered to customers across Europe.'],
]

const STEPS = [
  ['Chosen in India', 'We work with a trusted sourcing partner and select each product by hand.'],
  ['Shipped to Europe', 'Goods are imported and checked before they reach you.'],
  ['Delivered to you', 'You get quality products at a fair price, with clear information.'],
]

const FAQ = [
  [
    'How do I order?',
    `Send an email to ${EMAIL} or call ${PHONE} with the products you want. You can also reach us via Instagram (@${INSTAGRAM_ID}) or WhatsApp. The minimum order for snacks is 10 kg. We reply with details and delivery information.`,
  ],
  ['Where do the products come from?', 'They come from makers in India, sourced through a trusted partner.'],
  [
    'What products do you sell?',
    'Cold-pressed oils, rice, snacks, cotton textiles and wooden toys for kids. We add more as the range grows.',
  ],
]

const getCatLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? ''

function Product({ cat, name, desc }) {
  return (
    <div className="item">
      <div className="pic">{name}</div>
      <div className="t">
        <span className="cat">{getCatLabel(cat)}</span>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p className="item-min">Minimum order: 10 kg</p>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')
  const [enquiryModal, setEnquiryModal] = useState(null)
  const [enquiryStatus, setEnquiryStatus] = useState('idle')
  const [enquiryError, setEnquiryError] = useState('')

  const shown = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = active === 'all' || p.cat === active
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()) ||
        getCatLabel(p.cat).toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [active, search])

  function openEnquiry(item) {
    setEnquiryStatus('idle')
    setEnquiryError('')
    setEnquiryModal(item)
  }

  function closeEnquiry() {
    setEnquiryModal(null)
    setEnquiryStatus('idle')
    setEnquiryError('')
  }

  async function handleSendEnquiry(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const contact = String(data.get('contact') || '').trim()
    const quantity = String(data.get('quantity') || '').trim()
    const message = String(data.get('message') || '').trim()
    const product =
      String(data.get('product') || '').trim() || enquiryModal?.name || 'Product'
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)

    setEnquiryStatus('sending')
    setEnquiryError('')

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Mazzev enquiry — ${product}`,
      from_name: 'Mazzev website',
      name,
      product,
      quantity: quantity || 'Not specified',
      contact,
      message,
      botcheck: false,
    }

    if (emailLike) {
      payload.email = contact
      payload.replyto = contact
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      const apiMessage = result.message || result.body?.message
      if (!response.ok || result.success !== true) {
        throw new Error(apiMessage || 'The enquiry could not be sent.')
      }
      setEnquiryStatus('sent')
    } catch (error) {
      setEnquiryStatus('error')
      setEnquiryError(
        error.message || `The enquiry could not be sent. Please email ${EMAIL}.`,
      )
    }
  }

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR - CONTINUOUS LOOP RUNNER */}
      <div className="bar" aria-label="Announcements & Quick Contacts">
        <div className="bar-marquee-track">
          {[1, 2].map((loopIdx) => (
            <div
              key={loopIdx}
              className="bar-marquee-content"
              aria-hidden={loopIdx === 2 ? 'true' : undefined}
            >
              <span className="bar-marquee-item">
                <b>Wellness rooted in India</b>
              </span>
              <span className="bar-dot-sep">✦</span>

              <a className="bar-marquee-item" href={`tel:${PHONE_INTL}`}>
                <PhoneIcon size={13} /> Orders &amp; Enquiries: <b>{PHONE}</b>
              </a>
              <span className="bar-dot-sep">✦</span>

              <a className="bar-marquee-item" href={`mailto:${EMAIL}`}>
                <MailIcon size={13} /> <b>{EMAIL}</b>
              </a>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Direct Wholesale &amp; Retail Sourcing
              </span>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Delivering across Europe
              </span>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Pure Cold-Pressed Oils · Traditional Snacks · Chikki · Handloom Textiles
              </span>
              <span className="bar-dot-sep">✦</span>

              <a
                className="bar-marquee-item"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={13} /> WhatsApp Orders: <b>{PHONE}</b>
              </a>
              <span className="bar-dot-sep">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. HEADER */}
      <header>
        <div className="wrap">
          <a className="brand" href="#top" id="top">
            <img src="/logo-mark.png" alt="Mazzev Logo" width="139" height="217" />
            Mazzev
          </a>
          <nav aria-label="Main">
            <a href="#top">Home</a>
            <a href="#shop">Shop</a>
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault()
                openEnquiry({
                  cat: 'general',
                  name: 'General enquiry',
                  desc: 'Tell us which products you are interested in.',
                  subject: 'General enquiry',
                })
              }}
            >
              Enquiry
            </a>
            <a href="#why">About us</a>
          </nav>
        </div>
      </header>

      {/* 3. HERO */}
      <div className="hero">
        <div className="wrap">
          <div>
            <h1>Everyday goods with Indian roots, made for life in Europe.</h1>
            <p>
              A modern general merchandise brand with Indian roots and a European outlook. Food,
              textiles and kids&apos; toys from trusted makers in India.
            </p>
            <a className="btn" href="#shop">
              Shop our range
            </a>
          </div>
        </div>
      </div>

      {/* 4. SHOP */}
      <section id="shop">
        <div className="wrap">
          <div className="shop-header">
            <div>
              <h2>Shop</h2>
              <p className="lead">
                Oils, rice, snacks, cotton textiles and wooden toys for little ones. Snacks are sold
                in minimum orders of 10 kg. Send us a message to order or to ask for details.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="shop-search-wrap">
              <SearchIcon size={16} className="shop-search-icon" />
              <input
                type="search"
                className="shop-search-input"
                placeholder="Search products (e.g. sesame, peanut, oil, cotton)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
              />
              {search && (
                <button
                  type="button"
                  className="shop-search-clear"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="shop">
            <aside aria-label="Categories">
              <h3 className="ct">Categories</h3>
              <ul className="cats">
                {CATEGORIES.map((c) => {
                  const count =
                    c.id === 'all'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.cat === c.id).length
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        aria-pressed={active === c.id}
                        onClick={() => setActive(c.id)}
                      >
                        <span>{c.label}</span>
                        <span className="cat-count">{count}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </aside>

            <div className="shop-content">
              <div className="count">
                Showing {shown.length} {shown.length === 1 ? 'product' : 'products'}
                {active !== 'all' && ` in ${getCatLabel(active)}`}
                {search.trim() && ` matching "${search}"`}
              </div>

              {shown.length === 0 ? (
                <div className="empty-shop">
                  <p>No products found matching &ldquo;{search}&rdquo;.</p>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      setSearch('')
                      setActive('all')
                    }}
                  >
                    View all products
                  </button>
                </div>
              ) : (
                <div className="grid">
                  {shown.map((p) => (
                    <Product
                      key={p.name}
                      {...p}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE MAZZEV */}
      <section id="why" className="alt">
        <div className="wrap">
          <h2>Why choose Mazzev</h2>
          <p className="lead">Simple promises we can keep.</p>
          <div className="why">
            {WHY.map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <h2>How it works</h2>
          <p className="lead">Short, direct, and easy to follow.</p>
          <ol className="steps">
            {STEPS.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. QUESTIONS / FAQ */}
      <section id="faq" className="alt">
        <div className="wrap">
          <h2>Questions</h2>
          <p className="lead">If your question isn&apos;t here, contact us directly.</p>
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. SOCIAL MEDIA CONTENT */}
      <section id="social" className="social-section">
        <div className="wrap">
          <div className="section-head text-center">
            <span className="section-badge">Join Our Community</span>
            <h2>Follow Us on Social Media</h2>
            <p className="lead">
              Discover authentic Indian wellness stories, new batch arrivals, behind-the-scenes
              sourcing, and customer updates on our official social channels.
            </p>
          </div>

          <div className="social-cards-grid">
            {/* Instagram Card */}
            <div className="social-card social-card-insta">
              <div className="social-card-top">
                <div className="social-card-icon-wrap insta-bg">
                  <InstagramIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">{INSTAGRAM_ID}</span>
                </div>
              </div>
              <p className="social-card-desc">
                Follow our daily stories, new product batches, traditional recipes, and visual edits
                straight from Indian makers.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn insta-btn"
              >
                <InstagramIcon size={16} />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="social-card social-card-fb">
              <div className="social-card-top">
                <div className="social-card-icon-wrap fb-bg">
                  <FacebookIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">Facebook</span>
                  <span className="social-handle">{FACEBOOK_ID}</span>
                </div>
              </div>
              <p className="social-card-desc">
                Connect with our European trade community, read wholesale announcements, customer
                reviews, and brand updates.
              </p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn fb-btn"
              >
                <FacebookIcon size={16} />
                <span>Visit Facebook Page</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="social-card social-card-wa">
              <div className="social-card-top">
                <div className="social-card-icon-wrap wa-bg">
                  <WhatsAppIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">WhatsApp</span>
                  <span className="social-handle">{PHONE}</span>
                </div>
              </div>
              <p className="social-card-desc">
                Message our team directly for instant quotes, wholesale orders, custom product
                requests, and quick questions.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn wa-btn"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER & CONTACT */}
      <footer id="contact">
        <div className="wrap">
          <div className="cols">
            <div>
              <h3>Mazzev</h3>
              <p>Wellness rooted in India.</p>
              <p>
                A modern general merchandise brand with Indian roots and a European outlook.
              </p>
              <p>Direct wholesale sourcing and cross-border delivery across Europe.</p>
            </div>

            <div>
              <h3>Contact us</h3>
              <a className="big" href={`tel:${PHONE_INTL}`}>
                {PHONE}
              </a>
              <a className="big" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>

              {/* Direct Social and Contact IDs */}
              <div className="foot-social-ids">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-id-link"
                >
                  <InstagramIcon size={16} />
                  <span>
                    Instagram: <strong>{INSTAGRAM_ID}</strong>
                  </span>
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-id-link"
                >
                  <FacebookIcon size={16} />
                  <span>
                    Facebook: <strong>{FACEBOOK_ID}</strong>
                  </span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-id-link"
                >
                  <WhatsAppIcon size={16} />
                  <span>
                    WhatsApp: <strong>{PHONE}</strong>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3>Quick links</h3>
              <a href="#shop">Shop</a>
              <a href="#why">Why Mazzev</a>
              <a href="#how">How it works</a>
              <a href="#faq">Questions</a>
              <a href="#social">Social Media</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram ({INSTAGRAM_ID}) ↗
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Facebook Page ↗
              </a>
            </div>
          </div>

          <div className="copy">
            © 2026 Mazzev. All rights reserved. · Rooted in India, delivering across Europe.
          </div>
        </div>
      </footer>

      {/* 9. PRODUCT ENQUIRY MODAL */}
      {enquiryModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEnquiry()
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-enquiry-title"
        >
          <div className="modal-card">
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeEnquiry}
              aria-label="Close Enquiry Dialog"
            >
              <CloseIcon size={20} />
            </button>

            <span className="modal-cat">{getCatLabel(enquiryModal.cat)}</span>
            <h2 id="modal-enquiry-title">{enquiryModal.name}</h2>
            <p className="modal-desc">{enquiryModal.desc}</p>

            {enquiryStatus === 'sent' ? (
              <div className="modal-success">
                <strong>✓ Enquiry Received!</strong>
                <p>
                  Thank you. Your enquiry was sent to {EMAIL}. We will get back to you
                  shortly with pricing and delivery details.
                </p>
              </div>
            ) : (
              <>
                <form className="modal-form" onSubmit={handleSendEnquiry}>
                  <label htmlFor="enquiry-name">Your Name</label>
                  <input id="enquiry-name" name="name" required placeholder="Name or Company" />

                  <label htmlFor="enquiry-email">Email or Phone</label>
                  <input
                    id="enquiry-email"
                    name="contact"
                    required
                    placeholder="email@example.com or phone number"
                  />

                  <label htmlFor="enquiry-product">Product</label>
                  <select id="enquiry-product" name="product" required defaultValue="">
                    <option value="" disabled>
                      Select a product
                    </option>
                    {PRODUCTS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other / not listed">Other / not listed</option>
                  </select>

                  <label htmlFor="enquiry-quantity">Estimated Quantity</label>
                  <input
                    id="enquiry-quantity"
                    name="quantity"
                    placeholder="e.g. 10 kg, 20 kg, sample pack"
                  />

                  <label htmlFor="enquiry-msg">Message / Destination (optional)</label>
                  <textarea
                    id="enquiry-msg"
                    name="message"
                    rows="3"
                    defaultValue={`I am interested in ordering ${enquiryModal.name}. Please share pricing and shipping details.`}
                  />

                  {enquiryStatus === 'error' && <p className="modal-error">{enquiryError}</p>}

                  <button className="btn full-btn" type="submit" disabled={enquiryStatus === 'sending'}>
                    {enquiryStatus === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
