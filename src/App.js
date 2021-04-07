import Navbar from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Footer />
      </Router>
    </>
  );
}

export default App;