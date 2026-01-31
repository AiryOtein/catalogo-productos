const { useState, useEffect } = React;

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    const themeLink = document.getElementById("theme-style");
    if (themeLink) {
      themeLink.setAttribute(
        "href",
        darkMode ? "css/styles-dark.css" : "css/styles-light.css"
      );
    }
  }, [darkMode]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        const mapped = data.map(p => ({ ...p, quantity: 1 }));
        setProducts(mapped);
        setFilteredProducts(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = products;
    if (search)
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    if (category !== "all") result = result.filter(p => p.category === category);
    setFilteredProducts(result);
  }, [search, category, products]);

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists)
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function updateQuantity(index, qty) {
    if (qty < 1) return;
    const newCart = [...cart];
    newCart[index].quantity = qty;
    setCart(newCart);
  }

  function toggleCart() {
    setCartOpen(prev => !prev);
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900 && cartOpen) {
        setCartOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cartOpen]);

  if (loading) return <div className="spinner"></div>;
  if (error) return <p className="message error">{error}</p>;

  return (
    <div className="app">
      <header className="topbar">
        <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Claro ☀️" : "Oscuro 🌙"}
        </button>

        <h1>Catálogo de Productos</h1>

        <button className="cart-btn" onClick={toggleCart}>
          🛒 Carrito ({cart.length})
        </button>
      </header>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        products={products}
      />

      <div className="layout">
        <div className="products">
          <div className="grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <p
                style={{
                  textAlign: "center",
                  gridColumn: "1 / -1",
                  color: darkMode ? "#f4f4f5" : "#2d1f3f",
                  fontWeight: "600",
                  marginTop: "2rem"
                }}
              >
                No se han encontrado productos
              </p>
            )}
          </div>
        </div>

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          isOpen={cartOpen}
          toggleCart={toggleCart}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
