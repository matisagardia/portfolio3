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
            <a href="https://github.com/matisagardia"><img src={githubIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/matias-sagardia-52547a249/"><img src={linkedinIcon} alt="" /></a>
            <a href="mailto:matisagardia7@gmail.com"><img src={mailIcon} alt="" /></a>
            <a href="https://wa.me/+5493515191083"><img src={whatsappicon} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
