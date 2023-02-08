import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import homeImg from "../assets/homeicon/icon0background.png"
import { DarkModeContext } from './contexts/ThemeContext';


export const Home = () => {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className={`home ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`}>

        <div className="homeText animate__animated animate__fadeInLeft">

            <h2 className={darkMode ? "darkModeFont" : "lightModeFont"}>Welcome to my portfolio!</h2>

            <h1 className={`highlight ${darkMode ? "darkModeFont" : "lightModeFont"}`} id='name'>I'm Matias Sagardia</h1> 
            <br />
            <h1 className={darkMode ? "darkModeFont" : "lightModeFont"}>Front End Developer</h1> 

            <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>My goal is to build creative, functional, and innovative products. <br />
            I challenge myselft seeking to generate the best user experience.</h3>
            

            <div className="buttons">


            <Button variant="secondary" size='lg' className='resumeButton' href='https://drive.google.com/file/d/1_IRWR-Eyqy8xL5bKpoY3x6CyPB_fT5H7/view?usp=share_link' target='#'>Dowload resume</Button>

            <Button variant="outline-secondary" size='lg' className='contactButton' href="mailto:matisagardia7@gmail.com">Contact me</Button>

            </div>

        </div>

        <div className="homeImg animate__animated animate__fadeInRight">
            <img src={homeImg} alt="" />
        </div>

    </div>
  )
}
