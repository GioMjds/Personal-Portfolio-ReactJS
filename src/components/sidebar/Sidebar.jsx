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
            <a href="#home" className="nav__logo" onClick={handleNav}>
                <span className='logo-name'>G</span>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={handleNav}>
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={handleNav}>
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={handleNav}>
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link" onClick={handleNav}>
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={handleNav}>
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={handleNav}>
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; @giomjds | 2024</span>
            </div>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
    </>
  )
}

export default Sidebar