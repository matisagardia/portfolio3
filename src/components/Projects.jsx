import { FcBriefcase } from "react-icons/fc";
import { BsCarousel } from "./BsCarousel";
import { Footer } from "./Footer"
import heroesApp from  "../assets/projects/heroes.png"
import gifApp from "../assets/projects/gifexpert.png"
import pig from "../assets/projects/pig.png"
import guess from "../assets/projects/guess.png"
import { useContext } from "react";
import { DarkModeContext } from "./contexts/ThemeContext";

export const Projects = () => {

    const {darkMode} = useContext(DarkModeContext);
      

  return (
    <div className={`projects ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`}>

        <div className="projectsTitle">
            <p className={`${darkMode ? "darkModeFont" : "lightModeFont"}`}>My projects</p>
            <FcBriefcase />
        </div>

        <div className="projectsSlider">
            <BsCarousel />
        </div>

        <div className={`smallerProjects ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`}>
            <p className={`smallerTitle ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Some smaller projects/apps</p>
            <div className="smallerContainer">
                <div className="app1">
                    <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Heroes App</h3>
                    <a href="https://heroespage.netlify.app/marvel"><img src={heroesApp} alt=""/></a>
                </div>
                <div className="app2">
                    <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Gifs App</h3>
                    <a href="https://gifappmati.netlify.app/"><img src={gifApp} alt="" /></a>
                </div>
                <div className="app3">
                    <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Pig Game</h3>
                    <a href="https://matisagardia.github.io/pigGame/"><img src={pig} alt="" /></a>
                </div>
                <div className="app4 projectHighlight">
                <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Guess my Number</h3>
                <a href="https://matisagardia.github.io/guessMyNumber/"><img src={guess} alt="" /></a>
                </div>
            </div>
        </div>
        <Footer />

    </div>
  )
}
