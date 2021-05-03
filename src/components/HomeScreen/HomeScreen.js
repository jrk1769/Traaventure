import Trips from "../TripsCarousel/Trips";
import Testimonials from "../Testimonials/Testimonials"
import "./HomeScreen.css";
import trips from '../../assets/trips.json';
import testimonials from '../../assets/testimonials.json';


const HomeScreen = () => {

  return (
    <>
      <div className="homePageImg">
        <h1 className="homeTag">A More Rewarding Way To Travel</h1>
        <div className="search">
          <input type="text" placeholder="Enter your destination" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icons">
          <div className="icon-container">
            <i className="fas fa-route fa-5x"></i>
            <p className="text">100+<br />Trips</p>
          </div>
          <div className="icon-container">
            <i className="far fa-smile-wink fa-5x"></i>
            <p className="text">1000+<br />Customers</p>
          </div>
          <div className="icon-container">
            <i className="fas fa-map-marker-alt fa-5x"></i>
            <p className="text">100+<br />Places Covered</p>
          </div>
        </div>
      </div>
      <div className="tripsCarousel">
        {trips && <Trips trips={trips} title="All Upcoming Trips" />}
      </div>
      <div className="testimonails">
        {testimonials && <Testimonials testimonials={testimonials} title="What People say" />}
      </div>
    </>
  )
}

export default HomeScreen