import Me from "../../assets/mimic4.jpg";
import "./about.css";
import AboutBox from "./AboutBox";
import TechStacks from "./TechStacks";
import { skillsData } from "./Skills";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title" data-aos="fade-right">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className='about__img home__img' />

        <div className="about__data grid">

          <div className="about__info">
            <p className="about__description">Hello! I&apos;m Gio Majadas. A 2nd Year Computer Science Student excelling mostly in Software Development and Web Development. I love learning most of the techy stuff I needed or wanted to upskill in the career path that I want to achieve. My IT career path is focused on Web Development to become a Software Engineer.</p>
            <a href="src\assets\Gio Majadas (Resume).pdf" className="btn" target="_blank">Download CV</a>
          </div>

          <div className="about__skills grid">
            {skillsData.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.percentage}%</span>
                </div>

                <div className="skills__bar">
                  <span
                    className="skills__percentage"
                    style={{ 
                      width: `${skill.percentage}%`,
                      backgroundColor: `${skill.color}` 
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <AboutBox/>
      <TechStacks/>
    </section>
  )
}

export default About