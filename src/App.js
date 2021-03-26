import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import OurCenters from "./pages/OurCenters/OurCenters";
import OurCentersInfo from "./pages/OurCenters/OurCentersInfo";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurPrograms from "./pages/OurPrograms/OurPrograms";
import KidoHome from "./pages/KidoHome/KidoHome";
import Contact from "./pages/Contact/Contact";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import BlogInfo from "./pages/Blog/BlogInfo";
import Faq from "./pages/Faq/Faq";
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import './App.css';


function App() {

  // const isActive = true;
  // const isFadeSpeed = 100
  
  return (
  <>
       <Router basename={'/cn'}>
       <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path='/ourcentres' component={OurCenters} />
          <Route path='/our-centres/:city/:slug' component={OurCentersInfo} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/programs' component={OurPrograms} />
          <Route path='/kido-home' component={KidoHome} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/careers' component={Careers} />
          <Route path='/news-events' component={Blog} />
          <Route path='/news/:title' component={BlogInfo} />
          <Route path='/faq' component={Faq} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/cookie-policy' component={CookiePolicy} />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
</>
  );
}

export default App;
