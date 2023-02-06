import Carousel from 'react-bootstrap/Carousel';
import BankistLanding from '../assets/projects/bankistLanding.png'
import CalendarPage from '../assets/projects/calendarPage.png'
import journalApp from '../assets/projects/journalApp.png'
import BankingSimulator from '../assets/projects/bankistApp.png'
import Mapty from '../assets/projects/mapty.png'
import html from "../assets/skillslogos/html.png"
import css from "../assets/skillslogos/css-3.png"
import js from "../assets/skillslogos/js.png"
import react from "../assets/skillslogos/react.png"
import node from "../assets/skillslogos/node.png"
import sass from "../assets/skillslogos/sass.png"
import bootstrap from "../assets/skillslogos/bootstrap.png"
import mongo from "../assets/skillslogos/mongo.png"
import redux from "../assets/skillslogos/redux.png"
import git from "../assets/skillslogos/git.png"



export  const BsCarousel = () => {
  return (
    <div className='carrouselContainer'>
    <Carousel variant="dark" interval={null} fade={true}>

      <Carousel.Item id='carrouselMapty'>
       <div className="carrousel" >
       <img src={Mapty} alt="" className='mapty'/>
       </div>
        <Carousel.Caption className='maptyDescription'>
          <h1>Mapty</h1>
          <h4>App to add different workouts based on the selected location received by the Geolocation API. The project was done in an Advanced Javascript Course to practice Object Oriented Programming. It uses the localStorage to save the information.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="carrousel">
      <img src={journalApp} alt="" />
        </div>
        <Carousel.Caption>
          <h5>Journal App</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carrousel">
      <img src={CalendarPage} alt="" />
        </div>
        <Carousel.Caption>
          <h5>Calendar App</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       <div className="carrousel">
          <img src={BankistLanding} alt="" />
       </div>
        <Carousel.Caption>
          <h5>Bankist Landing</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       <div className="carrousel">
          <img src={BankingSimulator} alt="" />
       </div>
        <Carousel.Caption>
          <h5>Bank Simulator</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}