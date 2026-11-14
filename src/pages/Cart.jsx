import { useState } from "react";
import { Link } from "react-router-dom";
import ProductArt from "../components/ProductArt";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/brand";
import { PRIZES } from "../data/prizes";

const SHIPPING = 3000;

export default function Cart() {
  const { items, subtotal, changeQty, removeItem, clearCart } = useCart();
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(null);
  const [codeMsg, setCodeMsg] = useState("");
  const [ordered, setOrdered] = useState(false);

  const applyCode = () => {
    const found = PRIZES.find((p) => p.code && p.code === code.trim().toUpperCase());
    if (!found) {
      setApplied(null);
      setCodeMsg("That code isn't valid.");
      return;
    }
    setApplied(found);
    setCodeMsg(`${found.label} applied.`);
  };

  const discount = applied ? Math.round((subtotal * applied.pct) / 100) : 0;
  const freeShip = applied?.code === "LTGSHIP";
  const shipping = items.length === 0 || freeShip ? 0 : SHIPPING;
  const total = subtotal - discount + shipping;

  const checkout = () => {
    clearCart();
    setApplied(null);
    setCode("");
    setCodeMsg("");
    setOrdered(true);
  };

  if (ordered && items.length === 0) {
    return (
      <section className="section red page">
        <div className="wrap center-text">
          <h1 className="display section-title">ORDER PLACED</h1>
          <p className="success">Thank you for shopping LTG. You've earned a free spin!</p>
          <Link to="/" className="btn btn-dark">Back home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section dark page">
      <div className="wrap">
        <h1 className="display section-title">YOUR CART</h1>

        {items.length === 0 ? (
          <div className="center-text">
            <p className="empty">Your cart is empty.</p>
            <Link to="/shop" className="btn">Start shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div>
              {items.map((i) => (
                <div className="cart-row" key={`${i.id}-${i.size}`}>
                  <div className="cart-thumb"><ProductArt {...i.product} /></div>
                  <div className="cart-info">
                    <h3>{i.product.name}</h3>
                    <p>Size {i.size}</p>
                    <p className="price">{formatPrice(i.product.price)}</p>
                    <div className="qty">
                      <button onClick={() => changeQty(i.id, i.size, -1)} aria-label="Decrease">−</button>
                      <span>{i.qty}</span>
                      <button onClick={() => changeQty(i.id, i.size, 1)} aria-label="Increase">+</button>
                      <button className="remove" onClick={() => removeItem(i.id, i.size)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="summary">
              <h3 className="display">SUMMARY</h3>
              <div className="promo">
                <input placeholder="Promo code" value={code} onChange={(e) => setCode(e.target.value)} />
                <button className="btn btn-small" onClick={applyCode}>Apply</button>
              </div>
              {codeMsg && <p className={applied ? "success" : "error"}>{codeMsg}</p>}
              <p className="line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
              {discount > 0 && <p className="line"><span>Discount</span><span>-{formatPrice(discount)}</span></p>}
              <p className="line"><span>Shipping</span><span>{shipping ? formatPrice(shipping) : "Free"}</span></p>
              <p className="line total"><span>Total</span><span>{formatPrice(total)}</span></p>
              <button className="btn" onClick={checkout}>Checkout</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
