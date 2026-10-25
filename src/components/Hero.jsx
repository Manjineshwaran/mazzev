export default function Hero({ onExplore, onWholesale }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Rooted in India · Made for modern living</div>
          <h1>Good finds.<br />Thoughtful living.</h1>
          <p>
            Discover a growing collection of everyday essentials, food, wellness and lifestyle products — thoughtfully selected for customers and businesses across Europe.
          </p>
          <div className="actions">
            <button className="btn primary" type="button" onClick={onExplore}>
              Explore products&nbsp; →
            </button>
            <button className="btn secondary" type="button" onClick={onWholesale}>
              Shop for business
            </button>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Illustrative product arrangement">
          <div className="sun" />
          <div className="art-card">
            <div className="art-top">
              <span>THE MAZZEV EDIT</span>
              <img className="art-logo" alt="" src="/mazzev-logo.png" />
            </div>
            <div className="product-art">
              <div className="jar" />
              <div className="pouch">M.</div>
            </div>
            <div className="art-bottom">
              <div>
                <strong>Everyday, elevated.</strong>
                <br />
                <small>A world of considered choices</small>
              </div>
              <span className="seal">DISCOVER MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
