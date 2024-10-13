import { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('blur-background', toggle);
        document.body.classList.toggle('no-scroll', toggle);
    }, [toggle]);

    const handleNav = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            showMenu(false);
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

  return (
    <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" onClick={handleNav}>
                <h1 className='logo-name'>G</h1>
            </a>

            <nav className="nav">
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={handleNav}>
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={handleNav}>
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link" onClick={handleNav}>
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link" onClick={handleNav}>
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link" onClick={handleNav}>
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={handleNav}>
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav-footer">
                <span className="copyright">&copy; giomjds | 2024</span>
            </div>
        </aside>

        <div className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"} onClick={() => showMenu(!toggle)}>
            <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
    </>
  )
}

export default Sidebar