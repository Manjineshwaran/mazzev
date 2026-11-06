import { useState } from "react";

const PHONE = "0764393211";
const EMAIL = "info@mazzev.com";

const CATEGORIES = [
  {
    "id": "all",
    "label": "All products"
  },
  {
    "id": "oils",
    "label": "Cold-pressed oils"
  },
  {
    "id": "rice",
    "label": "Rice"
  },
  {
    "id": "bars",
    "label": "Chikki bars"
  },
  {
    "id": "balls",
    "label": "Chikki balls"
  },
  {
    "id": "rounds",
    "label": "Chikki rounds"
  },
  {
    "id": "candy",
    "label": "Sliced candy"
  },
  {
    "id": "jars",
    "label": "Jars"
  },
  {
    "id": "textiles",
    "label": "Textiles"
  },
  {
    "id": "kids",
    "label": "Kids"
  }
];

const PRODUCTS = [
  {
    "cat": "oils",
    "name": "Sesame oil",
    "desc": "For cooking, massage and daily wellness."
  },
  {
    "cat": "oils",
    "name": "Groundnut oil",
    "desc": "An everyday cooking oil for frying and sautéing."
  },
  {
    "cat": "oils",
    "name": "Coconut oil",
    "desc": "For cooking, hair and skin care."
  },
  {
    "cat": "rice",
    "name": "Rice",
    "desc": "A staple Indian rice for everyday meals."
  },
  {
    "cat": "bars",
    "name": "Small peanut bar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Regular peanut bar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Regular crushed peanut bar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Large peanut bar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Large crushed peanut bar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Peanut family pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Regular peanut bar (20 pcs)",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "bars",
    "name": "Small peanut bar pack (20 pcs)",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "balls",
    "name": "Peanut balls pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "balls",
    "name": "White sesame balls pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "balls",
    "name": "Black sesame balls pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "balls",
    "name": "Puffed rice balls pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "balls",
    "name": "Roasted gram ball pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "rounds",
    "name": "Peanut round",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "rounds",
    "name": "White sesame round",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "rounds",
    "name": "Black sesame round",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "candy",
    "name": "Peanut sliced candy pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "candy",
    "name": "Crushed peanut sliced candy pack",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "candy",
    "name": "Peanut sliced candy box",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "candy",
    "name": "White sesame sliced candy box",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "candy",
    "name": "Black sesame sliced candy box",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Peanut balls PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "White sesame balls PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Black sesame balls PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Roasted gram balls PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Peanut sliced candy PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Peanut candy jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Crushed peanut candy PET jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Small peanut bar jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Small crushed peanut bar jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "jars",
    "name": "Small black sesame bar jar",
    "desc": "Minimum order 10 kg."
  },
  {
    "cat": "textiles",
    "name": "Cotton mesh bags",
    "desc": "Reusable cotton mesh bags for shopping and storage."
  },
  {
    "cat": "kids",
    "name": "Wooden teether rattle",
    "desc": "A wooden teether and rattle toy that makes a gentle sound."
  }
];

const WHY = [
  ["Rooted in India", "Products come from makers we know and trust."],
  ["Chosen with care", "A small range, picked for quality and honest sourcing."],
  ["Clear information", "You see what a product is and where it comes from."],
  ["Made for Europe", "Imported and delivered to customers across Europe."],
];

const STEPS = [
  ["Chosen in India", "We work with a trusted sourcing partner and select each product by hand."],
  ["Shipped to Europe", "Goods are imported and checked before they reach you."],
  ["Delivered to you", "You get quality products at a fair price, with clear information."],
];

const FAQ = [
  ["How do I order?", `Send an email to ${EMAIL} or call ${PHONE} with the products you want. The minimum order for snacks is 10 kg. We reply with details and delivery information.`],
  ["Where do the products come from?", "They come from makers in India, sourced through a trusted partner."],
  ["What products do you sell?", "Cold-pressed oils, rice, snacks, cotton textiles and wooden toys for kids. We add more as the range grows."],
];

const label = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? "";

function Product({ cat, name, desc }) {
  const subject = encodeURIComponent(`${name} enquiry`);
  return (
    <div className="item">
      <div className="pic">{name}</div>
      <div className="t">
        <span className="cat">{label(cat)}</span>
        <h3>{name}</h3>
        <p>{desc}</p>
        <a className="btn" href={`mailto:${EMAIL}?subject=${subject}`}>Enquire</a>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <>
      <div className="bar"><b>Wellness rooted in India</b>. Questions or orders: {PHONE}</div>

      <header>
        <div className="wrap">
          <a className="brand" href="#top" id="top">
            <img src="/logo-mark.png" alt="" width="139" height="217" />
            Mazzev
          </a>
          <nav aria-label="Main">
            <a href="#shop">Shop</a>
            <a href="#why">Why Mazzev</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="hero">
        <div className="wrap">
          <div>
            <h1>Everyday goods with Indian roots, made for life in Europe.</h1>
            <p>A modern general merchandise brand with Indian roots and a European outlook. Food, textiles and kids' toys from trusted makers in India.</p>
            <a className="btn" href="#shop">Shop our range</a>
          </div>
        </div>
      </div>

      <section id="shop">
        <div className="wrap">
          <h2>Shop</h2>
          <p className="lead">Oils, rice, snacks, cotton textiles and wooden toys for little ones. Snacks are sold in minimum orders of 10 kg. Send us a message to order or to ask for details.</p>
          <div className="shop">
            <aside aria-label="Categories">
              <h3 className="ct">Categories</h3>
              <ul className="cats">
                {CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <button type="button" aria-pressed={active === c.id} onClick={() => setActive(c.id)}>
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="grid">
              {shown.map((p) => <Product key={p.name} {...p} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="alt">
        <div className="wrap">
          <h2>Why choose Mazzev</h2>
          <p className="lead">Simple promises we can keep.</p>
          <div className="why">
            {WHY.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <h2>How it works</h2>
          <p className="lead">Short, direct, and easy to follow.</p>
          <ol className="steps">
            {STEPS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="faq" className="alt">
        <div className="wrap">
          <h2>Questions</h2>
          <p className="lead">If your question isn't here, contact us.</p>
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <div className="cols">
            <div>
              <h3>Mazzev</h3>
              <p>Wellness rooted in India.</p>
              <p>A modern general merchandise brand with Indian roots and a European outlook.</p>
            </div>
            <div>
              <h3>Contact us</h3>
              <a className="big" href={`tel:${PHONE}`}>{PHONE}</a>
              <a className="big" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div>
              <h3>Quick links</h3>
              <a href="#shop">Shop</a>
              <a href="#why">Why Mazzev</a>
              <a href="#how">How it works</a>
              <a href="#faq">Questions</a>
            </div>
          </div>
          <div className="copy">© 2026 Mazzev. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
