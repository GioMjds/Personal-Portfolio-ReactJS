
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

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                required placeholder="Your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
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
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact