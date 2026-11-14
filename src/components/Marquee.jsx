import { BRAND } from "../data/brand";

const WORDS = ["FREE SPIN WITH EVERY ORDER", "THE DROP IS COMING", "LTG OFFICIAL STORE", BRAND.tagline.toUpperCase(), "SHIPPING WORLDWIDE"];

export default function Marquee() {
  const row = WORDS.map((w, i) => <span key={i}>{w} <b>✦</b> </span>);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div>{row}</div>
        <div>{row}</div>
      </div>
    </div>
  );
}
