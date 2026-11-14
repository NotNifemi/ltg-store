import { useEffect, useState } from "react";

function getLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs: Math.floor((diff / 3600000) % 24),
    min: Math.floor((diff / 60000) % 60),
    sec: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

export default function Countdown({ target }) {
  const [t, setT] = useState(() => getLeft(target));

  useEffect(() => {
    const id = setInterval(() => setT(getLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.done) return <p className="display live">LIVE NOW</p>;

  const boxes = [["days", t.days], ["hrs", t.hrs], ["min", t.min], ["sec", t.sec]];
  return (
    <div className="countdown">
      {boxes.map(([label, value]) => (
        <div className="cd-box" key={label}>
          <span className="cd-num">{String(value).padStart(2, "0")}</span>
          <span className="cd-lab">{label}</span>
        </div>
      ))}
    </div>
  );
}
