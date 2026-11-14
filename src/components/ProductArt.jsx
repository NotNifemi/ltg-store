// Drawn product art so the site looks great with no photos.
const SHAPES = {
  tee: "M60 30 L85 20 Q100 38 115 20 L140 30 L182 62 L164 90 L146 77 L146 175 L54 175 L54 77 L36 90 L18 62 Z",
  tank: "M68 18 L88 18 Q100 52 112 18 L132 18 L138 72 L148 175 L52 175 L62 72 Z",
  shorts: "M48 38 L152 38 L164 168 L108 168 L100 98 L92 168 L36 168 Z",
  hoodie: "M62 34 Q100 2 138 34 L184 72 L174 152 L150 148 L148 182 L52 182 L50 148 L26 152 L16 72 Z",
  cap: "M32 118 Q32 46 100 46 Q168 46 168 118 L192 130 L100 132 L32 132 Z",
};
const TEXT = {
  tee: { y: 108, size: 38 },
  tank: { y: 108, size: 34 },
  shorts: { y: 78, size: 22 },
  hoodie: { y: 120, size: 38 },
  cap: { y: 100, size: 26 },
};

export default function ProductArt({ type = "tee", body = "#fff", ink = "#e10600", image, name }) {
  if (image) return <img className="art" src={image} alt={name} />;
  const t = TEXT[type];
  return (
    <svg className="art" viewBox="0 0 200 200" role="img" aria-label={name || type}>
      <path d={SHAPES[type]} fill={body} stroke="rgba(0,0,0,.45)" strokeWidth="2" strokeLinejoin="round" />
      <path d={SHAPES[type]} fill="url(#shade)" opacity=".25" />
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="1" />
        </linearGradient>
      </defs>
      <text x="100" y={t.y} textAnchor="middle" fontFamily="Anton, Impact, sans-serif" fontSize={t.size} fill={ink} letterSpacing="2">
        LTG
      </text>
      <text x="100" y={t.y + 14} textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="7" fill={ink} letterSpacing="3">
        SS26
      </text>
    </svg>
  );
}
