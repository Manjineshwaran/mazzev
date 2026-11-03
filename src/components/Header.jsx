import Brand from './Brand'
import { filters, navItems } from '../data/catalog'

export default function Header({
  query,
  onQuery,
  cartCount,
  activeNav,
  onNavigate,
  onLogin,
  onCart,
  filter = 'All',
  onFilter,
}) {
  const mid = Math.ceil(navItems.length / 2)
  const navTop = navItems.slice(0, mid)
  const navBottom = navItems.slice(mid)

  function submitSearch(event) {
    event.preventDefault()
    onNavigate('products')
  }

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="topbar-social" aria-label="Social links">
            <a href="#support" aria-label="Facebook">f</a>
            <a href="#support" aria-label="X">𝕏</a>
            <a href="#support" aria-label="Instagram">◎</a>
            <a href="#support" aria-label="LinkedIn">in</a>
            <a href="#support" aria-label="RSS">Rss</a>
          </div>
          <div className="topbar-lang">
            <span className="flag" aria-hidden="true">🇬🇧</span>
            English
            <span aria-hidden="true">▾</span>
          </div>
        </div>
      </div>

      <header className="head">
        <div className="wrap">
          <div className="headrow">
            <Brand />

            <div className="head-nav-block">
              <nav className="nav nav-top" aria-label="Primary navigation">
                {navTop.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={activeNav === item.id ? 'active' : undefined}
                    onClick={() => onNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <nav className="nav nav-bottom" aria-label="Secondary navigation">
                {navBottom.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={activeNav === item.id ? 'active' : undefined}
                    onClick={() => onNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
                <button type="button" onClick={onLogin}>
                  Login / My Account
                </button>
              </nav>
            </div>

            <div className="head-actions">
              <button className="login-link" type="button" onClick={onLogin}>
                LOGIN /
              </button>
              <button className="iconbtn wishlist" type="button" aria-label="Wishlist">
                ♡
                <span className="cart-count">0</span>
              </button>
              <button className="iconbtn" type="button" onClick={onCart} aria-label="Cart">
                🛒
                <span className="cart-count">{cartCount}</span>
              </button>
            </div>
          </div>

          <div className="searchrow">
            <div className="categories-wrap">
              <label className="categories-btn" htmlFor="header-category">
                <span className="burger" aria-hidden="true">☰</span>
                All Categories
                <span aria-hidden="true">▾</span>
              </label>
              <select
                id="header-category"
                value={filter}
                onChange={(event) => {
                  onFilter?.(event.target.value)
                  onNavigate('products')
                }}
                aria-label="All categories"
              >
                {filters.map((name) => (
                  <option key={name} value={name}>
                    {name === 'All' ? 'All Categories' : name}
                  </option>
                ))}
              </select>
            </div>

            <form className="search" onSubmit={submitSearch}>
              <select
                className="search-scope"
                value={filter}
                onChange={(event) => onFilter?.(event.target.value)}
                aria-label="Search in category"
              >
                {filters.map((name) => (
                  <option key={name} value={name}>
                    {name === 'All' ? 'All' : name}
                  </option>
                ))}
              </select>
              <input
                id="search"
                type="search"
                placeholder="Search product..."
                aria-label="Search products"
                value={query}
                onChange={(event) => onQuery(event.target.value)}
              />
              <button className="search-btn" type="submit" aria-label="Search">
                ⌕
              </button>
            </form>

            <a className="support-chip" href="#support">
              <span className="support-phone" aria-hidden="true">☎</span>
              <span>
                <strong>Customer Support</strong>
                <small>We&apos;re here to help</small>
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
