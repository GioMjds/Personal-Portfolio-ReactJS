import React from 'react'
import "./home.css";
import Me from "../../assets/mimic4.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Gio Majadas</h1>
            <span className="home__education">Front-End Developer</span>

            <HeaderSocials />

            <a href="#contact" className="btn">Hire Me</a>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home