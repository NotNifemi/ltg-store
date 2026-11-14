import { useState } from "react";
import ProductArt from "./ProductArt";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/brand";
import { sizes } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product.id, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="card">
      <div className={`card-art ${product.soon ? "is-soon" : ""}`}>
        <ProductArt {...product} />
        {product.soon && <span className="soon-tag">COMING SOON</span>}
      </div>
      <h3 className="card-name">{product.name}</h3>
      <p className="price">{formatPrice(product.price)}</p>
      {!product.soon && (
        <>
          <div className="sizes">
            {sizes.map((s) => (
              <button key={s} className={`size ${s === size ? "active" : ""}`} onClick={() => setSize(s)}>
                {s}
              </button>
            ))}
          </div>
          <button className="btn btn-small" onClick={handleAdd}>
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </>
      )}
    </article>
  );
}
