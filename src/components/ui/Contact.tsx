import React, { useState } from "react";
import { msg as sendMessage } from "../../util/msg";

export const Contact = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const msg = `Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`;
    const response = await sendMessage({
      msg,
      title: "Contact Form",
      html: 0,
      url: "",
    });
    if (response) {
      setShowThanks(true);
    }
  };

  return (
    <>
      <div
        className="navItem"
        key="contact"
        onClick={() => {
          setPopupOpen(true);
        }}
      >
        <span>Contact</span>
      </div>
      {isPopupOpen && (
        <dialog className="contactForm">
          <button className="closeButton" onClick={() => setPopupOpen(false)}>
            &times; {/* This is an HTML entity for the "times" symbol */}
          </button>
          {!showThanks ? (
            <form onSubmit={handleSubmit}>
              <h2>Contact</h2>
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
              />
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label>Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                onChange={handleChange}
              />
              <label>Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          ) : (
            <p>Thanks for your message!</p>
          )}
        </dialog>
      )}
    </>
  );
};
