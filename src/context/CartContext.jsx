import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ltg_cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ltg_cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (id, size = "M") => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id && i.size === size);
      if (found) return prev.map((i) => (i === found ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, size, qty: 1 }];
    });
  };

  const changeQty = (id, size, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );

  const removeItem = (id, size) =>
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));

  const clearCart = () => setItems([]);

  const detailed = items.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) }));
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = detailed.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items: detailed, count, subtotal, addToCart, changeQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
