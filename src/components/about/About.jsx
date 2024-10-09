import Me from "../../assets/mimic4.jpg";
import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className='about__img home__img' />

        <div className="about__data grid">

          <div className="about__info">
            <p className="about__description">Hello! I&apos;m Gio Majadas, an IT student particularly interested in making innovations and pontifications about technology. I have a passion for coding and problem solving. Also have an strong background</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End Development</h3>
                <span className="skills__number">72%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-1"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Database Management</h3>
                <span className="skills__number">68%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Server-side Development</h3>
                <span className="skills__number">54%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill-3"></span>
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