function Filters({ search, setSearch, category, setCategory, products }) {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
