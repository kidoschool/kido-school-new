import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import $ from 'jquery';
import parse from 'html-react-parser';
import {Link} from "react-router-dom";
import Map3 from "../../components/Map/Map3";
import iconInfo from '../../assets/centerareaaccentorangeoption2.svg';
import testiProfile from '../../assets/testiprofile1.jpg';
import Pagination from "react-js-pagination";


// import centerInfo1 from '/center-info-img1.jpg';

function OurCentersInfo(props) {
  const centerContents = JSON.parse(localStorage.getItem("centres"));
    
  const name = props.match.params.slug;
  var selectCentre = {};
  $.each(centerContents.data, function (k, v) {
    if(name == v.slug){
      return selectCentre = v;
    }
  });
  // const [ map_centre, setMap_centre ] = useState({lat: selectCentre.lat,lng:selectCentre.lng});\

  const todosPerPage = 4;
  const [ activePage, setCurrentPage ] = useState( 1 );

  // Logic for displaying current todos
  const indexOfLastTodo  = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos     = centerContents.data.slice( indexOfFirstTodo, indexOfLastTodo );


  const handlePageChange1 = ( pageNumber ) => {
    // console.log( `active page is ${ pageNumber }` );
    setCurrentPage( pageNumber )
 };


  return(
    <>
    
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="info-banner-img d-block" style={{backgroundImage: `url(${selectCentre.img})`}} alt="First slide"></div>
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

    <section className="info-data py-2">
      <div className="container">
        <div className="row">
            <div className="col-lg-7">
              <div className="center-info">
                    <h3 className="title-features">{selectCentre.name}</h3>
                    <div className="d-flex pt-3 small-nav">
                        <Link className="pr-4" to="/">Overview</Link>
                        <Link to="/">Team</Link>
                    </div>
                    <div className="row py-5">
                      {Object.entries(selectCentre.features.slice(0, 4)).map((feat,k1) => {
                        return( <>
                          <div className="col-lg-3 col-6 text-center" key={feat[0]}><img src={iconInfo} width="30"/><p className="img-title-paragraph img-paragraph pt-3">{feat[1].feature.description}</p><p className="img-paragraph">{feat[1].feature_information}</p></div>
                        </>)
                      })}
                    </div>
                    <h2 className="welcome-subtitle text-align-left pb-3">Welcome to Kïdo India</h2>
                    <div className="paragraph pb-3">
                        <div className="p-color">{ parse((selectCentre.introduction).replaceAll("\r\n\r\n", "<br></br>"))}</div>
                    </div>

                    <div className="basics basics-border-bottom">
                        <h2 className="basics-subtitle text-align-left pb-3">School details</h2>
                        <p className="basics-title-paragraph">Curriculum<span className="basics-answer-paragraph"> EYFS, Kïdo</span></p>
                        <p className="basics-title-paragraph">Hours<span className="basics-answer-paragraph"> 9:00am to 7:00 pm</span></p>
                        <p className="basics-title-paragraph">Schedule<span className="basics-answer-paragraph"> Full Day and Half Day</span></p>
                        <p className="basics-title-paragraph">Nutrition<span className="basics-answer-paragraph"> No</span></p>
                        <p className="basics-title-paragraph">Outdoor Space<span className="basics-answer-paragraph"> Yes</span></p>
                    </div>
                    </div>
                <hr/>
            </div>
            
            <div className="offset-lg-1 col-lg-4">
                <div className="cont-form border shadow px-4 py-5 mt-5 text-center">
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

        <div className="team-section py-4" id="team">
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
                    <div className="carousel-item active">
                        <div className="testimonial">
                              <div className="testimonial-review shadow">
                                  <p>
                                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum. Proin maximus purus purus, eu porta lorem imperdiet ultrices. Integer non nisl at leo sagittis tincidunt vel non odio. Nam luctus nisl commodo cursus cursus. Duis quis lobortis urna, a ultricies."
                                  </p>
                              </div>
                              <div className="pic">
                                  <img src={testiProfile} alt=""/>
                                  <div className="testimonial-title">
                                      <h4>williamson</h4>
                                      <small>Web Developer</small>
                                  </div>
                              </div>
                          </div>
                     </div>
                    <div className="carousel-item">
                    <div className="testimonial">
                          <div className="testimonial-review shadow">
                              <p>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum. Proin maximus purus purus, eu porta lorem imperdiet ultrices. Integer non nisl at leo sagittis tincidunt vel non odio. Nam luctus nisl commodo cursus cursus. Duis quis lobortis urna, a ultricies."
                              </p>
                          </div>
                          <div className="pic">
                              <img src={testiProfile} alt=""/>
                              <div className="testimonial-title">
                                  <h4>williamson</h4>
                                  <small>Web Developer</small>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                    <div className="testimonial">
                          <div className="testimonial-review shadow">
                              <p>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum. Proin maximus purus purus, eu porta lorem imperdiet ultrices. Integer non nisl at leo sagittis tincidunt vel non odio. Nam luctus nisl commodo cursus cursus. Duis quis lobortis urna, a ultricies."
                              </p>
                          </div>
                          <div className="pic">
                              <img src={testiProfile} alt=""/>
                              <div className="testimonial-title">
                                  <h4>williamson</h4>
                                  <small>Web Developer</small>
                              </div>
                          </div>
                      </div>
                    </div>
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
          <hr/>

          <div className="location py-4" id="map-location">
          <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Location</h2>
            <div className="row">
              <div className="col-lg-12">
                  <div className="map">
                  <Map3 map_centre={{lat: selectCentre.lat,lng: selectCentre.lng}} centerContents={[selectCentre]} map_zoom={13}   />
                  </div>
              </div>
            </div>
          </div>



          <div className="related_centers py-4" id="related-centers">
            <h2 className="basics-subtitle text-align-left pb-3"><i class="fas fa-th-list pr-3"></i>Related centers</h2>
            <div className="row">
              <div className="col-lg-12">
              <div className="card-deck">
                {Object.entries(currentTodos).map((item, k) => {
                  // console.log(item)
                  return (
                    <>
                        <div class="card" key={item[0]}>
                          <div style={{ backgroundImage: `url(${item[1].img})` }} className="card-img-top"></div>
                          <div className="label">{$("#search_filter > option[value=" + item[1].city + "]").text()}</div>
                          <div class="card-body">
                            <p class="card-title name"><Link to={{ pathname: "/our-centres/" + ($("#search_filter > option[value=" + item[1].city + "]").text()).toLowerCase().split(' ').join('-') + "/" + item[1].slug + "/" }}>{item[1].name}</Link></p>
                            <div className="row justify-content-center">
                              <div className="col-lg-6 col-6 text-center">
                                <div className="card-icon1 py-2"><img src={'/images/' + (item[1].features[0].feature.slug) + ".svg"} className="img-fluid" width="25" /></div>
                                <p className="card-text sch-config-text">{item[1].features[0].feature.description}</p>
                                <p className="card-text"><small className="text-muted">{item[1].features[0]["feature_information"]}</small></p>
                              </div>
                              <div className="col-lg-6 col-6 text-center">
                                <div className="card-icon2 py-2"><img src={'/images/' + (item[1].features[1].feature.slug) + ".svg"} className="img-fluid" width="25" /></div>
                                <p className="card-text sch-config-text">{item[1].features[1].feature.description}</p>
                                <p className="card-text"><small className="text-muted">{item[1].features[1]["feature_information"]}</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </>)
                })
                }
              </div>
              <div className="pagination pt-3">
                <Pagination
                  activePage={ activePage }
                  itemsCountPerPage={ 4 }
                  totalItemsCount={ centerContents.data.length }
                  pageRangeDisplayed={ 4 }
                  onChange={ handlePageChange1 }
                />
            </div>
            </div>
            </div>
          </div>







      
      </div>
    </section>
  
    </>
  );

}
 
export default OurCentersInfo;
