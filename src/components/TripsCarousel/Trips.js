import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import "./Trips.css";

/**
* @author
* @function Trips
**/

const Trips = ({ trips, title }) => {

  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 768 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className="trips">
      <h2>{title}</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={true}
        renderButtonGroupOutside={true}
      >
        {trips.map((trip) => (
          <div className="tripPreview" key={trip.id}>
            <Link to={`/trips/${trip.id}`}>
              <header className="trip-head-container">
                <h2 className="trip-title">{trip.title}</h2>
              </header>
              <section>
                <img className="img-container" src={trip.imgSrc} alt={trip.alt} />
              </section>
              <footer className="trip-card-footer">
                <span>{trip.date}</span>
                <span>{trip.duration}</span>
                <span>{trip.price}</span>
              </footer>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Trips