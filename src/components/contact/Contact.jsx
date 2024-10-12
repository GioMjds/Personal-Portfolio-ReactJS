import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title" data-aos="fade-right">How to Contact Me?</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let&apos;s talk about business!</h3>
          <p className="contact__details">Don&apos;t like forms? Send me an Email 👋</p>
        </div>

        <form method="POST" className="contact__form">
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
            <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact