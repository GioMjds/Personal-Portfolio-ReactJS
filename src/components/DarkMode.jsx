import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import './darkmode.css';

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
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