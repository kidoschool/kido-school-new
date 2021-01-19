import React from 'react';
import {Link} from "react-router-dom";
import AboutBanner from '../../assets/About-banner.jpg';
import Aboutperson1 from '../../assets/about-person1.jpg';
import Aboutperson2 from '../../assets/about-person2.jpg';
import Aboutperson3 from '../../assets/about-person3.jpg';
import Aboutperson4 from '../../assets/about-person4.jpg';
import Aboutperson5 from '../../assets/about-person5.jpg';
import Aboutperson6 from '../../assets/about-person6.jpg';
import Aboutperson7 from '../../assets/about-person7.jpg';
import Aboutperson8 from '../../assets/about-person8.png';




function AboutUs(props) {

  const size = {
    width:'85%',
    height:'95%'
}


  return(
    <>
    <section className="about-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={AboutBanner} className="img-fluid" alt="about-banner"/>
       </div>
      </div>
    </section>

    <section className="about-text py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>About Us</h1>
            <div className="about-para pt-3">
                <p>We are owned and operated by a group of parents from all over the world. Our founders were unhappy with the quality of the early childhood education available in their cities, so they got together to build a truly 21st century program.</p>
                <p>We now have schools around the globe, which bring together the world’s best early years practices to deliver the finest preschool experience for children and parents alike.</p>
            </div>
          </div>
       </div>
      </div>
    </section>


    <section className="our-leadership py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>Our Pedagogical Leadership</h1>
            <div className="about-para pt-3">
                <p>Our curriculum is developed in house and supported by a world renowned panel of advisors. Our pedagogical leadership team has over 200 years of combined experience in early years teaching, research and pedagogy across more than ten countries, and in multiple languages.</p>
            </div>

            <div className="row pt-5">
              <div className="col-lg-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson1} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Dr Robert Swartz, Advisor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson2} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Dr Yuuko Tonkovich, Advisor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson3} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Fruzsina Benyei, Curriculum &amp; Training, Asia</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson4} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Emma Phillips, Curriculum &amp; Operations, UK</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson5} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Azah Rahman, Curriculum Coordinator, UAE</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson6} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Karen Norris, Curriculum Coordinator, Hong Kong</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson7} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Tez Razzaq, Curriculum &amp; Training, UK</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson8} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Anjali Motiani, Curriculum Coordinator, India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
       </div>
      </div>
    </section>

    <section className="our-program py-5">
      <div className="container">
      <h1 className="text-center">Our programs</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="about-para py-3">
                <p>We tailor our offering to each local community that we serve. Depending on the location, we offer programs for children from six weeks to six years, rooted in our curriculum.</p>
            </div>
            <Link to="ourcentres" className="my-btn center">Find out More</Link>

          </div>
       </div>
      </div>
    </section>
  
    </>
  );

  

}

export default AboutUs;
