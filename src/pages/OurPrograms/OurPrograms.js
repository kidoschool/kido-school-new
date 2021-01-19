import React from 'react';
import programBanner from '../../assets/Our-Programs-banner.jpg';




function OurPrograms(props) {


  

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={programBanner} className="k-home-banner img-fluid" alt="contact-banner"/>
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
  
    </>
  );

  

}

export default OurPrograms;
