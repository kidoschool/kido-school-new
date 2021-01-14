import React from 'react';
import Banner1 from '../../assets/Slider-banner1.jpg';
import Banner2 from '../../assets/Slider-banner2.jpg';
import Banner3 from '../../assets/Slider-banner3.jpg';
import Banner4 from '../../assets/Slider-banner4.jpg';
import Banner5 from '../../assets/Slider-banner5.jpg';
import Banner6 from '../../assets/Slider-banner6.jpg';
import Banner7 from '../../assets/Slider-banner7.jpg';
import Banner8 from '../../assets/Slider-banner8.jpg';
import Banner9 from '../../assets/Slider-banner9.jpg';
import Banner_video from '../../assets/banner-video-Mp4.mp4';
import $ from 'jquery';




function Home(props) {

  // $(document).ready(function(){
      // $("#vid").play();
  // });

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                <a href="#" className="btn-banner">Find a center near you</a>
              </div>
              <img className="main-banner-img d-block w-100" src={Banner1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner4} alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner5} alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner6} alt="Sixth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner7} alt="Seventh slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner8} alt="Eight slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <a href="#" className="btn-banner">Find a center near you</a>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner9} alt="Nine slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    </section>

    <section className="welcome-kido py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div class="col-lg-10">
            <h1>Welcome to Kïdo</h1>
            <p class="subtitle subtitle-smaller">Lighting up your child's early years</p>
            <p class="description">We are dedicated to providing the highest quality early years education and care in the world. We are creating magical and engaging learning spaces infused with cutting edge pedagogy and great teachers to nurture and enhance every child’s innate curiosity, creativity and ability to be a lifelong learner.</p>
            </div>
       </div>
      </div>
    </section>

    <section className="our-philosophy bg-light py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div class="col-lg-10">
            <div className="row">
              <div className="col-lg-5">
                <h1>Our philosophy</h1>
                <p class="description pt-4">We believe that a combination of free and structured play, an engaging and interactive learning environment, and an abundance of love, care and attention provide the most solid foundation for children in the early years.</p>
              </div>
              <div className="col-lg-5 offset-lg-1">
              <video width="450" id="vid" controls autoPlay muted>
                <source src={Banner_video} type="video/mp4"/>
                Your browser does not support HTML video.
              </video>              
              </div>
            </div>
            </div>
       </div>
      </div>
    </section>

    <section className="find-centers py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
        <h1>Where to find our centres</h1>
          <div class="col-lg-12">
            <ul class="list-inline d-flex justify-content-center py-4">
              <li class="list-inline-item pr-3"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">Austin</a></li>
              <li class="list-inline-item pr-3"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">Houston</a></li>
              <li class="list-inline-item pr-3"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">Greater London</a></li>
              <li class="list-inline-item pr-3"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">Dubai</a></li>
              <li class="list-inline-item pr-3"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">India</a></li>
              <li class="list-inline-item"><a class="btn btn-outline-primary" onclick="getLocalization(30.266636, -97.744399 )" href="https://kido.school/en/ourcentres/">Hong kong</a></li>
            </ul>
          </div>
       </div>
      </div>
    </section>
  
    </>
  );

  

}

export default Home;
