import NavBar from "./component/layouts/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./component/pages/home/HomePage";
import AboutUs from "./component/pages/about/AboutUs";
import ContactUs from "./component/pages/contact/ContactUs";
import Portfolio from "./component/pages/portfolio/Portfolio";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Container>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/works" component={Portfolio} />
          </Switch>
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default App;
