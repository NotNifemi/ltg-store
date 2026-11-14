import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const visible = products.filter(
    (p) =>
      (category === "all" || p.type === category) &&
      p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="section dark page">
      <div className="wrap">
        <h1 className="display section-title">SHOP ALL</h1>

        <div className="toolbar">
          <input
            className="search"
            type="search"
            placeholder="Search LTG..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c.key}
                className={`chip ${category === c.key ? "active" : ""}`}
                onClick={() => setCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="empty">Nothing found. Try another search.</p>
        ) : (
          <div className="grid">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
        <p className="empty">More pieces coming soon</p>
      </div>
    </section>
  );
}
