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
                                <h4 className="widget-title pb-3">打开您自己的KDO中心</h4>
                                <p>您有兴趣经营自己的学前班吗？请访问我们的特许经营网站，以了解如何开设自己的Kïdo学校。</p>
                            </div>
                        </div>
                    <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">中心</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/ourcentres?srch-trm=dubai">迪拜</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=greater-london">大伦敦</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=houston">休斯敦</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=austin">奥斯丁</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=hong-kong">香港</Link></li>
                                  <li><Link to="/ourcentres?srch-trm=india">印度</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                            <h4 className="widget-title pb-3">关于基多</h4>
                                <ul className="list-unstyled">
                                  <li><a href="https://www.kidoholdings.com/" target="_blank" rel="noreferrer">公司的</a></li>
                                  <li><Link to="/kido-home">基多之家</Link></li>
                                  <li><Link to="/faq">常问问题</Link></li>
                                  <li><a href="https://www.kidofranchise.com/" target="_blank" rel="noreferrer">专营权</a></li>
                                  <li><Link to="/privacy-policy">隐私政策</Link></li>
                                  <li><Link to="/cookie-policy">Cookie政策</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">接触</h4>
                                <ul className="list-unstyled">
                                  <li><Link to="/contact-us">hello@kido.school</Link></li>
                                </ul>
                            </div>
                            <div className="icon-info">
                              <a href="https://www.facebook.com/Kidoeducation" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f pr-3"></i></a>
                              <a href="https://www.instagram.com/kidoschools/" target="_blank" rel="noreferrer"><i className="fab fa-instagram pr-3"></i></a>
                              <a href="https://www.youtube.com/c/KidoSchools" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>   
                    </div>     
                </div>

                <div className="container-fluid bottom-line"></div>

                <div className="container py-3">
                  <div className="d-flex justify-content-between">
                    <div className="terms"><Link to="/">条款和条件</Link></div>
                    <div className="all-rights"><Link to="/">&copy;2021 Kïdo | 版权所有</Link></div>
                  </div>
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
