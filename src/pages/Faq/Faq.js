import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import FaqBanner from '../../assets/Faq-banner.jpg';


function Faq(props) {

    useEffect(() => {
        filterFaq();
    }, []);
    
    const filterFaq = () => {
        $('select').on('change', function() {
            // alert( this.value);
            $('.card1').css("display","none");
            $('.'+this.value).css("display","block");
        });
    }

    return(
      <>
        <section className="main-banner">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <img src={FaqBanner} className="img-fluid w-100" alt="contact-banner"/>
                </div>
            </div>
        </section>

        <section className="lot-of-questions pt-4">
            <div className="container">
                <div className="row justify-content-center py-3">
                    <div className="col-lg-10">
                    <p className="description">You certainly have a lot of questions for us, please see if the answers below can address some of them.</p>
                    <p className="description pt-3">If you have any other questions, feel free to <Link className="faq-link" to="/contact-us">contact our teams</Link> directly.</p>
                    </div>
                </div>
            </div>
        </section> 

        <section className="faq  py-4">
            <div className="container">
                <div className="row justify-content-center py-3">
                    <div className="col-lg-10 bg-light border p-5">

                    <div class="faq-filters d-flex justify-content-between pb-4">
                        <div class="search-box"> 
                            <span class="clear-search"></span> 
                            <input type="text" className="form-control" id="search-faqs" placeholder="Search..."/>
                        </div> 
                        <label class="faq-select font-h1" for="filter-faqs ">View By 
                        <select id="filter-faqs" class="filter-select form-control">
                            <option value="card1" selected>All</option>
                            <option value="academic">Academic</option>
                            <option value="admissions">Admissions</option>
                            <option value="general">General</option>
                            <option value="student-well-being">Student Well-Being</option> 
                        </select> 
                        </label>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="card1 student-well-being">
                            <div className="card-header card-header1 bg-light" id="headingOne">
                                <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Is it normal for children to cry at the beginning?
                                </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Crying is a very natural and healthy response to the love they have experienced at home. We make sure that all transitions are tailored to their character and progress.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 admissions">
                            <div className="card-header card-header1 bg-light" id="headingTwo">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What are the school fees?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Our school fees vary by center. Fees also depend on the age group, length of session, extra-curricular activities and more.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingThree">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is your curriculum?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">We combine the best practices from Waldorf Steiner, Reggio Emilia, and Montessori. Our goal is to foster imagination, social wellbeing, motor skills and creativity in our students, no matter the age group. We offer several activities for our children so that they can study based on their interest. Take a look at our program to find out more, or go to our <a className="faq-link" href="https://www.kidoholdings.com/pedagogy" target="_blank" rel="noreferrer">curriculum page</a></p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 general">
                            <div className="card-header card-header1 bg-light" id="headingFour">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What are the Kïdo principles?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                            <p className="pl-3">We are fully committed to our four principles:</p>
                            <ul className="">
                                    <li className="what-we-teach-list pb-3">Customized learning experiences. We understand that each child has a different pace and learning needs.</li>
                                    <li className="what-we-teach-list pb-3">A curriculum that combines free and structured play. We combine this with a variety of learning structures and a program that is constantly evolving. We try to reach all parts of the body and mind for the best possible results.</li>
                                    <li className="what-we-teach-list pb-3">Transparent and ongoing communication with our parents. We want the parents to know what is happening at the school. We listen to your feedback and constantly improve what we offer.</li>
                                    <li className="what-we-teach-list pb-3"> An extraordinary amount of care. We pick resources and design our learning spaces to ensure the health, safety and security of all children we serve.</li>
                                </ul>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingFIve">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What are your teachers’ qualifications and nationalities?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">All of our teachers are formally educated and have a wealth of experience in the childcare industry. we make sure that our teachers have a genuine passion for teaching children, and that they put their heart into it. We also offer around 100 hours of internal training for our existing teachers on a regular basis. We are open and welcome teachers from different nationalities and cultures.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingSix">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Do you accept non-English speakers?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Yes! Children can pick up languages very quickly, even if they have not been exposed to the language before. The majority of our instructions are done in English, which in conjunction with their social development, leads to accelerated learning.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 student-well-being">
                            <div className="card-header card-header1 bg-light" id="headingSeven">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    How do you deal with discipline?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">We encourage our children to use kind and gentle words towards their peers. We believe that strong values lay the foundation for their life as an adult. If we notice a child is being physical, we will take them aside and ask them to stop that behavior.</p>
                                <p className="pl-3">By using positive reinforcement, we will talk to the child and explain that the hands are used for playing, eating and creating things rather than hitting someone. If the child continues to be defiant, we will ask the child to talk to the principal or nursery manager about what happened and how to improve. We do not use corner time-out, as we believe it is more effective to use positive reinforcement.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 student-well-being">
                            <div className="card-header card-header1 bg-light" id="headingEight">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    Do you offer potty training?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">We coordinate toilet training with our teachers once we feel the child is ready. Our teachers will advise you on what you could do at your home, so that the child can learn at our kindergarten as well as at home.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 student-well-being">
                            <div className="card-header card-header1 bg-light" id="headingNine">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    What are your safety and health procedures?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">There is always a small chance that an incident might occur, but we try to minimize the risk as much as we can. If a child shows certain symptoms we will send them home, as part of our “exclusion for illness” policy. We stick to strict sanitary schedules and a safe-hire procedure for all our colleagues in the preschools.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingTen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    Where do your graduates go to?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">We offer our support to make the transition to grade school as smooth as possible. All our centers maintain strong relationships with the leading grade schools in their area. Kïdo children usually advance to the grade school they apply to, and our Parent Relationship Managers will be able to support you in identifying and applying for the most suitable places for your little one.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingEleven">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    What will the child be able to do by the time they leave?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Kïdo children tend to be one or two years more advanced than their peers when they reach grade school. Our students undergo an accelerated learning program where they start learning how to read and write simple words.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 general">
                            <div className="card-header card-header1 bg-light" id="headingTwelve">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    How do you communicate with the parents?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">We greet children and their parents during the daily pick up and drop off time. This allows us to have some time to talk about what your child has been doing and some details we noticed during the day. In addition, we share a weekly newsletter, which summarizes the week and provides an outlook to the next week. Our parents app lets you chat directly with our teachers, keep track of all dates and more.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 academic">
                            <div className="card-header card-header1 bg-light" id="headingThirteen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                    What languages do you offer?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Depending on the location, we offer Spanish, Mandarin and French.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 admissions">
                            <div className="card-header card-header1 bg-light" id="headingFourteen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                    What is the payment and withdrawal policy?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">All our parents will be handed out the list of terms and conditions on our enrolment form, where they will find all withdrawal rules and specific payment instructions. The terms and conditions vary from center to center, so please ask your local team for more details.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 general">
                            <div className="card-header card-header1 bg-light" id="headingFiften">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFiften" aria-expanded="false" aria-controls="collapseFiften">
                                    What is your student to teacher ratio?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseFiften" className="collapse" aria-labelledby="headingFiften" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">The class ratios follow the country regulations, yet we strive to have more teachers per child so that they can get the highest amount of personalized care. This means that we usually exceed the local regulatory requirements.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 admissions">
                            <div className="card-header card-header1 bg-light" id="headingSixteen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                    How do you manage separation, transition and promotion?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">In the beginning, we encourage the caregiver to begin with short separation times, so that children have faith that the parent will return. This procedure helps children to build mutual understanding and trust.</p>
                                <p className="pl-3">We then slowly start to extend the length of separation. Many students will bring something from home that makes them feel comfortable such as a blanket, toy or teddy bear.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 admissions">
                            <div className="card-header card-header1 bg-light" id="headingSeventeen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                Can my child join in the middle of a term?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseSeventeen" className="collapse" aria-labelledby="headingSeventeen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Yes. In general, we accept students all year round to our programs if we have availability. Please check with your local preschool directly.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 admissions">
                            <div className="card-header card-header1 bg-light" id="headingEigtheen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEigtheen" aria-expanded="false" aria-controls="collapseEigtheen">
                                    Do you take into account holidays when deciding tuition fees?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseEigtheen" className="collapse" aria-labelledby="headingEigtheen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">Our preschool tuition fees are calculated across the whole year. This takes into account all of the school holidays so no months will be pro-rata.</p>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="card1 general">
                            <div className="card-header card-header1 bg-light" id="headingNineteen">
                            <h2 className="card-text mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                    Do you provide lunch and snacks?
                                </button>
                            </h2>
                            </div>
                            <div id="collapseNineteen" className="collapse" aria-labelledby="headingNineteen" data-parent="#accordionExample">
                            <div className="card-body bg-white">
                                <p className="pl-3">In the US and the UK, we provide lunch and snacks in all our schools.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section> 

      </>
    )
}

export default Faq;