import Brand from './Brand'
import {
  aboutCards,
  categories,
  filters,
  supportTopics,
  tradeCards,
  trustItems,
} from '../data/catalog'

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

export function About() {
  return (
    <section className="section soft" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our story</div>
            <h2>About MAZZEV</h2>
            <p>Wellness rooted in India. An international trading and commerce company with a broad product vision.</p>
          </div>
        </div>
        <div className="categories">
          {aboutCards.map((card) => (
            <article className="category" key={card.title}>
              <span className="cat-icon">{card.icon}</span>
              <strong>{card.title}</strong>
              <small>{card.text}</small>
            </article>
          ))}
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
            <h2>Here to help</h2>
            <p>Clear answers and support, from first visit to delivery.</p>
          </div>
        </div>
        <div className="categories">
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

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footgrid">
          <div className="footbrand">
            <Brand alt="" />
            <p>A modern general merchandise brand with Indian roots and a European outlook.</p>
          </div>
          <div className="footcol">
            <strong>Discover</strong>
            <a href="#products">Products & Shop</a>
            <a href="#offers">Offers</a>
            <a href="#import-export">Import & Export</a>
            <a href="#wholesale">Wholesale & business</a>
          </div>
          <div className="footcol">
            <strong>Support</strong>
            <a href="#support">Customer service</a>
            <button type="button" onClick={() => onInfo('contact')}>Contact us</button>
            <button type="button" onClick={() => onInfo('delivery')}>Delivery & returns</button>
          </div>
          <div className="footcol">
            <strong>Company</strong>
            <a href="#about">About MAZZEV</a>
            <a href="#account">Login / My Account</a>
            <button type="button" onClick={() => onInfo('privacy')}>Privacy & cookies</button>
            <button type="button" onClick={() => onInfo('terms')}>Terms & conditions</button>
          </div>
        </div>
        <div className="copyright">
          <span>© {year} MAZZEV · Prototype preview</span>
          <span>Sweden · Europe · Prices shown in SEK (illustrative)</span>
        </div>
      </div>
    </footer>
  )
}
