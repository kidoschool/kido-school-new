import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import OurCenters from "./pages/OurCenters/OurCenters";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurPrograms from "./pages/OurPrograms/OurPrograms";
import KidoHome from "./pages/KidoHome/KidoHome";
import Contact from "./pages/Contact/Contact";
import Carrers from "./pages/Carrers/Carrers";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
  <>
       <Router basename={'/en'}>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path='/ourcentres' component={OurCenters} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/programs' component={OurPrograms} />
          <Route path='/kido-home' component={KidoHome} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/carrers' component={Carrers} />
          <Route path='/news-events' component={Blog} />
        </Switch>
        <Footer />
      </Router>
</>
  );
}

export default App;
