import React from 'react';
import RelatedCenters from "../../components/RelatedCenters";
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
import TestiParent1 from '../../assets/Parent-Testimonial-1.jpg';
import TestiParent2 from '../../assets/Parent-Testimonial-2.jpg';
import LatestNews1 from '../../assets/latest-news-pic1.jpg';
import LatestNews2 from '../../assets/latest-news-pic2.jpg';
import {Link} from "react-router-dom";

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
                <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
              </div>
              <img className="main-banner-img d-block w-100" src={Banner1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner4} alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner5} alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner6} alt="Sixth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner7} alt="Seventh slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner8} alt="Eight slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">early years, reimagined</h2>
                  <Link to="ourcentres" className="btn-banner">Find a center near you</Link>
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
          <div className="col-lg-10">
            <h1>Welcome to Kïdo</h1>
            <p className="subtitle subtitle-smaller">Lighting up your child's early years</p>
            <p className="description">We are dedicated to providing the highest quality early years education and care in the world. We are creating magical and engaging learning spaces infused with cutting edge pedagogy and great teachers to nurture and enhance every child’s innate curiosity, creativity and ability to be a lifelong learner.</p>
            </div>
       </div>
      </div>
    </section>

    <section className="our-philosophy bg-light py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-5">
                <h1>Our philosophy</h1>
                <p className="description pt-4">We believe that a combination of free and structured play, an engaging and interactive learning environment, and an abundance of love, care and attention provide the most solid foundation for children in the early years.</p>
              </div>
              <div className="col-lg-5 offset-lg-1">
              <video width="450" id="vid" controls autoPlay loop muted>
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
          <div className="col-lg-12">
            <div className="getlocation-btn">
            <ul className="list-inline d-flex justify-content-center py-5">
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=austin">Austin</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=houston">Houston</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=greater-london">Greater London</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=dubai">Dubai</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=india">India</Link></li>
              <li className="list-inline-item"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=hong-kong">Hong kong</Link></li>
            </ul>
            </div>
            <div className="find-our-centers">
            <RelatedCenters/>
            </div>
            <div className="text-center pt-5">
            <Link to="ourcentres" className="my-btn center">Find a centre</Link>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className="parent-testi bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
          <h1 className="pb-4">What our parents say about our schools</h1>
            <div className="col-md-10">
            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                  <li data-target="#carouselExampleControls1" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleControls1" data-slide-to="1"></li>
                </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="parent_testimonial">
                    <div className="pics"><img src={TestiParent1} alt=""/></div>
                    <div className="parent_testimonial-content">
                    <p className="description">Both my children go to nursery and are very happy there</p>
                    <h3 className="parent_testimonial-title">Parent<small className="post">Parent, Chiswick</small></h3>
                    </div>
                  </div>
                  </div>
                  <div className="carousel-item">
                  <div className="parent_testimonial">
                    <div className="pics"><img src={TestiParent2} alt=""/></div>
                    <div className="parent_testimonial-content">
                    <p className="description">Both my children go to nursery and are very happy there</p>
                    <h3 className="parent_testimonial-title">Parent<small className="post">Parent, Windsor</small></h3>
                    </div>
                  </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            </div>
          </div>
        </div>
    </section>

    <section className="latest-news py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
          <div className="row">
          <div className="col-lg-4">
          <div className="latest-news-text-blue">
            <h1 className="subtitle">Latest News</h1>
            <p>Find out how we’ve been making headlines all over the world or read about the latest updates to our schools and programs. You can also check out our blog, and get helpful parenting tips from our teachers, hub team and contributors.</p>
          </div>
          </div>
          <div className="col-lg-4">
              <div className="card">
                <img className="card-img-top blog-img" src={LatestNews1} alt="latest news"/>
                <div className="card-body">
                  <p className="card-text">March 27th</p>
                  <h5 className="card-title pb-5">Tips For Preschool Home-Schooling</h5>
                  <a href="http://localhost:3000/en/news/tips-for-preschool-home-schooling/" className="btn btn-outline-primary">Read more</a>
                </div>
              </div>
          </div>
          <div className="col-lg-4">
          <div className="card">
                <img className="card-img-top blog-img" src={LatestNews2} alt="latest news"/>
                <div className="card-body">
                  <p className="card-text">March 27th</p>
                  <h5 className="card-title pb-5">Supporting Children During A School Closure</h5>
                  <a href="http://localhost:3000/en/news/supporting-children-during-a-school-closure/" className="btn btn-outline-primary">Read more</a>
                </div>
              </div>
          </div>
       </div>
       </div>
       </div>
      </div>
    </section>
  
    </>
  );

  

}

export default Home;
