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

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
      
    const handleClick = () => {
      toggleDarkMode();
    };

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
                    <img src={heroesApp} alt=""/>
                </div>
                <div className="app2">
                    <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Gifs App</h3>
                    <img src={gifApp} alt="" />
                </div>
                <div className="app3">
                    <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Pig Game</h3>
                    <img src={pig} alt="" />
                </div>
                <div className="app4 projectHighlight">
                <h3 className={darkMode ? "darkModeFont" : "lightModeFont"}>Guess my Number</h3>
                <img src={guess} alt="" />
                </div>
            </div>
        </div>
        <Footer />

    </div>
  )
}
