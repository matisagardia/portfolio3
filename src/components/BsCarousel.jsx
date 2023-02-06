import Carousel from 'react-bootstrap/Carousel';
import BankistLanding from '../assets/projects/bankistLanding.png'
import CalendarPage from '../assets/projects/calendarPage.png'
import journalApp from '../assets/projects/journalApp.png'


export  const BsCarousel = () => {
  return (
    <div className='carrouselContainer'>
    <Carousel variant="dark" interval={null} fade={true}>
      <Carousel.Item>
       <div className="carrousel">
          <img src={BankistLanding} alt="" />
       </div>
        <Carousel.Caption>
          <h5>Bankist</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <div className="carrousel">
       <img src={CalendarPage} alt="" />
       </div>
        <Carousel.Caption>
          <h5>Mapty</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        
        </div>
        <Carousel.Caption>
          <h5>Calendar App</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}