import { BRAND } from "../data/brand";

export default function Intro({ onEnter }) {
  return (
    <div className="intro">
      <p className="intro-sub">OFFICIAL STORE · SS26</p>
      <h1 className="display glitch intro-logo" data-text={BRAND.name}>
        {BRAND.name}
      </h1>
      <p className="intro-sub">{BRAND.tagline}</p>
      <div className="intro-actions">
        <button className="btn" onClick={() => onEnter(true)}>
          Enter with sound
        </button>
        <button className="btn btn-ghost" onClick={() => onEnter(false)}>
          Enter muted
        </button>
      </div>
    </div>
  );
}
