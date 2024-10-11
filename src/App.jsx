import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Resume from "./components/resume/Resume"
import Services from "./components/services/Services"
import Sidebar from "./components/sidebar/Sidebar"
import './App.css';
import AOS from "aos";

function App() {
  AOS.init({
    duration: 600,
    delay: 300,
  });
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App
