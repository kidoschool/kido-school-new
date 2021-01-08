import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-logo.jpg'


function Header(props){

    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <NavLink className="navbar-brand pl-4" to="/"><img src={logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <NavLink className="nav-link pl-4" activeclassname="selected" to="/ourcentres">Find a nursery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/about-us">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/programs">Our Programs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/kido-home">Kido Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/contact-us">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/carrers">Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/news-events">Blog</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);
