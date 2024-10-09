import Me from "../../assets/mimic4.jpg";
import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title" data-aos="fade-right">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className='about__img home__img' />

        <div className="about__data grid">

          <div className="about__info">
            <p className="about__description">Hello! I&apos;m Gio Majadas. A 2nd Year Computer Science Student excelling mostly in Software Development and Web Development. I love learning most of the techy stuff I needed or wanted to upskill in the career path that I want to achieve. My IT career path is focused on Web Development to become a Software Engineer.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End Development</h3>
                <span className="skills__number">62%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-1"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">58%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Database</h3>
                <span className="skills__number">53%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-3"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End Development</h3>
                <span className="skills__number">41%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-4"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full-Stack Development</h3>
                <span className="skills__number">32%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-5"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mobile Development</h3>
                <span className="skills__number">27%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-6"></span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About