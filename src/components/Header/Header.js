import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-logo.jpg';


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
                <NavLink className="nav-link pl-4" activeclassname="selected" to="/ourcentres">找一個托兒所</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link pl-4 dropdown-toggle" to="/about-us" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                關於我們
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/about-us">關於我們</NavLink>
                  <NavLink className="dropdown-item" to="/kido-home">基多之家</NavLink>
                  <NavLink className="dropdown-item" to="/programs">我們的</NavLink>
                  <NavLink className="dropdown-item" to="/news-events">博客</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/contact-us">接觸</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-4" to="/careers">招賢納士</NavLink>
              </li>
              {/* <li className="nav-item">
              <div id="google_translate_element"></div>

              </li> */}
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);
