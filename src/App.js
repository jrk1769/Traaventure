import Navbar from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;