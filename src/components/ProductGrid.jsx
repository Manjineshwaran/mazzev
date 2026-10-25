import { formatPrice } from '../data/catalog'

export default function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return (
      <p className="empty-state">No sample products match that search. Try another term.</p>
    )
  }

  return (
    <div className="products">
      {products.map((product) => (
        <article className="product" key={product.id}>
          <div className="prod-image">
            <span className="tag">{product.tag}</span>
            <span className="prod-emoji">{product.emoji}</span>
          </div>
          <div className="prod-info">
            <small>{product.cat}</small>
            <h3>{product.name}</h3>
            <div className="price-row">
              <div className="price">
                {formatPrice(product.price)}
                <small>{product.unit} · sample price</small>
              </div>
              <button
                className="add"
                type="button"
                aria-label={`Add ${product.name} to cart`}
                onClick={() => onAdd(product)}
              >
                +
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
