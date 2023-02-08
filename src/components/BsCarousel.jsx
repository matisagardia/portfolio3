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
import firebase from "../assets/skillslogos/firebase.png"
import mui from "../assets/skillslogos/mui.png"



export  const BsCarousel = () => {
  return (
    <div className='carrouselContainer'>
    <Carousel variant="dark" interval={null} fade={true}>

    <Carousel.Item id='carrouselJournal'>
      <div className="carrousel">
      <a href="https://journalapp-e125c.web.app/"><img src={journalApp} alt="" className='journal'/></a>
        </div>
        <Carousel.Caption className='journalDescription'>
          <h1>Journal App</h1>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={redux} alt="" />
          <img src={firebase} alt="" />
          <img src={mui} alt="" />
          <img src={git} alt="" />
          <h4>
            Register and Login implemented with Firebase Auth. It has Material UI for the icons/style. It is a journal, in which the user can add/edit/delete tasks and also add images. The images are hosted in cloudinary and the notes use Firebase Database. The state is managed with Redux Toolkit.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id='carrouselMapty'>
       <div className="carrousel" >
       <a href="https://matisagardia.github.io/maptyApp/"><img src={Mapty} alt="" className='mapty'/></a>
       </div>
        <Carousel.Caption className='maptyDescription'>
          <h1>Mapty</h1>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={git} alt="" />
          <h4>App to add different workouts by clicking on the map based on the selected location received by the Geolocation API. The project was done to practice Object Oriented Programming. It uses the localStorage to save the information.</h4>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item id='carrouselCalendar'>
      <div className="carrousel">
      <a href="https://calendarapp-backend-ms.up.railway.app/auth/login"><img src={CalendarPage} alt="" className='calendar'/></a>
        </div>
        <Carousel.Caption className='calendarDescription'>
          <h1>Calendar App</h1>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={redux} alt="" />
          <img src={mongo} alt="" />
          <img src={node} alt="" />
          <img src={git} alt="" />
          <h4>
            This is a calendar app to add tasks with initial and end date which accepts different users. The library for the calendar is React Big Calendar and React Date Picker for the dates. It uses MongoDB to store the users and notes information and Redux Toolkit to manage the state. For the backend, Node.js and Express were implemented.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id='carrouselBankSimulator'>
       <div className="carrousel">
          <img src={BankingSimulator} alt="" className='bankSimulator'/>
       </div>
        <Carousel.Caption className='bankSimulatorDescription'>
          <h1>Bank Simulator</h1>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <h4>Note: To try the app the username is "ms" and the password is 1111. <br/><br/> App to simulate a bank account. You can transfer money between accounts, request a loan, and close the account. Also, you can sort the movements. The login/logout function is only visibility by changing the opacity of a screen.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}