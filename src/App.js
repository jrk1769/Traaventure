import Navbar from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HomeScreen />
        <Footer />
      </Router>
    </>
  );
}

export default App;