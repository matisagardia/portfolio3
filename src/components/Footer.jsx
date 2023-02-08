import React, { useContext } from 'react'
import githubIcon from '../assets/footerLogo/github.png'
import linkedinIcon from '../assets/footerLogo/linkedin.png'
import mailIcon from '../assets/footerLogo/mail.png'
import whatsappicon from '../assets/footerLogo/whatsapp.png'
import githubIconWhite from '../assets/footerLogo/githubWhite.png'
import linkedinIconWhite from '../assets/footerLogo/linkedinWhite.png'
import mailIconWhite from '../assets/footerLogo/mailWhite.png'
import whatsappiconWhite from '../assets/footerLogo/whatsappWhite.png'
import { DarkModeContext } from './contexts/ThemeContext'


export const Footer = () => {

  const {darkMode} = useContext(DarkModeContext);
      

  return (
    <div>
        <div className={`footer ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`}>
            <h5 className={darkMode ? "darkModeFont" : "lightModeFont"}>© 2023 - Developed by Matias Sagardia</h5>
            <div className="footerIcons">
            <a href="https://github.com/matisagardia" target={'#'}><img src={darkMode ? githubIconWhite : githubIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/matias-sagardia-52547a249/" target={'#'}><img src={darkMode ? linkedinIconWhite : linkedinIcon} alt="" /></a>
            <a href="mailto:matisagardia7@gmail.com" target={'#'}><img src={darkMode ? mailIconWhite : mailIcon} alt="" /></a>
            <a href="https://wa.me/+5493515191083" target={'#'}><img src={darkMode ? whatsappiconWhite : whatsappicon} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
