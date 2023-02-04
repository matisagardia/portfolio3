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


export const Skills = () => {


  return (
    <div className="skillsContainer">

        <div className="skillsTitle">
            <p>My skills</p>
            <img src={skillsTitleLogo} alt="" className="skillsTitleImg"/>
        </div>

        <div className="skillsLogos">
            <div className="languajes">
                <div className="html">Html<img src={html} alt="" /></div>
                <div className="css">Css<img src={css} alt="" /></div>
                <div className="bs">Bootstrap<img src={bootstrap} alt="" /></div>
                <div className="sass">Sass<img src={sass} alt="" /></div>
                <div className="js">Javascript<img src={js} alt="" /></div>
                <div className="react">React<img src={react} alt="" /></div>
                <div className="redux">Redux<img src={redux} alt="" /></div>
                <div className="node">NodeJS<img src={node} alt="" /></div>
                <div className="mongo">MongoDB<img src={mongo} alt="" /></div>
                <div className="git">Git/Github<img src={git} alt="" /></div>
            </div>

            <div className="softSkills">
                <div className="teamwork">Teamwork<img src={teamwork} alt="" /></div>
                <div className="listen">Llistening<img src={listen} alt="" /></div>
                <div className="adapt">Adaptabilty<img src={adapt} alt="" /></div>
                <div className="conflict">Conflict <br/> resolution<img src={conflict} alt="" /></div>
                <div className="problem">Problem <br/> solving<img src={problem} alt="" /></div>
                <div className="pm">Time <br/> management<img src={pm} alt="" /></div>
            </div>
        </div>
    </div>
  )
}
