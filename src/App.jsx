import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Modal from './components/Modal'
import ProductGrid from './components/ProductGrid'
import {
  About,
  Account,
  Categories,
  Collection,
  Footer,
  ImportExport,
  Offers,
  Support,
  TrustBar,
  Wholesale,
} from './components/SiteSections'
import { products } from './data/catalog'

function scrollToSection(id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [cart, setCart] = useState([])
  const [activeNav, setActiveNav] = useState('home')
  const [toast, setToast] = useState('')
  const [modal, setModal] = useState(null)
  const toastTimer = useRef(null)

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  useEffect(() => {
    if (!modal) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setModal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modal])

  function showToast(message) {
    setToast(message)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2600)
  }

  function chooseFilter(next, scroll = false) {
    setFilter(next)
    if (scroll) scrollToSection('products')
  }

  const search = query.trim().toLowerCase()
  const visibleProducts = products.filter((product) => {
    const matchesFilter = filter === 'All' || product.cat === filter
    const haystack = `${product.name} ${product.cat} ${product.tag}`.toLowerCase()
    return matchesFilter && (!search || haystack.includes(search))
  })

  return (
    <>
      <Header
        query={query}
        onQuery={setQuery}
        cartCount={cart.length}
        activeNav={activeNav}
        filter={filter}
        onFilter={setFilter}
        onNavigate={(id) => {
          setActiveNav(id)
          scrollToSection(id)
        }}
        onLogin={() => setModal({ kind: 'login' })}
        onCart={() => setModal({ kind: 'cart' })}
      />
      <main id="home">
        <Hero
          onExplore={() => {
            setActiveNav(null)
            scrollToSection('categories')
          }}
          onWholesale={() => setModal({ kind: 'business' })}
        />
        <TrustBar />
        <Categories
          onBrowseAll={() => setFilter('All')}
          onSelect={(name) => chooseFilter(name, true)}
        />
        <Collection filter={filter} onFilter={(name) => chooseFilter(name, true)}>
          <ProductGrid
            products={visibleProducts}
            onAdd={(product) => {
              setCart((current) => [...current, product])
              showToast(`${product.name} added to your sample cart`)
            }}
          />
        </Collection>
        <Offers onExplore={() => showToast('Live offers will appear here when promotions are configured.')} />
        <ImportExport onEnquire={() => setModal({ kind: 'trade' })} />
        <Wholesale onQuote={() => setModal({ kind: 'business' })} />
        <About />
        <Account onLogin={() => setModal({ kind: 'login' })} />
        <Support onHelp={(title) => setModal({ kind: 'help', title })} />
      </main>
      <Footer onInfo={(page) => setModal({ kind: 'info', page })} />
      <div className={toast ? 'toast show' : 'toast'} role="status" aria-live="polite">{toast}</div>
      <Modal
        modal={modal}
        cart={cart}
        onClose={() => setModal(null)}
        onRemove={(index) => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))}
        onCheckout={() => setModal({ kind: 'checkout' })}
        onExplore={() => {
          setModal(null)
          scrollToSection('products')
        }}
        onToast={showToast}
      />
    </>
  )
}
