import { Link } from "react-router-dom";
import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h3 className="display footer-logo">{BRAND.name}</h3>
          <p>{BRAND.tagline}</p>
        </div>
        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <p>{BRAND.email}</p>
          <p>{BRAND.phone}</p>
          <p>{BRAND.instagram}</p>
        </div>
      </div>
      <p className="copy">© 2026 {BRAND.name}. All rights reserved.</p>
    </footer>
  );
}
