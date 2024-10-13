import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section-title" data-aos="fade-right">How to Contact Me?</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let&apos;s talk about business!</h3>
          <p className="contact-details">Don&apos;t like forms? Send me an Email 👋</p>
        </div>

        <form method="POST" className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                id="name"
                className="contact-form-input"
                required placeholder="Your Name"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                id="email"
                className="contact-form-input"
                required placeholder="Your Email"
              />
            </div>
          </div>

            <div className="contact-form-div contact-form-area">
              <input
                type="text"
                className="contact-form-input"
                required placeholder="Your Subject"
              />
            </div>

            <div className="contact-form-div">
              <textarea
                id="message"
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