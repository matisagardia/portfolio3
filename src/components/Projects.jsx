import { FcBriefcase } from "react-icons/fc";
import { BsCarousel } from "./BsCarousel";
import { Footer } from "./Footer"
import heroesApp from  "../assets/projects/heroes.png"
import gifApp from "../assets/projects/gifexpert.png"
import pig from "../assets/projects/pig.png"
import guess from "../assets/projects/guess.png"

export const Projects = () => {
  return (
    <div className="projects">

        <div className="projectsTitle">
            <p>My projects</p>
            <FcBriefcase />
        </div>

        <div className="projectsSlider">
            <BsCarousel />
        </div>

        <div className="smallerProjects">
            <p className="smallerTitle">Some smaller projects/apps</p>
            <div className="smallerContainer">
                <div className="app1">
                    <h3>Heroes App</h3>
                    <img src={heroesApp} alt=""/>
                </div>
                <div className="app2">
                    <h3>Gifs App</h3>
                    <img src={gifApp} alt="" />
                </div>
                <div className="app3">
                    <h3>Pig Game</h3>
                    <img src={pig} alt="" />
                </div>
                <div className="app4 projectHighlight">
                <h3>Guess my Number</h3>
                <img src={guess} alt="" />
                </div>
            </div>
        </div>
        <Footer />

    </div>
  )
}
