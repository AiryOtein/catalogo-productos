function Cart({ cart, removeFromCart, updateQuantity, isOpen, toggleCart, darkMode }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`cart ${isOpen ? "open" : ""} ${darkMode ? "dark" : "light"}`}>
      <h2>Carrito</h2>
      <button className="close-cart" onClick={toggleCart}>✖</button>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.title} x {item.quantity}</span>
          <div className="cart-buttons">
            <button className="cart-btn-item" onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
            <button className="cart-btn-item" onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
            <button className="cart-btn-item" onClick={() => removeFromCart(index)}>✖</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && <div className="total">Total: {total} €</div>}
    </div>
  );
}
