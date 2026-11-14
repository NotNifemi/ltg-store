import { useState } from "react";
import { PRIZES } from "../data/prizes";

const SIZE = 400;
const C = SIZE / 2;
const R = 190;
const SEG = 360 / PRIZES.length;

const point = (angle, radius) => {
  const rad = (angle * Math.PI) / 180;
  return [C + radius * Math.sin(rad), C - radius * Math.cos(rad)];
};

const slicePath = (i) => {
  const [x1, y1] = point(i * SEG, R);
  const [x2, y2] = point((i + 1) * SEG, R);
  return `M${C} ${C} L${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2} Z`;
};

const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function SpinWheel() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = (e) => {
    e.preventDefault();
    if (spinning) return;
    if (!validEmail(email)) {
      setError("Enter a valid email to spin.");
      return;
    }
    setError("");
    setResult(null);
    setSpinning(true);

    const winner = Math.floor(Math.random() * PRIZES.length);
    const base = Math.ceil(rotation / 360) * 360;
    setRotation(base + 360 * 5 - (winner + 0.5) * SEG);

    setTimeout(() => {
      setSpinning(false);
      setResult(PRIZES[winner]);
    }, 4200);
  };

  return (
    <div className="wheel-box">
      <div className="wheel-wrap">
        <div className="wheel-pointer" />
        <svg
          className="wheel-svg"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ transform: `rotate(${rotation}deg)` }}
          aria-label="Prize wheel"
        >
          <circle cx={C} cy={C} r={R + 6} fill="#000" />
          {PRIZES.map((p, i) => {
            const mid = i * SEG + SEG / 2;
            const [tx, ty] = point(mid, R * 0.64);
            const light = i % 2 === 0;
            return (
              <g key={i}>
                <path d={slicePath(i)} fill={light ? "#e10600" : "#0a0a0a"} stroke="#000" strokeWidth="2" />
                <text
                  x={tx}
                  y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${mid - 90} ${tx} ${ty})`}
                  fill={light ? "#0a0a0a" : "#e10600"}
                  fontFamily="Anton, Impact, sans-serif"
                  fontSize="17"
                  letterSpacing="1"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
          <circle cx={C} cy={C} r="38" fill="#0a0a0a" stroke="#e10600" strokeWidth="4" />
          <text x={C} y={C} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontFamily="Anton, Impact, sans-serif" fontSize="20">
            SPIN
          </text>
        </svg>
      </div>

      <form className="wheel-form" onSubmit={spin} noValidate>
        <input
          type="email"
          placeholder="EMAIL USED FOR THE ORDER"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn" type="submit" disabled={spinning}>
          {spinning ? "Spinning..." : "Spin now"}
        </button>
      </form>

      {result && (
        <div className="result">
          {result.code ? (
            <>
              <p className="display">YOU WON: {result.label}</p>
              <p>Use code <b>{result.code}</b> in your cart.</p>
            </>
          ) : (
            <p className="display">{result.label}. SPIN AGAIN!</p>
          )}
        </div>
      )}
    </div>
  );
}
