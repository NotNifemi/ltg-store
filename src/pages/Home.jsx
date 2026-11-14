import { useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import DropCarousel from "../components/DropCarousel";
import SpinWheel from "../components/SpinWheel";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Reveal from "../components/Reveal";
import { BRAND } from "../data/brand";
import { products } from "../data/products";

export default function Home() {
  const [more, setMore] = useState(false);
  const featured = products.filter((p) => !p.soon).slice(0, 4);

  return (
    <>
      <section className="hero">
        <p className="kicker">Welcome to</p>
        <h1 className="display glitch hero-title" data-text={BRAND.name}>{BRAND.name}</h1>
        <p className="hero-welcome">{BRAND.tagline}</p>
        <p className="hero-intro">
          LTG is a streetwear label built for people who move loud. Heavy fits, bold graphics, limited drops.
        </p>
        {more && (
          <p className="hero-intro more-text">
            Every piece is designed in small batches. When a drop is gone, it is gone. Join the list, spin the wheel,
            and be first in line when the next one lands.
          </p>
        )}
        <div className="hero-actions">
          <Link to="/shop" className="btn">Shop the drop</Link>
          <button className="btn btn-ghost" onClick={() => setMore(!more)}>
            {more ? "Show less" : "Learn more"}
          </button>
        </div>
        <p className="kicker drop-label">Next drop in</p>
        <Countdown target={BRAND.dropDate} />
      </section>

      <section className="section red">
        <div className="wrap">
          <Reveal>
            <p className="kicker">In store now</p>
            <h2 className="display section-title">THE DROP</h2>
            <DropCarousel />
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap center-text">
          <Reveal>
            <p className="kicker">1 free spin with every order</p>
            <h2 className="display section-title">SPIN THE WHEEL</h2>
            <SpinWheel />
          </Reveal>
        </div>
      </section>

      <section className="section red">
        <div className="wrap">
          <Reveal>
            <h2 className="display section-title">FEATURED</h2>
            <div className="grid">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="center-text">
              <Link to="/shop" className="btn btn-dark">Shop all</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Reveal>
            <Newsletter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
