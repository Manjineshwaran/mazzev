import { useState } from 'react'
import { formatPrice, infoPages } from '../data/catalog'

export default function Modal({ modal, cart, onClose, onRemove, onCheckout, onExplore, onToast }) {
  if (!modal) return null

  return (
    <div
      className="modal-back open"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="close" type="button" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {modal.kind === 'login' && <LoginForm onClose={onClose} onToast={onToast} />}
        {modal.kind === 'business' && <BusinessForm onClose={onClose} onToast={onToast} />}
        {modal.kind === 'trade' && <TradeForm onClose={onClose} onToast={onToast} />}
        {modal.kind === 'cart' && (
          <CartView
            cart={cart}
            onRemove={onRemove}
            onCheckout={onCheckout}
            onExplore={onExplore}
          />
        )}
        {modal.kind === 'checkout' && <CheckoutView onClose={onClose} />}
        {modal.kind === 'help' && <Preview title={modal.title} onClose={onClose} help />}
        {modal.kind === 'info' && <Preview title={infoPages[modal.page]} onClose={onClose} />}
      </div>
    </div>
  )
}

function LoginForm({ onClose, onToast }) {
  return (
    <>
      <h2 id="modalTitle">Welcome to MAZZEV</h2>
      <p>Sign in to view orders, save addresses and manage your account. Authentication is not connected in this prototype.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onClose()
          onToast('Demo only: authentication is not connected.')
        }}
      >
        <label className="field-label" htmlFor="login-email">Email address</label>
        <input id="login-email" required type="email" placeholder="you@example.com" />
        <label className="field-label" htmlFor="login-password">Password</label>
        <input id="login-password" required type="password" placeholder="Enter your password" />
        <button className="btn primary full" type="submit">Sign in</button>
      </form>
      <p>New to MAZZEV? Account registration can be added in the next build.</p>
    </>
  )
}

function BusinessForm({ onClose, onToast }) {
  const [mode, setMode] = useState('consumer')

  return (
    <>
      <h2 id="modalTitle">Business orders</h2>
      <p>Tell us how you plan to buy from MAZZEV. This prototype demonstrates the business enquiry journey; submissions are not sent to a live service.</p>
      <div className="mode">
        <button className={mode === 'consumer' ? 'on' : undefined} type="button" onClick={() => setMode('consumer')}>
          Individual
        </button>
        <button className={mode === 'business' ? 'on' : undefined} type="button" onClick={() => setMode('business')}>
          Business buyer
        </button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onClose()
          onToast('Demo only: connect a backend to receive enquiries.')
        }}
      >
        <label className="field-label" htmlFor="biz-name">Business or contact name</label>
        <input id="biz-name" required placeholder="Your name or company" />
        <label className="field-label" htmlFor="biz-email">Work email</label>
        <input id="biz-email" required type="email" placeholder="you@company.com" />
        <label className="field-label" htmlFor="biz-country">Country</label>
        <select id="biz-country" defaultValue="Sweden">
          <option>Sweden</option>
          <option>Denmark</option>
          <option>Finland</option>
          <option>Germany</option>
          <option>Netherlands</option>
          <option>Other European country</option>
        </select>
        <label className="field-label" htmlFor="biz-interest">What are you interested in?</label>
        <select id="biz-interest" defaultValue="Wholesale catalogue">
          <option>Wholesale catalogue</option>
          <option>Bulk order quotation</option>
          <option>Retail partnership</option>
          <option>Distribution opportunity</option>
        </select>
        <div className="modal-actions">
          <button className="btn primary" type="submit">Preview enquiry</button>
          <button className="btn secondary" type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
      <div className="wholesale-note">No information is transmitted or stored in this demo.</div>
    </>
  )
}

function TradeForm({ onClose, onToast }) {
  return (
    <>
      <h2 id="modalTitle">Import & export enquiry</h2>
      <p>Share your trade requirements with MAZZEV. This is a demo form; it does not send information to a live service.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onClose()
          onToast('Demo only: connect a backend to receive trade enquiries.')
        }}
      >
        <label className="field-label" htmlFor="trade-name">Name / company</label>
        <input id="trade-name" required placeholder="Your name or company" />
        <label className="field-label" htmlFor="trade-email">Email</label>
        <input id="trade-email" required type="email" placeholder="you@company.com" />
        <label className="field-label" htmlFor="trade-type">Enquiry type</label>
        <select id="trade-type" defaultValue="Import into Sweden / Europe">
          <option>Import into Sweden / Europe</option>
          <option>Export to another market</option>
          <option>Supplier or distributor partnership</option>
        </select>
        <label className="field-label" htmlFor="trade-details">Product and destination details</label>
        <input id="trade-details" placeholder="Products, quantities, origin / destination" />
        <button className="btn primary" type="submit">Preview enquiry</button>
      </form>
    </>
  )
}

function CartView({ cart, onRemove, onCheckout, onExplore }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <h2 id="modalTitle">Your shopping bag</h2>
      {cart.length === 0 ? (
        <>
          <p>Your bag is empty. Explore the collection and add something you like.</p>
          <button className="btn primary full" type="button" onClick={onExplore}>
            Explore products
          </button>
        </>
      ) : (
        <>
          <div className="bag-list">
            {cart.map((item, index) => (
              <div className="bag-row" key={`${item.id}-${index}`}>
                <span>{item.emoji} {item.name}</span>
                <strong>{formatPrice(item.price)}</strong>
                <button type="button" onClick={() => onRemove(index)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="bag-total">
            Subtotal <span>{formatPrice(total)}</span>
          </div>
          <p>Delivery and taxes would be calculated at checkout. Prices are illustrative.</p>
          <button className="btn primary full" type="button" onClick={onCheckout}>
            Continue to checkout
          </button>
        </>
      )}
    </>
  )
}

function CheckoutView({ onClose }) {
  return (
    <>
      <h2 id="modalTitle">Checkout preview</h2>
      <p>Choose a checkout pathway for your future MAZZEV store.</p>
      <div className="category compact">
        <strong>Consumer checkout</strong>
        <small>Card and locally suitable payment methods, delivery address and order summary.</small>
      </div>
      <div className="category compact">
        <strong>Business checkout</strong>
        <small>Approved business accounts, quote or invoice options where supported.</small>
      </div>
      <p>Payment providers and order processing are not connected in this prototype.</p>
      <button className="btn primary" type="button" onClick={onClose}>Got it</button>
    </>
  )
}

function Preview({ title, onClose, help = false }) {
  return (
    <>
      <h2 id="modalTitle">{title}</h2>
      <p>
        {help
          ? 'This is a support-page preview. The live site can provide relevant answers, contact details, delivery information and order-specific help here.'
          : "This information page needs MAZZEV's verified company details, customer service contact, delivery policy and applicable legal text before launch."}
      </p>
      <button className="btn primary" type="button" onClick={onClose}>Close preview</button>
    </>
  )
}
