import Trips from "../Trips/Trips";
import Testimonials from "../Testimonials/Testimonials"
import useFetch from "../useFetch/useFetch";
import "./HomeScreen.css";


const HomeScreen = () => {
  const { data: trips, error: tripErr, isLoading: tripLoad} = useFetch('http://localhost:8000/trips');
  const { data: testimonials, error: testimonialsErr, isLoading: testimonialsLoad } = useFetch('http://localhost:8000/testimonials');
  return (
    <>
      <div className="homePageImg">
        <h1 className="tag">A More Rewarding Way To Travel</h1>
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
        {tripErr && <div>{tripErr}</div>}
        {tripLoad && <div>Loading...</div>}
        {trips && <Trips trips={trips} title="All Upcoming Trips" />}
      </div>
      <div className="testimonails">
        {testimonialsErr && <div>{testimonialsErr}</div>}
        {testimonialsLoad && <div>Loading...</div>}
        {testimonials && <Testimonials testimonials={testimonials} title="What People say" />}
      </div>
    </>
  )
}

export default HomeScreen