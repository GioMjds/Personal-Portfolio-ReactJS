import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('blur-background', toggle);
        document.body.classList.toggle('no-scroll', toggle);
    }, [toggle]);

    const handleNav = (id) => {
        showMenu(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <NavLink to='/' onClick={() => handleNav('home')} >
                <h1 className='logo-name'>G</h1>
            </NavLink>
            
            <nav className="nav">
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={() => handleNav('home')}>
                                <i className="icon-home"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" onClick={() => handleNav('about')}>
                                <i className="icon-user-following"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" onClick={() => handleNav('services')}>
                                <i className="icon-briefcase"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link" onClick={() => handleNav('resume')}>
                                <i className="icon-graduation"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link" onClick={() => handleNav('portfolio')}>
                                <i className="icon-layers"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" onClick={() => handleNav('contact')}>
                                <i className="icon-bubble"></i>
                            </NavLink>
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