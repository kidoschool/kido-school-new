import React from 'react';
import programBanner from '../../assets/Our-Programs-banner.jpg';
import programCard1 from '../../assets/programs-card-img1.jpg';
import programCard2 from '../../assets/programs-card-img2.jpg';
import programCard3 from '../../assets/programs-card-img3.jpg';
import programCard4 from '../../assets/programs-card-img4.jpg';
import programCard5 from '../../assets/programs-card-img5.jpg';
import programCard6 from '../../assets/programs-card-img6.jpg';
import programIcon1 from '../../assets/programs-icon1.svg';
import programIcon2 from '../../assets/programs-icon2.svg';


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

    <section className="days-at-kido pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>Days at Kïdo</h1>
            <p className="description pt-3">Our international team of experts has created a comprehensive pedagogy, known as the Kïdo Early Years Program. This innovative system incorporates the best practices from teaching philosophies from around the world, such as Montessori, Reggio Emilia and the theory of Multiple Intelligences. The result is a play-based learning experience that combines child and teacher-led activities with free and structured play in inspirational settings. The program is customised to the developmental ability of each child. We modify our curriculum for each country we operate in, to adhere to their existing national curriculum frameworks. In the UK, the Kïdo curriculum is modified to adhere to the EYFS framework.</p>
          </div>
       </div>
      </div>
    </section> 


    <section className="who-we-teach pt-5">
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


    <section className="how-we-teach pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>How we teach</h1>
            <p className="description pt-3">We divide our school year into six cycles, each lasting six weeks. At the end of each cycle, parents are given a portfolio of their child’s work. In the UK, the Kïdo curriculum is modified to adhere to the EYFS framework and does not offer all of the elements listed here. Discoverers enjoy their own dedicated learning system. For the other levels, weeks are divided into two different types of day:</p>
                <div className="row justify-content-center pt-4">
                  <div className="col-lg-6">
                    <div className="we-teach-data bg-light border p-4">
                        <img src={programIcon1} className="img-fluid" width="50"/>
                        <h3 className="teact-head pt-4 pb-2">Skills Days</h3>
                        <p>These days are dedicated to our proprietary programs in math, literacy, STEM, art and much else. We use different learning stations for each activity, and combine sensory play, guided learning and workbook activities.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="we-teach-data bg-light border p-4">
                        <img src={programIcon2} className="img-fluid" width="50"/>
                        <h3 className="teact-head pt-4 pb-2">Explorer Days</h3>
                        <p>Children tackle adult-led project, problem and inquiry-based learning programs, which integrate the knowledge they learn during the Skills Days. Over the course of six weeks, children will develop a project through arts and crafts, math, science, literacy or music-related activities.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section> 


    <section className="what-we-teach py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>What we teach</h1>
            <p className="description pt-3">Find out what your little ones will be learning at our schools. The majority of our learning centers utilise KEYS, our proprietary curriculum. In locations where KEYS is unavailable, we teach an equivalent curriculum that follows the relevant national framework.</p>

            <div className="row justify-content-center pt-4">
                  <div className="col-lg-6">
                  <div className="accordion" id="accordionExample">
                    <div className="card1">
                      <div className="card-header card-header1" id="headingOne">
                        <h2 className="card-text mb-0">
                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Studio K
                          </button>
                        </h2>
                        <p className="px-3">Art is a core part of our curriculum</p>
                      </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">Art is a core part of our curriculum. Our artistic activities promote self-expression and help develop confidence, motor skills and imagination</li>
                            <li className="what-we-teach-list pb-3">Every school features an atelier – a creative space where children can experiment and express themselves</li>
                            <li className="what-we-teach-list pb-3">Children enjoy activities created by our teachers or a special guest contributor</li>
                            <li className="what-we-teach-list pb-3">We take children on fun trips to art museums and age-appropriate exhibitions</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingTwo">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          K-Schol
                        </button>
                      </h2>
                      <p className="px-3">Our exclusive English and literacy program</p>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">We use children’s literature to awaken a love of learning within our students at an early age.</li>
                            <li className="what-we-teach-list pb-3">We encourage inquisitiveness which helps develop learning tools both inside and outside the classroom.</li>
                            <li className="what-we-teach-list pb-3">Children give small presentations to the className to improve their self-confidence.</li>
                            <li className="what-we-teach-list pb-3">We give the children small writing activities so they can begin writing the sounds they know – the first step towards them writing complete words and phrases.</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingThree">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          K-Gym
                        </button>
                      </h2>
                      <p className="px-3">We encourage healthy, happy students through K-Gym</p>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">We provide a range of fun, structured activities, coordinated by our staff or a guest specialist.</li>
                            <li className="what-we-teach-list pb-3">Children develop their motor skills through dance sessions.</li>
                            <li className="what-we-teach-list pb-3">Children engage in team sports and gymnastics to help develop coordination and balance.</li>
                            <li className="what-we-teach-list pb-3">Days are split into three parts: Warm-up (e.g. role-play or dance games), Main Activity (e.g. obstacle course or gymnastic class) and Cool-down (e.g. yoga or meditation).</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingFour">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Arabic
                        </button>
                      </h2>
                      <p className="px-3">Our Arabic program forms an integral part of the Kido Early Years program for all ages in Dubai.</p>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">The Arabic language time during the day (30-45 minutes each day in the Half-Day Program, and a further 90 minutes in the Extended Day Program) mirrors the English program in structure.</li>
                            <li className="what-we-teach-list pb-3">Stories used during the English program are then used during Arabic time, so children can contextualise the language and learn it faster.</li>
                            <li className="what-we-teach-list pb-3">Stress is placed on developing **social communication skills in Arabic** as well, by conducting social activities such as snack time, lunch time or part of the free play time in Arabic.</li>
                            <li className="what-we-teach-list pb-3">Children progress from one level to the next in Arabic, as they do in our main program.</li>
                            <li className="what-we-teach-list pb-3">These sessions include further practice in reading, writing and speaking; public speaking and confidence building modules in Arabic; math instructions in Arabic and games and activities to enhance social and emotional development, conducted in Arabic.</li>
                            <li className="what-we-teach-list pb-3">All Kido Dubai centres integrate Arabic in the program. Age Group: 3 years and older</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingFIve">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Bilingual Spanish
                        </button>
                      </h2>
                      <p className="px-3">A bilingual experience in our Texas schools.</p>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">Across our Texas schools, our English curriculum is mirrored in Spanish. Not only do children speak,read and write in the language, they also use it during maths, art and STEM activities</li>
                            <li className="what-we-teach-list pb-3">Most importantly, social time is also conducted in Spanish, encouraging verbal fluency in social situations.</li>
                            <li className="what-we-teach-list pb-3">Centres: Rice Village - Houston, River Place - Austin Age group: 6 weeks to 5 years</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="accordion" id="accordionExample">
                        <div className="card1">
                          <div className="card-header card-header1" id="headingOne1">
                            <h2 className="card-text mb-0">
                              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                K-STEM
                              </button>
                            </h2>
                            <p className="px-3">How we integrate science, technology and coding</p>
                          </div>
                        <div id="collapseOne1" className="collapse" aria-labelledby="headingOne1" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">We develop our students’ hand-eye coordination through fun activities like stacking blocks or sticking things together.</li>
                                <li className="what-we-teach-list pb-3">We help our students understand the functionality of specific tools and materials through simple and fun challenges.</li>
                                <li className="what-we-teach-list pb-3">We use computer technology to improve literacy and vocabulary.</li>
                                <li className="what-we-teach-list pb-3">We give our students problem-solving tasks that require teamwork to overcome, to teach them how to evaluate situations.</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingTwo2">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                              K-Math
                            </button>
                          </h2>
                          <p className="px-3">A fun and engaging way to learn about maths</p>
                        </div>
                        <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">We introduce children to mathematical concepts at an early age and revisit them repeatedly through their levels.</li>
                                <li className="what-we-teach-list pb-3">Children enjoy math challenges and games designed to keep them engaged and motivated.</li>
                                <li className="what-we-teach-list pb-3">The challenges gradually become more and more complex as the children progress.</li>
                                <li className="what-we-teach-list pb-3">Our activities make children apply math to everyday life.</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingThree3">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                              Languages
                            </button>
                          </h2>
                          <p className="px-3">Many of our schools implement a bilingual curriculum.</p>
                        </div>
                        <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">We encourage our children to develop a strong relationship with both English and Spanish.</li>
                                <li className="what-we-teach-list pb-3">To begin with, 80% of our curriculum is taught in Spanish, with 20% taught in English.</li>
                                <li className="what-we-teach-list pb-3">From the age of two onwards, this transitions into a 50/50 bilingual program.</li>
                                <li className="what-we-teach-list pb-3">We use hands-on, play-based and exploratory activities to strengthen their communication skills.</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingFour4">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                              Bilingual Mandarin
                            </button>
                          </h2>
                          <p className="px-3">We offer a fully bilingual program with one english teacher and one manadarin teacher present at all times.</p>
                        </div>
                        <div id="collapseFour4" className="collapse" aria-labelledby="headingFour4" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">Mandarin is taught at native level, with even non native speakers able to increase their level of Mandarin to fluency by the time they reach primary school.</li>
                                <li className="what-we-teach-list pb-3">Children learn through a variety of activities such as: story time imaginative play, arts and crafts, science, collaborative games as well as teacher led focus time which builds vocabulary and language.</li>
                                <li className="what-we-teach-list pb-3">we offer extended hours of Mandarin immersion that provide diverse opportunities to further develop children’s Mandarin skills through social interaction, free play, snack time and more focussed lessons.</li>
                                <li className="what-we-teach-list pb-3">Center : All our Kido Hong Kong centres are fully bilingual. Age Group: 3 years and older</li>
                            </ul>
                          </div>
                        </div>
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
