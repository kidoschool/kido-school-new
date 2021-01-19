import React from 'react';
import KidoBanner from '../../assets/kido-home-banner.jpg';
import kido_home_video from '../../assets/KidoHome-video.mp4';
import KidoCard1 from '../../assets/kido-home-card-img1.jpg';
import KidoCard2 from '../../assets/kido-home-card-img2.jpg';
import KidoCard3 from '../../assets/kido-home-card-img3.jpg';
import KidoCard4 from '../../assets/kido-home-card-img4.jpg';
import KidoCard5 from '../../assets/kido-home-card-img5.jpg';
import KidoCard6 from '../../assets/kido-home-card-img6.jpg';

function KidoHome(props) {

  return(
    <>
     <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={KidoBanner} className="k-home-banner banner-images img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="virtual-preschool py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>Virtual Preschool</h1>
            <p className="subtitle subtitle-smaller">Customised preschool, for everyone, everywhere</p>
            <p className="description">Kïdo Home is our virtual preschool and kindergarten program, where we deliver our curriculum, international network of teachers and multiple languages to children anywhere in the world. All at a fraction of the price of a regular preschool. High quality pedagogy and teaching, accessible to anyone, without the need for a physical presence. Available initially in four timezones - USA, the UAE, India and Hong Kong. Visit the Kïdo Home website to learn more, and book a free trial class!</p>
            <div className="kido-home-website text-center pt-5">
              <a href="https://www.kidohome.net/" target='_blank' rel="noreferrer" className="my-btn center">Visit Kido Home Website</a>
            </div>
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
                <h1>How it Works</h1>
                <p className="description pt-4">Teacher led activities and lesson plans, delivered via live video sessions in small groups are complemented by touch screen interactive modules and home activities. One on one time with parents and teachers and an ability to move children within groups, unconstrained by age, ensure customisation to the child's abilities. ​ Watch the video to see a class in action</p>
              </div>
              <div className="col-lg-6 offset-lg-1">
              <video width="550" id="vid" controls autoPlay loop muted>
                <source src={kido_home_video} type="video/mp4"/>
                Your browser does not support HTML video.
              </video>              
              </div>
            </div>
            </div>
       </div>
      </div>
    </section> 

    <section className="highlights py-5">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1>Highlights</h1>
            <div className="highlights-para pt-3">
                <p>Kïdo Home is a complete preschool program for 2-6 year olds, based on our curriculum, with a tested and effective means of delivery. Minimal parental support is required in most instances, and the program runs for two hours a day, with breaks. All at a fraction of the cost of a comparable international preschool.</p>
            </div>

            <div className="row pt-5">
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard1} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">Small Groups</h4>
                    <p className="card-text">Ratios 1:6 or 1:8 for live interactive video sessions ensure engagement and personal attention</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard2} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">Touchscreen Interactive</h4>
                    <p className="card-text">Literacy and math modules taught via interactive touchscreen technology, with a teacher present at all times</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard3} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">Complete Program</h4>
                    <p className="card-text">Encompassing literacy, math, art, STEM, physical development and life skills, so children are more than school ready</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard4} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">International Teachers</h4>
                    <p className="card-text">Our global teacher network ensures best in class teaching and language support</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard5} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">Home Activities</h4>
                    <p className="card-text">Monthly engagement kits and video based lesson plans for home activities to complement the online learning.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard6} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">And More</h4>
                    <p className="card-text">Specialist, yoga, mindfulness, music and other classes. Onsite add ons for project based learning and more</p>
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

export default KidoHome;
