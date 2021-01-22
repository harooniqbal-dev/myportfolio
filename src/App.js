import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import ServiceContainer from './components/servicecontainer/ServiceContainer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
           <About/>
          </Route>
          <Route path="/contact">
           <Contact/>
          </Route>
          <Route path="/:myservice">
           <ServiceContainer/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
