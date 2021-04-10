import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from '@material-ui/core/Avatar';
import './Testimonials.css';

/**
* @author
* @function Testimonials
**/

const Testimonials = ({ testimonials, title }) => {

  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="testimonials">
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
      >
        {testimonials.map((review) => (
          <div className="testimonialPreview" key={review.id}>
            <div className="testimonial-sub-container">
              <Avatar className="review-avatar">{review.title.charAt(0)}</Avatar>
              <div className="review-container">
                <h2>{review.title}</h2>
                <span className="trip-decor">{review.review}</span>
                <p className="trip-decor">Trip to {review.tripTo}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials