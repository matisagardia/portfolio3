import Carousel from 'react-bootstrap/Carousel';

export  const BsCarousel = () => {
  return (
    <div className='carrouselContainer'>
    <Carousel variant="dark" interval={null} fade={true}>
      <Carousel.Item>
       <div className="carrousel">

       </div>
        <Carousel.Caption>
          <h5>Bankist</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <div className="carrousel">
        
       </div>
        <Carousel.Caption>
          <h5>Mapty</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carrousel">
        
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
      <Carousel.Item>
      <div className="carrousel">
        
        </div>
        <Carousel.Caption>
          <h5>Heroes page</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="carrousel">
        
        </div>
        <Carousel.Caption>
          <h5>Gif App</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carrousel">
        
        </div>
        <Carousel.Caption>
          <h5>Pig Game</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}