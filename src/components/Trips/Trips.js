import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={true} 
        renderButtonGroupOutside={true} 
      >
        {trips.map((trip) => (
          <div className="tripPreview" key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.date}</p>
            <p>{trip.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Trips