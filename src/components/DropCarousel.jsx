import { useState } from "react";
import ProductArt from "./ProductArt";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/brand";
import { products } from "../data/products";

const dropItems = products.filter((p) => p.drop);

export default function DropCarousel() {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();
  const item = dropItems[index];
  const pad = (n) => String(n).padStart(2, "0");

  const prev = () => setIndex((i) => (i - 1 + dropItems.length) % dropItems.length);
  const next = () => setIndex((i) => (i + 1) % dropItems.length);

  return (
    <div className="drop">
      <div className="drop-stage" key={item.id}>
        <div className={`card-art big ${item.soon ? "is-soon" : ""}`}>
          <ProductArt {...item} />
          {item.soon && <span className="soon-tag">COMING SOON</span>}
        </div>
      </div>

      <div className="drop-controls">
        <button className="arrow" onClick={prev} aria-label="Previous">←</button>
        <span>{pad(index + 1)} / {pad(dropItems.length)}</span>
        <button className="arrow" onClick={next} aria-label="Next">→</button>
      </div>

      <h3 className="card-name center">{item.name}</h3>
      <p className="price center">{item.soon ? "COMING SOON" : formatPrice(item.price)}</p>
      {!item.soon && (
        <button className="btn btn-small center-btn" onClick={() => addToCart(item.id, "M")}>
          Shop now
        </button>
      )}
    </div>
  );
}
