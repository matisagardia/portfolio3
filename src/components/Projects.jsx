import { Carousel } from "react-bootstrap";
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

    </div>
  )
}
