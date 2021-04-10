import Trips from "../Trips/Trips";
import Testimonials from "../Testimonials/Testimonials"
import useFetch from "../useFetch/useFetch";
import "./HomeScreen.css";


const HomeScreen = () => {
  const { data: trips, error: err1, isLoading: load1} = useFetch('http://localhost:8000/trips');
  const { data: testimonials, error: err2, isLoading: load2 } = useFetch('http://localhost:8000/testimonials');
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
        {err1 && <div>{err1}</div>}
        {load1 && <div>Loading...</div>}
        {trips && <Trips trips={trips} title="All Upcoming Trips" />}
      </div>
      <div className="testimonails">
        {err2 && <div>{err2}</div>}
        {load2 && <div>Loading...</div>}
        {testimonials && <Testimonials testimonials={testimonials} title="What People say" />}
      </div>
    </>
  )
}

export default HomeScreen