import { useEffect, useState } from "react";
import Trips from "../Trips/Trips";
import "./HomeScreen.css";


const HomeScreen = () => {

  const [trips, setTrips] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/trips')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setTrips(data);
    })
  }, []);

  return (
    <>
      <div className="homePageImg">
        <h1 className="tag">A More Rewarding Way To Travel</h1>
        <div className="search">
          <input type="text" placeholder="Enter your destination" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icons">
          <div>
            <i className="fas fa-route fa-5x"></i>
            <p className="text">100+<br/>Trips</p>
          </div>
          <div>
            <i className="far fa-smile-wink fa-5x"></i>
            <p className="text">1000+<br/>Customers</p>
          </div>
          <div>
            <i className="fas fa-map-marker-alt fa-5x"></i>
            <p className="text">100+<br/>Places Covered</p>
          </div>
        </div>
      </div>
      <div className="tripsCarousel">
        {trips && <Trips trips={trips} title="All Upcoming Trips" />}
      </div>
    </>
  )
}

export default HomeScreen