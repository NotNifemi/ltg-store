import { useState } from "react";
import { BRAND } from "../data/brand";

const EMPTY = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.subject.trim()) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(EMPTY);
    }
  };

  return (
    <section className="section dark page">
      <div className="wrap contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="display section-title">TALK TO US</h1>
          <p className="lead">Orders, collabs, sizing or just to say hi.</p>
          <ul className="contact-list">
            <li><b>Email</b> {BRAND.email}</li>
            <li><b>Phone</b> {BRAND.phone}</li>
            <li><b>Location</b> {BRAND.address}</li>
            <li><b>Instagram</b> {BRAND.instagram}</li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <label>
            Full name
            <input name="name" value={values.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email address
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Subject
            <input name="subject" value={values.subject} onChange={handleChange} />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={values.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button className="btn" type="submit">Submit</button>
          {sent && <p className="success">Message sent! We'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
}
