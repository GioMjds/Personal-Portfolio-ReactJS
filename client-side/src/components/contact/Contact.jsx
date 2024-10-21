import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message Sent Successfully!');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (e) {
      console.log(`Error: ${e}`);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section-title" data-aos="fade-right">How to Contact Me?</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let&apos;s talk about business!</h3>
          <p className="contact-details">Don&apos;t like forms? Send me an Email 👋</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                id="name"
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input"
                required placeholder="Your Name"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input"
                required placeholder="Your Email"
              />
            </div>
          </div>

            <div className="contact-form-div contact-form-area">
              <input
                type="text"
                onChange={handleChange}
                value={formData.subject}
                className="contact-form-input"
                required placeholder="Your Subject"
              />
            </div>

            <div className="contact-form-div">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact