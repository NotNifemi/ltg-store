import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", msg: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return setStatus({ type: "error", msg: "Email is required." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      return setStatus({ type: "error", msg: "Enter a valid email address." });
    setStatus({ type: "success", msg: "You're in the loop. Welcome to LTG." });
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h3 className="display">STAY IN THE LOOP</h3>
      <form onSubmit={submit} noValidate>
        <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn" type="submit">Sign up</button>
      </form>
      {status.msg && <p className={status.type}>{status.msg}</p>}
    </div>
  );
}
