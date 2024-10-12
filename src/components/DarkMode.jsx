import { useState, useEffect } from 'react'
import './darkmode.css';

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) setIsDarkMode(JSON.parse(savedMode));
    }, []);

    useEffect(() => {
        if (isDarkMode) document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? (
            <i className="fas fa-sun"></i>
        ) : (
            <i className="fas fa-moon"></i>
        )}
    </button>
  );
};

export default DarkMode