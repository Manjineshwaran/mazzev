import './MazzevLogisticsMap.css'

export default function MazzevLogisticsMap() {
  return (
    <section className="mazzev-logistics-section" aria-label="Mazzev global logistics map">
      <div className="mazzev-logistics-container">
        <div className="mazzev-logistics-card">
          <img
            className="mazzev-logistics-map"
            src="/images/mazzev-world-logistics-map.png"
            alt="Mazzev world logistics map showing export routes to other countries"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
