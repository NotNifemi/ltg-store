import Reveal from "../components/Reveal";
import { BRAND } from "../data/brand";

const PILLARS = [
  { title: "Mission", text: "Make clothes that sound as loud as the people wearing them." },
  { title: "Vision", text: "To grow from a small local label into a global streetwear name." },
  { title: "Objectives", text: "Limited drops, premium fabrics, fair prices and a real community." },
];

const STATS = [
  { num: "2024", label: "Founded" },
  { num: "10+", label: "Pieces released" },
  { num: "1K+", label: "Community" },
];

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <h3 className="display">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="section red page">
      <div className="wrap">
        <Reveal>
          <p className="kicker">About</p>
          <h1 className="display section-title">WHO IS {BRAND.name}?</h1>
          <p className="lead">
            {BRAND.name} is a streetwear brand that does what it wants. We design tees, tanks, shorts,
            hoodies and caps for people who refuse to blend in.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="display sub-title">OUR STORY</h2>
          <p className="lead">
            It started with a few sketches and a heat press. One small batch sold out in a weekend, and
            the label has been moving ever since. Replace this paragraph with your real brand story.
          </p>
        </Reveal>

        <Reveal>
          <div className="cards3">
            {PILLARS.map((p) => (
              <InfoCard key={p.title} title={p.title} text={p.text} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <span className="display stat-num">{s.num}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
