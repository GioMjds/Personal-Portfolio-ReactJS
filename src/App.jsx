import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Resume from "./components/resume/Resume"
import Services from "./components/services/Services"
import Sidebar from "./components/sidebar/Sidebar"
import DarkMode from "./components/DarkMode"
import AOS from "aos";
import './App.css';
import { ThemeProvider } from "./context/ThemeContext"

const App = () => {
  AOS.init({
    duration: 600,
    delay: 300,
  });
  return (
    <ThemeProvider>
      <Sidebar />
      <DarkMode />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
