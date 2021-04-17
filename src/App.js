import Navbar from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Gallery from "./components/Gallery/Gallery";
import ContactButton from "./components/ContactButton/ContactButton";
import ContactUs from "./components/ContactUs/ContactUs";
import AllTrips from "./components/AllTrips/AllTrips";
import NotFound from "./components/404/404";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/allTrips">
            <AllTrips />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ContactButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;