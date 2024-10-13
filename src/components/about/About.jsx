import Me from "../../assets/mimic4.jpg";
import "./about.css";
import AboutBox from "./AboutBox";
import TechStacks from "./TechStacks";
import { skillsData } from "./Skills";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section-title" data-aos="fade-right">About Me</h2>

      <div className="about-container grid">
        <img src={Me} alt="" className='about-img home-img' />

        <div className="about-data grid">

          <div className="about-info">
            <p className="about-description">As a student whose having a interest in Web Design, I&apos;m driven to build beautiful and functional websites that captivates users. I&apos;m passionate about creating engaging and intuitive user experiences. I&apos;m also a quick learner and can work well in a team setting, and constantly expanding my knowledge to stay ahead of the curve.</p>
            <a href="src\assets\Gio Majadas (Resume).pdf" className="btn" target="_blank">Download CV</a>
          </div>

          <div className="about-skills grid">
            {skillsData.map((skill, index) => (
              <div className="skills-data" key={index}>
                <div className="skills-titles">
                  <h3 className="skills-name">{skill.name}</h3>
                  <span className="skills-number">{skill.percentage}%</span>
                </div>

                <div className="skills-bar">
                  <span
                    className="skills-percentage"
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
      <section className="about container section">
        <h2 className="section-title" data-aos="fade-right">Tech Stacks</h2>
        <TechStacks/>
      </section>
    </section>
  )
}

export default About