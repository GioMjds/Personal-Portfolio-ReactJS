import "./home.css";
import Me from "../../assets/mimic4.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className="home-img" data-aos="zoom-out"/>
            <h1 className="home-name" data-aos="zoom-out">Gio Majadas</h1>
            <span className="home-education" data-aos="zoom-out">2nd Year Student</span>
            <HeaderSocials />
            <a href="#contact" className="btn" data-aos="zoom-out">Hire Me</a>
            <ScrollDown />
        </div>
        <Shapes/>
    </section>
  )
}

export default Home