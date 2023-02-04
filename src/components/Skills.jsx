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
import postman from "../assets/skillslogos/postman.png"
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
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bootstrap} alt="" />
                <img src={sass} alt="" />
                <img src={js} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={node} alt="" />
                <img src={mongo} alt="" />
                <img src={postman} alt="" />
                <img src={git} alt="" />
            </div>

            <div className="softSkills">
                <img src={teamwork} alt="" />
                <img src={pm} alt="" />
                <img src={listen} alt="" />
                <img src={adapt} alt="" />
                <img src={conflict} alt="" />
                <img src={problem} alt="" />
            </div>
        </div>
    </div>
  )
}
