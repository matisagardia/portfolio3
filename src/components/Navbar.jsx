import React, { useContext } from 'react'
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import msLogo from "../assets/logo1.png";
import msLogoWhite from "../assets/MS-logos_white.png";
import { DarkModeContext } from './contexts/ThemeContext';

export const Navbar = () => {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="navContainer">
      <div className={`nav ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`}>

          <div className="sections">  

                  <img src={darkMode ? msLogoWhite : msLogo} alt="" className='logo'/>

                  <div className="divider"></div>

                  <ul>
                      <li> <Link to="home" spy={true} smooth={true} offset={0} duration={300} className={`${darkMode ? 'darkModeFont' : 'lightModeFont'}`}>Home</Link></li>
                      <li> <Link to="skills" spy={true} smooth={true} offset={-80} duration={300} className={`${darkMode ? 'darkModeFont' : 'lightModeFont'}`}>Skills</Link></li>
                      <li> <Link to="projects" spy={true} smooth={true} offset={-80} duration={300} className={`${darkMode ? 'darkModeFont' : 'lightModeFont'}`}>Projects</Link></li>
                  </ul>
              </div>

              <div className="modeButton" onClick={handleClick}>
                  <div className="toggleMode"><WiMoonWaningCrescent3 className={`modeIcon ${darkMode ? 'darkModeFont' : 'lightModeFont'}`}/> </div>
                  <p className={`${darkMode ? 'darkModeFont' : 'lightModeFont'}`}>Dark Mode</p>
              </div>
      </div>
    </div>
  )
}
