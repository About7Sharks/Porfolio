import React, { useState, useEffect, useCallback } from "react";
import { msg as sendMessage } from "../../util/msg";
import { useContactForm } from "../../contexts/ContactFormContext";

type Field = { name: string; email: string; subject: string; message: string };
const empty: Field = { name: "", email: "", subject: "", message: "" };

export const Contact = (props) => {
  const { isPopupOpen, setPopupOpen } = useContactForm();
  const [formData, setFormData] = useState<Field>(empty);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const close = useCallback(() => {
    setPopupOpen(false);
    setSent(false);
    setSending(false);
    setErr(null);
  }, [setPopupOpen]);

  // close on Escape while open
  useEffect(() => {
    if (!isPopupOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isPopupOpen, close]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErr(null);
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}, Email: ${email}, Subject: ${subject}\n\n${message}`;
    try {
      const response = await sendMessage({ msg: body, title: "Contact Form", html: 0, url: "" });
      if (response) setSent(true);
      else { setErr("send failed. try email me directly."); setSending(false); }
    } catch {
      setErr("send failed. try email me directly.");
      setSending(false);
    }
  };

  if (!isPopupOpen) {
    return (
      <div className="navItem contact-link" onClick={() => setPopupOpen(true)}>
        <span>contact</span>
      </div>
    );
  }

  return (
    <div className="cf-modal" onClick={close}>
      <div className="cf-card" onClick={(e) => e.stopPropagation()}>
        <button className="cf-close" onClick={close} aria-label="close">×</button>
        {sent ? (
          <div className="cf-thanks">
            <div className="cf-thanks-mark">✓</div>
            <h2>message received</h2>
            <p>
              I read everything that lands here. Expect a reply within a couple
              of days — sooner if the stars align.
            </p>
            <button className="cf-btn" onClick={close}>close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="cf-head">
              <h2>drop a line</h2>
              <p className="cf-sub mono">no gatekeepers. no tracking. just a human who ships.</p>
            </div>
            <label className="cf-label">name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Ada" />
            <label className="cf-label">email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@somewhere.tld" />
            <label className="cf-label">subject</label>
            <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="let&apos;s build something" />
            <label className="cf-label">message</label>
            <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="the good stuff" />
            {err && <p className="cf-err mono">{err}</p>}
            <button type="submit" className="cf-btn" disabled={sending}>
              {sending ? "sending…" : "send it →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
