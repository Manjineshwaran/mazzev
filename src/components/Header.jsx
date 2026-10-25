import Brand from './Brand'
import { navItems } from '../data/catalog'

export default function Header({
  query,
  onQuery,
  cartCount,
  activeNav,
  onNavigate,
  onLogin,
  onCart,
}) {
  return (
    <>
      <div className="topbar">Thoughtfully selected products · Serving customers and businesses across Europe</div>
      <header className="head">
        <div className="wrap">
          <div className="headrow">
            <Brand />
            <div className="search">
              <input
                id="search"
                type="search"
                placeholder="Search products and categories…"
                aria-label="Search products"
                value={query}
                onChange={(event) => onQuery(event.target.value)}
              />
            </div>
            <div className="head-actions">
              <button className="iconbtn" type="button" onClick={onLogin}>
                ♙ <span className="label">Login</span>
              </button>
              <button className="iconbtn" type="button" onClick={onCart}>
                ♧ <span className="label">Cart</span>
                <span className="cart-count">{cartCount}</span>
              </button>
            </div>
          </div>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeNav === item.id ? 'active' : undefined}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button type="button" onClick={onLogin}>Login / My Account</button>
          </nav>
        </div>
      </header>
    </>
  )
}
