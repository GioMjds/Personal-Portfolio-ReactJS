import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(details)
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  }
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title" data-aos="fade-right">How to Contact Me?</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let&apos;s talk about business!</h3>
          <p className="contact__details">Don&apos;t like forms? Send me an Email 👋</p>
        </div>

        <form method="POST" onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                id="name"
                className="contact__form-input"
                required placeholder="Your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                id="email"
                className="contact__form-input"
                required placeholder="Your Email"
              />
            </div>
          </div>

            <div className="contact__form-div contact__form-area">
              <input
                type="text"
                className="contact__form-input"
                required placeholder="Your Subject"
              />
            </div>

            <div className="contact__form-div">
              <textarea
                id="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="btn">{status}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact