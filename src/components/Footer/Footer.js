import React from 'react';
import {Link} from "react-router-dom";


function Footer(props) {
  return(
    
    <>
    <footer>
             
        <section className="footer-area">
          <div className="container">
                <div className="row py-4">
                    <div className="col-md-5 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">OPEN YOUR OWN KÏDO CENTER</h4>
                                <p>Are you interested in operating your own preschool? Head to our franchise website to learn how you can launch your own Kïdo school.</p>
                            </div>
                        </div>
                    <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CENTRES</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/ourcentres?srch-trm=dubai">Dubai</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=greater-london">Greater London</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=houston">Houston</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=austin">Austin</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=hong-kong">Hong Kong</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=india">India</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                            <h4 className="widget-title pb-3">ABOUT KIDO</h4>
                                <ul className="list-unstyled">
                                <li><a href="#">Corporate</a></li>
                                  <li><a href="#">Kido Home</a></li>
                                  <li><Link to="/faq">FAQ</Link></li>
                                  <li><a href="#">Franchise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CONTACT</h4>
                                <ul className="list-unstyled">
                                  <li><a href="#">hello@kido.school</a></li>
                                </ul>
                            </div>
                            <div className="icon-info">
                                <i className="fab fa-facebook-f pr-3"></i>
                                <i className="fab fa-instagram pr-3"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>   
                    </div>     
                </div>

                <div className="container-fluid bottom-line"></div>

                <div className="container py-3">
                  <div className="d-flex justify-content-between">
                    <div className="terms"><a href="#">Terms and conditions</a></div>
                    <div className="all-rights"><a href="#">Ⓒ2020 Kïdo | All rights reserved</a></div>
                  </div>
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
