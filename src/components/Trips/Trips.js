import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trips.css";

/**
* @author
* @function Trips
**/

const Trips = ({ trips, title }) => {

  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
            <header className="trip-head-container">
              <h2>{trip.title}</h2>
            </header>
            <section>
              <img className="img-container" src={trip.imgSrc} />
            </section>
            <footer className="trip-card-footer">
              <span>{trip.date}</span>
              <span>{trip.duration}</span>
              <span>{trip.price}</span>
            </footer>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Trips