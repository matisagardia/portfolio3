import React from 'react'
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import msLogo from "../assets/logo1.png";

export const Navbar = () => {
  return (
    <div className='nav'>

        <div className="sections">  

                <img src={msLogo} alt="" className='logo'/>

                <div className="divider"></div>

                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className="modeButton">
                <WiMoonWaningCrescent3 className='modeIcon'/> 
                <p>Mode</p>
            </div>
    </div>
  )
}
