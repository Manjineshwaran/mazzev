import { useEffect, useRef, useState } from 'react'
import Brand from './Brand'
import {
  BagIcon,
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  HeadsetIcon,
  HeartIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  UserIcon,
  WhatsAppIcon,
} from './Icons'
import {
  contactInfo,
  filters,
  formatPrice,
  languageOptions,
  navItems,
  products,
} from '../data/catalog'

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
  const [selectedLang, setSelectedLang] = useState(languageOptions[0])
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isCatMenuOpen, setIsCatMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const langRef = useRef(null)
  const catRef = useRef(null)
  const searchRef = useRef(null)

  // Close popovers on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
      if (catRef.current && !catRef.current.contains(event.target)) {
        setIsCatMenuOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Filtered preview for live search dropdown
  const trimmedQuery = query.trim().toLowerCase()
  const liveResults = trimmedQuery
    ? products
        .filter((item) => {
          const inCat = filter === 'All' || item.cat === filter
          const text = `${item.name} ${item.cat} ${item.tag}`.toLowerCase()
          return inCat && text.includes(trimmedQuery)
        })
        .slice(0, 4)
    : []

  function submitSearch(event) {
    event.preventDefault()
    setIsSearchFocused(false)
    onNavigate('products')
  }

  function handleSelectResult(product) {
    onQuery(product.name)
    setIsSearchFocused(false)
    onNavigate('products')
  }

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <aside className="topbar" aria-label="Announcement & Contact Bar">
        <div className="wrap topbar-inner">
          {/* Left: Direct Contact IDs */}
          <div className="topbar-left">
            <a
              href={contactInfo.phone.href}
              className="topbar-contact-item"
              title="Call Customer Hotline"
            >
              <PhoneIcon size={13} />
              <span>{contactInfo.phone.display}</span>
            </a>
            <span className="topbar-sep" aria-hidden="true">|</span>
            <a
              href={contactInfo.email.href}
              className="topbar-contact-item"
              title="Email Customer Service"
            >
              <MailIcon size={13} />
              <span>{contactInfo.email.address}</span>
            </a>
          </div>

          {/* Center: Brand Value / Delivery Notice */}
          <div className="topbar-center">
            <span className="topbar-announcement">
              🌿 <strong>Rooted in India</strong> · European Distribution · Bulk B2B & Retail
            </span>
          </div>

          {/* Right: Social Contact IDs & Language Selector */}
          <div className="topbar-right">
            <div className="topbar-socials" aria-label="Official Social Channels">
              <a
                href={contactInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-social-link"
                title={`Instagram: ${contactInfo.instagram.id}`}
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
                <span className="social-handle">{contactInfo.instagram.id}</span>
              </a>

              <a
                href={contactInfo.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-social-link"
                title={`Facebook: ${contactInfo.facebook.id}`}
                aria-label="Facebook"
              >
                <FacebookIcon size={14} />
                <span className="social-handle fb-handle">Facebook</span>
              </a>

              <a
                href={contactInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-social-link whatsapp-pill"
                title={`WhatsApp: ${contactInfo.whatsapp.number}`}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={14} />
                <span className="social-handle">WhatsApp</span>
              </a>

              <a
                href="#support"
                onClick={() => onNavigate('support')}
                className="topbar-social-link"
                title="LinkedIn Page"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={14} />
              </a>
            </div>

            {/* Language & Currency Selector Dropdown */}
            <div className="topbar-lang-wrap" ref={langRef}>
              <button
                type="button"
                className="topbar-lang-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                aria-label="Select language and currency"
              >
                <span className="flag-icon" aria-hidden="true">{selectedLang.flag}</span>
                <span className="lang-text">{selectedLang.label} ({selectedLang.currency})</span>
                <ChevronDownIcon size={12} className={isLangOpen ? 'chevron open' : 'chevron'} />
              </button>

              {isLangOpen && (
                <div className="topbar-lang-dropdown" role="listbox">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      className={`lang-option ${opt.code === selectedLang.code ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLang(opt)
                        setIsLangOpen(false)
                      }}
                      role="option"
                      aria-selected={opt.code === selectedLang.code}
                    >
                      <span className="flag-icon">{opt.flag}</span>
                      <span className="lang-name">{opt.label}</span>
                      <span className="lang-curr">{opt.currency}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN HEADER (BRAND + SMART SEARCH + CONTACT BADGE + ACTIONS) */}
      <header className="head">
        <div className="wrap">
          <div className="headrow">
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label={isMobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>

            {/* Logo & Tagline */}
            <Brand />

            {/* Central Smart Search Bar with Category Filter & Live Results */}
            <div className="search-container" ref={searchRef}>
              <form className="search-form" onSubmit={submitSearch}>
                {/* Embedded Category Dropdown */}
                <div className="search-category-select">
                  <select
                    id="header-search-cat"
                    value={filter}
                    onChange={(event) => {
                      onFilter?.(event.target.value)
                      onNavigate('products')
                    }}
                    aria-label="Filter by category"
                  >
                    {filters.map((name) => (
                      <option key={name} value={name}>
                        {name === 'All' ? 'All Categories' : name}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon size={12} className="select-arrow" />
                </div>

                <div className="search-input-wrap">
                  <input
                    id="search"
                    type="search"
                    placeholder="Search product, wellness, spices, lifestyle..."
                    aria-label="Search products"
                    value={query}
                    autoComplete="off"
                    onChange={(event) => onQuery(event.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                  />
                  {query && (
                    <button
                      type="button"
                      className="search-clear-btn"
                      onClick={() => onQuery('')}
                      aria-label="Clear search query"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <button className="search-btn" type="submit" aria-label="Search catalogue">
                  <SearchIcon size={18} />
                </button>
              </form>

              {/* Instant Live Search Dropdown */}
              {isSearchFocused && trimmedQuery.length > 0 && (
                <div className="search-live-dropdown">
                  <div className="search-live-header">
                    <span>Matching items for &ldquo;{trimmedQuery}&rdquo;</span>
                    <button
                      type="button"
                      className="search-see-all"
                      onClick={() => {
                        setIsSearchFocused(false)
                        onNavigate('products')
                      }}
                    >
                      View all in Shop →
                    </button>
                  </div>

                  {liveResults.length > 0 ? (
                    <ul className="search-live-list">
                      {liveResults.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            className="search-live-item"
                            onClick={() => handleSelectResult(item)}
                          >
                            <span className="live-item-emoji">{item.emoji}</span>
                            <div className="live-item-info">
                              <strong>{item.name}</strong>
                              <small>{item.cat} · {item.tag}</small>
                            </div>
                            <span className="live-item-price">{formatPrice(item.price)}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="search-live-empty">
                      <p>No products found matching &ldquo;{query}&rdquo;.</p>
                      <button
                        type="button"
                        className="btn-link"
                        onClick={() => {
                          onFilter?.('All')
                          onQuery('')
                          setIsSearchFocused(false)
                          onNavigate('products')
                        }}
                      >
                        Browse all products
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Customer Support & Contact ID Card */}
            <a
              className="support-chip"
              href={contactInfo.phone.href}
              title="Direct Customer Support Hotline & Inquiries"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  // On mobile let tel: link trigger
                } else {
                  e.preventDefault()
                  onNavigate('support')
                }
              }}
            >
              <span className="support-phone" aria-hidden="true">
                <HeadsetIcon size={20} />
              </span>
              <div className="support-text">
                <span className="support-title">Customer Support</span>
                <strong className="support-id">{contactInfo.phone.display}</strong>
              </div>
            </a>

            {/* Header User Actions */}
            <div className="head-actions">
              <button
                className="user-action-btn"
                type="button"
                onClick={onLogin}
                aria-label="User account and login"
              >
                <UserIcon size={20} />
                <div className="action-label">
                  <small>Hello, Sign in</small>
                  <strong>Account</strong>
                </div>
              </button>

              <button
                className="iconbtn wishlist-btn"
                type="button"
                aria-label="Wishlist (0 items)"
                onClick={() => onNavigate('products')}
              >
                <HeartIcon size={20} />
                <span className="cart-count">0</span>
              </button>

              <button
                className="iconbtn cart-btn"
                type="button"
                onClick={onCart}
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <BagIcon size={20} />
                <span className="cart-count">{cartCount}</span>
                <span className="cart-badge-text">Bag</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. DEDICATED CLEAN NAVIGATION BAR */}
        <div className="navbar-strip">
          <div className="wrap navbar-inner">
            {/* All Categories Dropdown Menu Button */}
            <div className="categories-menu-wrap" ref={catRef}>
              <button
                type="button"
                className={`categories-menu-btn ${isCatMenuOpen ? 'active' : ''}`}
                onClick={() => setIsCatMenuOpen(!isCatMenuOpen)}
                aria-expanded={isCatMenuOpen}
                aria-haspopup="menu"
              >
                <MenuIcon size={17} />
                <span>All Categories</span>
                <ChevronDownIcon size={12} className={isCatMenuOpen ? 'chevron open' : 'chevron'} />
              </button>

              {isCatMenuOpen && (
                <div className="categories-dropdown" role="menu">
                  {filters.map((catName) => (
                    <button
                      key={catName}
                      type="button"
                      className={`cat-menu-item ${filter === catName ? 'active' : ''}`}
                      onClick={() => {
                        onFilter?.(catName)
                        setIsCatMenuOpen(false)
                        onNavigate('products')
                      }}
                      role="menuitem"
                    >
                      <span className="cat-bullet">✦</span>
                      <span>{catName === 'All' ? 'All Products' : catName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Horizontal Navigation Menu */}
            <nav className="main-nav" aria-label="Main Store Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                  {item.badge && (
                    <span className={`nav-badge ${item.badge.toLowerCase()}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Quick Contact & B2B Highlight on the right */}
            <div className="navbar-quick-contact">
              <a
                href={contactInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-fast-link"
                title="Direct WhatsApp Order & Enquiry"
              >
                <WhatsAppIcon size={14} />
                <span>Instant B2B & Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. MOBILE SLIDE-DOWN DRAWER */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <Brand />
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Navigation"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="mobile-drawer-content">
              {/* Category Quick Filter */}
              <div className="mobile-section-title">Shop by Category</div>
              <div className="mobile-cat-chips">
                {filters.map((catName) => (
                  <button
                    key={catName}
                    type="button"
                    className={`mobile-chip ${filter === catName ? 'active' : ''}`}
                    onClick={() => {
                      onFilter?.(catName)
                      setIsMobileMenuOpen(false)
                      onNavigate('products')
                    }}
                  >
                    {catName === 'All' ? 'All' : catName}
                  </button>
                ))}
              </div>

              {/* Navigation Links */}
              <div className="mobile-section-title">Menu</div>
              <nav className="mobile-nav-list">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      onNavigate(item.id)
                    }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`nav-badge ${item.badge.toLowerCase()}`}>{item.badge}</span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Social and Contact ID inside Mobile Drawer */}
              <div className="mobile-section-title">Contact & Social IDs</div>
              <div className="mobile-contact-card">
                <a
                  href={contactInfo.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-contact-line"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram: <strong>{contactInfo.instagram.id}</strong></span>
                </a>
                <a
                  href={contactInfo.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-contact-line"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook: <strong>{contactInfo.facebook.id}</strong></span>
                </a>
                <a
                  href={contactInfo.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-contact-line"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp: <strong>{contactInfo.whatsapp.display}</strong></span>
                </a>
                <a
                  href={contactInfo.phone.href}
                  className="mobile-contact-line"
                >
                  <PhoneIcon size={16} />
                  <span>Hotline: <strong>{contactInfo.phone.display}</strong></span>
                </a>
                <a
                  href={contactInfo.email.href}
                  className="mobile-contact-line"
                >
                  <MailIcon size={16} />
                  <span>Email: <strong>{contactInfo.email.address}</strong></span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
