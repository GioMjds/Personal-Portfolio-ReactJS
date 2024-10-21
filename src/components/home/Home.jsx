import "./home.css";
import Me from "../../assets/mimic4.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from "./Shapes";
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { NavLink } from "react-router-dom";

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const handleNav = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className="home-img" data-aos="zoom-out"/>
            <h1 className="home-name" data-aos="zoom-out">Gio Majadas</h1>
            <span className="home-education" data-aos="zoom-out">2nd Year Student</span>
            <HeaderSocials />
            <NavLink to="/contact" className="btn" data-aos="zoom-out" onClick={() => handleNav('contact')} >Hire Me</NavLink>
            <ScrollDown />
        </div>
        <Shapes isDarkMode={isDarkMode} />
    </section>
  )
}

export default Home