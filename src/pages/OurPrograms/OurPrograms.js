import React from 'react';
import programBanner from '../../assets/Our-Programs-banner.jpg';
import programCard1 from '../../assets/programs-card-img1.jpg';
import programCard2 from '../../assets/programs-card-img2.jpg';
import programCard3 from '../../assets/programs-card-img3.jpg';
import programCard4 from '../../assets/programs-card-img4.jpg';
import programCard5 from '../../assets/programs-card-img5.jpg';
import programCard6 from '../../assets/programs-card-img6.jpg';




function OurPrograms(props) {


  

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={programBanner} className="img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="days-at-kido py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>Days at Kïdo</h1>
            <p className="description pt-3">Our international team of experts has created a comprehensive pedagogy, known as the Kïdo Early Years Program. This innovative system incorporates the best practices from teaching philosophies from around the world, such as Montessori, Reggio Emilia and the theory of Multiple Intelligences. The result is a play-based learning experience that combines child and teacher-led activities with free and structured play in inspirational settings. The program is customised to the developmental ability of each child. We modify our curriculum for each country we operate in, to adhere to their existing national curriculum frameworks. In the UK, the Kïdo curriculum is modified to adhere to the EYFS framework.</p>
          </div>
       </div>
      </div>
    </section> 


    <section className="who-we-teach pb-5">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1>Who we teach</h1>
            <div className="who-we-teach-para pt-3">
                <p>Our program is split into six levels. While each level roughly corresponds to an age group, in practice we usually move children to the next level when we feel they are ready. In the UK, the Kïdo curriculum is modified to adhere to the EYFS framework and does not offer all of the elements listed here.</p>
            </div>

            <div className="row pt-5">
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard1} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Discoverers</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>6 - 15 months</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard2} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Adventurers</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>12 - 27 months</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard3} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Experimenters</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>24 - 39 months</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard4} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Pathfinders</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>61 - 51 months</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard5} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Seekers</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>48 - 63 months</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard6} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <h3 className="card-title pb-2">Pioneers</h3><hr/>
                    <p className="card-text">Age range &nbsp;|&nbsp; <strong>60 - 75 months</strong></p>
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

export default OurPrograms;
