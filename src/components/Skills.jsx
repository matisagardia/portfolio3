import skillsTitleLogo from "../assets/skillslogos/skills.png"
import html from "../assets/skillslogos/html.png"
import css from "../assets/skillslogos/css-3.png"
import js from "../assets/skillslogos/js.png"
import react from "../assets/skillslogos/react.png"
import node from "../assets/skillslogos/node.png"
import sass from "../assets/skillslogos/sass.png"
import bootstrap from "../assets/skillslogos/bootstrap.png"
import mongo from "../assets/skillslogos/mongo.png"
import redux from "../assets/skillslogos/redux.png"
import teamwork from "../assets/skillslogos/teamwork.png"
import pm from "../assets/skillslogos/project-management.png"
import listen from "../assets/skillslogos/listening.png"
import adapt from "../assets/skillslogos/adaptation.png"
import git from "../assets/skillslogos/git.png"
import conflict from "../assets/skillslogos/conflict.png"
import problem from "../assets/skillslogos/problem.png"
import { useContext } from "react"
import { DarkModeContext } from "./contexts/ThemeContext"


export const Skills = () => {


        const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
      
        const handleClick = () => {
          toggleDarkMode();
        };
      

  return (
    <div className={`skillsContainer ${darkMode ? 'darkModeBackground' : 'lightModeBackground'}`} id="skills">

        <div className={`skillsTitle ${darkMode ? 'darkModeFont' : 'lightModeFont'}`}>
            <p>My skills</p>
            <img src={skillsTitleLogo} alt="" className="skillsTitleImg"/>
        </div>

        <div className="skillsLogos">
            <div className="languajes animate__animated animate__fadeInUp">
                <div className={`html ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Html<img src={html} alt="" /></div>
                <div className={`css ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Css<img src={css} alt="" /></div>
                <div className={`bs ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Bootstrap<img src={bootstrap} alt="" /></div>
                <div className={`sass ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Sass<img src={sass} alt="" /></div>
                <div className={`js ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Javascript<img src={js} alt="" /></div>
                <div className={`react ${darkMode ? "darkModeFont" : "lightModeFont"}`}>React<img src={react} alt="" /></div>
                <div className={`redux ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Redux<img src={redux} alt="" /></div>
                <div className={`node ${darkMode ? "darkModeFont" : "lightModeFont"}`}>NodeJS<img src={node} alt="" /></div>
                <div className={`mongo ${darkMode ? "darkModeFont" : "lightModeFont"}`}>MongoDB<img src={mongo} alt="" /></div>
                <div className={`git ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Git/Github<img src={git} alt="" /></div>
            </div>

            <div className="softSkills animate__animated animate__fadeInUp">
                <div className={`teamwork ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Teamwork<img src={teamwork} alt="" /></div>
                <div className={`listen ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Listening<img src={listen} alt="" /></div>
                <div className={`adapt ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Adaptabilty<img src={adapt} alt="" /></div>
                <div className={`conflict ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Conflict <br/> resolution<img src={conflict} alt="" /></div>
                <div className={`problem ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Problem <br/> solving<img src={problem} alt="" /></div>
                <div className={`pm ${darkMode ? "darkModeFont" : "lightModeFont"}`}>Time <br/> management<img src={pm} alt="" /></div>
            </div>
        </div>
    </div>
  )
}
