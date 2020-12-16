import React, {useState} from 'react';
import Banner1 from '../../assets/Slider-banner1.jpg';
import Banner2 from '../../assets/Slider-banner2.jpg';
import Banner3 from '../../assets/Slider-banner3.jpg';
import Banner4 from '../../assets/Slider-banner4.jpg';
import Banner5 from '../../assets/Slider-banner5.jpg';
import Banner6 from '../../assets/Slider-banner6.jpg';
import Banner7 from '../../assets/Slider-banner7.jpg';
import Banner8 from '../../assets/Slider-banner8.jpg';
import Banner9 from '../../assets/Slider-banner9.jpg';



function Home(props) {


  

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
  
    </>
  );

  

}

export default Home;
