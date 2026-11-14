import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { BRAND } from "../data/brand";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop All" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
  { to: "/cart", label: "Cart" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <header className="nav">
        <button className="nav-btn" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
        </button>
        <Link to="/" className="nav-logo display">{BRAND.name}</Link>
        <div className="nav-right">
          <Link to="/shop" className="nav-btn" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </Link>
          <Link to="/cart" className="nav-btn cart-btn" aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8a3 3 0 016 0" /></svg>
            {count > 0 && <span className="badge">{count}</span>}
          </Link>
        </div>
      </header>

      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <nav className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <span>menu</span>
          <button className="nav-btn" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className="drawer-link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
