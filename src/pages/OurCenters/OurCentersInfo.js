import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import $ from 'jquery';
import parse from 'html-react-parser';
import {Link} from "react-router-dom";
import Map3 from "../../components/Map/Map3";
import RelatedCenters from "../../components/RelatedCenters";
import iconInfo from '../../assets/centerareaaccentorangeoption2.svg';
import testiProfile from '../../assets/testiprofile1.jpg';
import activityCard1 from '../../assets/activity-card1.jpg';
import activityCard2 from '../../assets/activity-card2.jpg';
import activityCard3 from '../../assets/activity-card3.jpg';
import activityCard4 from '../../assets/activity-card4.jpg';

function OurCentersInfo(props) {
  
  const centerContents = JSON.parse(localStorage.getItem("centres"));

  const name = props.match.params.slug;
  var selectCentre = {};
  $.each(centerContents, function (k, v) {
    if(name == v.slug){
      return selectCentre = v;
    }
  });

  // console.log(selectCentre)
  
  return(
    <>
    
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
              <div className="overlay1"></div>
                <div className="info-banner-img d-block" style={{backgroundImage: `url(${selectCentre.img})`}} alt="First slide"></div>
                <div className="carousel-caption d-md-block">
                    <h1 className="banner-head1 text-white">Welcome to {selectCentre.name}</h1>
                    <div className="banner mt-4">
                        <a href="#center-info-data" className="btn my-btn center">Take a look around our nursery</a>
                    </div>
                </div>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    </section>

    <section className="info-data py-2" id="center-info-data">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="center-info">
                    <h3 className="title-features text-center">{selectCentre.name}</h3>
                    {/* <div className="d-flex pt-3 small-nav">
                        <Link className="pr-4" to="/">Overview</Link>
                        <Link to="/">Team</Link>
                    </div> */}
                    <div className="row  justify-content-center py-4">
                      {Object.entries(selectCentre.features.slice(0, 4)).map((feat,k1) => {
                        return( <>
                          <div className="col-lg-4 col-6 text-center" key={feat[0]}><img src={'/images/'+(feat[1].feature.slug) +".svg"} width="30"/><p className="img-title-paragraph img-paragraph pt-3">{feat[1].feature.description}</p><p className="img-paragraph">{feat[1].feature_information}</p></div>
                        </>)
                      })}
                      <div className="pt-4">
                        <a href="#" className="btn my-btn center" data-toggle="modal" data-target="#exampleModal">
                          Book my tour
                        </a>
                      </div>
                    </div>
              
                    {/* <div className="basics basics-border-bottom">
                        <h2 className="basics-subtitle text-align-left pb-3">School details</h2>
                        {
                          Object.keys(selectCentre.school_details).map(function(key) {
                            return (<><p className="basics-title-paragraph">{key}<span className="basics-answer-paragraph"> {selectCentre.school_details[key]}</span></p> </>)
                        })
                        }
                    </div> */}
                  </div>
                <hr/>
            </div>
            
            {/* <div className="offset-lg-1 col-lg-4">
                <div className="cont-form border shadow px-4 py-5 mt-5 text-center">
                  <h1>Contact {selectCentre.name}</h1>
                  <div className="send-msg pt-4">
                  <button className="contact-button no-padding" id="send-message-btn"><i className="fas fa-envelope pr-3"></i>Send a message</button>
                  <button className="contact-button no-padding" id="give-call-btn"><i className="fas fa-phone pr-3"></i>Give us a call</button>
                  <button className="contact-button no-padding" id="facebook-btn"><i className="fab fa-facebook-f pr-3"></i>Facebook</button>
                  <button className="contact-button no-padding" id="instagram-btn"><i className="fab fa-instagram pr-3"></i>Instagram</button>
                  </div>
                </div>
            </div> */}
        
        </div>
        </div>
        </section>

        <section className="about-school py-5" id="about_school">
            <div className="container">
              <div className="row justify-content-center">
              <div className="col-lg-7">
                      <h2 className="welcome-subtitle text-align-left pb-3">Welcome to {(selectCentre.name).split(' ').slice(0,2).join(' ').replaceAll("Safari Kid", "India")}</h2>
                      <div className="paragraph pb-3">
                          <div className="p-color">{ parse((selectCentre.introduction).replaceAll("\r\n\r\n", "<br></br>"))}</div>
                      </div>
                      <a href="#" className="btn my-btn center" data-toggle="modal" data-target="#exampleModal">
                        Book my tour
                      </a>
                    </div>

                    <div className="col-lg-5">
                      <div className="info-intro-img">
                          <img src={selectCentre.img} className="img-fluid center-intro-img"/>
                      </div>
                      <div className="review-score">
                        <div className="review-text text-center">
                          <h4 className="text-white">parent-rated</h4>
                          <h1 className="text-white">4.5/5</h1>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
        </section>

        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            {/* <div class="modal-content"> */}
              <div className="row justify-content-center">
                <div className="col-lg-10">
              <div className="cont-form border bg-white shadow px-4 py-5 mt-5 text-center">
                <h1>Contact {selectCentre.name}</h1>
                <div className="send-msg pt-4">
                <button className="contact-button no-padding" id="send-message-btn"><i className="fas fa-envelope pr-3"></i>Send a message</button>
                <button className="contact-button no-padding" id="give-call-btn"><i className="fas fa-phone pr-3"></i>Give us a call</button>
                <button className="contact-button no-padding" id="facebook-btn"><i className="fab fa-facebook-f pr-3"></i>Facebook</button>
                <button className="contact-button no-padding" id="instagram-btn"><i className="fab fa-instagram pr-3"></i>Instagram</button>
                </div>
              </div>
              </div>
              </div>
          {/* </div> */}
        </div>
        </div>
        

        <section className="team-section py-4" id="team">
            <div className="container">
            <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Team</h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                    {Object.entries(selectCentre.team).map((testiteam,k1) => {
                        return( <>
                        <div className="carousel-item active">
                            <div className="testimonial">
                                  <div className="testimonial-review shadow">
                                      <p>
                                          {testiteam[1].desc}
                                      </p>
                                  </div>
                                  <div className="pic">
                                      <img src={testiteam[1].image} className="img-fluid" width="60" alt=""/>
                                      <div className="testimonial-title">
                                          <h4>{testiteam[1].name}</h4>
                                          <small>{testiteam[1].title}</small>
                                      </div>
                                  </div>
                              </div>
                        </div>
                        </>)
                          })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
              </div>
              </div>
          </section>

          <hr/>

          <section className="location py-4" id="map-location">
            <div className="container">
            <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Location</h2>
              <div className="row no-gutters">
                <div className="col-lg-6">
                    <div className="map-label">
                        <span>{parse(selectCentre.intro)}</span>
                    </div>
                    <div className="map">
                    <Map3 map_centre={{lat: selectCentre.lat,lng: selectCentre.lng}} centerContents1={[selectCentre]} map_zoom={13}   />
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="finding-us bg-blue border p-5">
                      <h1 className="banner-head1 text-white">Finding us</h1>
                      <p className="text-white">Our nursery is in the Ram Quarter in Wandsworth, adjacent to the river walk and four minutes from Wandsworth Town station.</p>
                        <div className="py-3">{
                          Object.keys(selectCentre.school_details).map(function(key) {
                            return (<><ul className="basics-title-paragraph list-unstyled"><i class="fas fa-check-circle px-3"></i>{key}<li className="basics-answer-paragraph text-white pl-5"> {selectCentre.school_details[key]}</li></ul> </>)
                        })
                        }
                        </div>
                        <div className="pt-4">
                        <a href="#" className="btn my-btn1 center" data-toggle="modal" data-target="#exampleModal">
                          Book my tour
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="activity py-5">
          <div className="container">
          <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Activities & education</h2>
            <div className="row justify-content-center">
            
              <div className="col-lg-3 py-2">
                <div class="card">
                  <img class="card-img-top-activity img-fluid" src={activityCard1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Languages</h5>
                    <p class="card-text">We learn in Mandarin, French, Spanish & British Sign Language.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 py-2">
                  <div class="card">
                  <img class="card-img-top-activity img-fluid" src={activityCard2} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Languages</h5>
                    <p class="card-text">We learn in Mandarin, French, Spanish & British Sign Language.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 py-2">
                  <div class="card">
                  <img class="card-img-top-activity img-fluid" src={activityCard3} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Languages</h5>
                    <p class="card-text">We learn in Mandarin, French, Spanish & British Sign Language.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 py-2">
                  <div class="card">
                  <img class="card-img-top-activity img-fluid" src={activityCard4} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Languages</h5>
                    <p class="card-text">We learn in Mandarin, French, Spanish & British Sign Language.</p>
                  </div>
                </div>
              </div>
              <div className="borchure-button pt-4">
              <a href="#" className="btn my-btn center">Download the Brochure</a>
                </div>
            </div>
          </div>
          </section>


          <section className="faq py-5">
            <div className="container">
            <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Some of the things you might want to know about Kïdo</h2>
              <div className="row row justify-content-center">
                <div className="col-lg-12">
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Kïdo's COVID response</h3>
                    <p className="pl-5">In line with the current government guidance, Kido nurseries remain open. We continually adhere to best practices around enhanced cleaning, social distancing, the regular taking of temperatures and maintenance of strict bubbles to limit disruptions in the event of a COVID-19 case. Out of hours tours remain available throughout the week.</p>
                  </div>
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Our philosophy</h3>
                    <p className="pl-5">The nursery is inspired by Reggio Emilia’s philosophy. Children have the space to find something that encourages them to discover, play and learn in every corner.</p>
                    <p className="pl-5">We believe that a combination of free and structured play, an engaging and interactive learning environment, and an abundance of love, care and attention provide the most solid foundation for children in the early years.</p>
                  </div>
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Schedule & hours</h3>
                    <p className="pl-5">We're open Monday to Friday from 7:30am to 6:30pm. Here to care for your child with both a full-time and part-time capacity.</p>
                  </div>
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Food & nutrition</h3>
                    <p className="pl-5">Your little one needs lots of energy to learn and play. Our healthy, nutritious meals will make sure they've got plenty. We serve breakfast, lunch and a healthy snack too. We also have vegetarian options and are happy to chat about any specific dietary requirements your child might have.</p>
                  </div>
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Our staff</h3>
                    <p className="pl-5">All of our teachers are formally educated and have a wealth of experience in the childcare industry and a genuine passion for teaching children. We put our heart into it and welcome teachers from different nationalities and cultures. </p>
                    <p className="pl-5">This along with the 100 hours' internal training is all to ensure we give your child the very best learning and development experience while they're in our care.</p>
                  </div>
                  <div className="faq-ques py-4">
                    <h3 className="text-primary"><i class="fas fa-thumbs-up px-3"></i>Communication with parents</h3>
                    <p className="pl-5">You won't miss a moment of their development. Through our app for parents, you'll get regular updates, pictures and communication from your child's teacher throughout the day. Also during pick-up and drop-off we'll be sure to talk through anything you need to know and answer any of your questions. </p>
                  </div>
                </div>

                <div className="borchure-button pt-4">
                  <a href="/faq" className="btn my-btn center">Ask us a Question</a>
                </div>
              </div>
            </div>
          </section>
          
          
          <section className="related_centers py-4" id="related-centers">
              <div className="container">
                <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Related centers</h2>
                <div className="find-our-centers row">
                  <div className="col-lg-12">
                      <RelatedCenters/>
                </div>
              </div>
              </div>
          </section>

     
    
  
    </>
  );

}
 
export default OurCentersInfo;
