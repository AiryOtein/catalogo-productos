function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p className="category">{product.category}</p>
      <p className="price">{product.price} €</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Añadir al carrito
      </button>
    </div>
  );
}
