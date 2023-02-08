import React from 'react'
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import msLogo from "../assets/logo1.png";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className='nav'>

          <div className="sections">  

                  <img src={msLogo} alt="" className='logo'/>

                  <div className="divider"></div>

                  <ul>
                      <li> <Link to="/" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                      <li> <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link></li>
                      <li> <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></li>
                  </ul>
              </div>

              <div className="modeButton">
                  <WiMoonWaningCrescent3 className='modeIcon'/> 
                  <p>Mode</p>
              </div>
      </div>
    </div>
  )
}
