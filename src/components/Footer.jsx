import React from 'react'
import githubIcon from '../assets/footerLogo/github.png'
import linkedinIcon from '../assets/footerLogo/linkedin.png'
import mailIcon from '../assets/footerLogo/mail.png'
import whatsappicon from '../assets/footerLogo/whatsapp.png'


export const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <h5>© 2023 - Developed by Matias Sagardia</h5>
            <div className="footerIcons">
            <img src={githubIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={mailIcon} alt="" />
            <img src={whatsappicon} alt="" />
            </div>
        </div>
    </div>
  )
}
