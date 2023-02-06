import { FcBriefcase } from "react-icons/fc";
import { BsCarousel } from "./BsCarousel";

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
            <p>Some smaller projects/apps</p>
            <div className="smallerContainer">
                <div className="app1">
                    <h3>Heroes App</h3>
                </div>
                <div className="app2">
                    <h3>Gifs App</h3>
                </div>
                <div className="app3">
                    <h3>Pig Game</h3>
                </div>
                <div className="app4">
                <h3>Guess my Number</h3>
                </div>
            </div>
        </div>

    </div>
  )
}
