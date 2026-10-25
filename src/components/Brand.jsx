export default function Brand({ alt = 'MAZZEV logo' }) {
  return (
    <a className="brand" href="#home" aria-label="MAZZEV home">
      <img alt={alt} src="/mazzev-logo.png" />
      <span>
        <strong>MAZZEV</strong>
        <small>Wellness rooted in India</small>
      </span>
    </a>
  )
}
