import React, {useEffect} from 'react';
import CareerBanner1 from '../../assets/Career-banner1.jpg';
import CareerBanner2 from '../../assets/Career-banner2.jpg';
import CareerBanner3 from '../../assets/Career-banner3.jpg';
import CareerBanner4 from '../../assets/Career-banner4.jpg';
import CareerAbout1 from '../../assets/career-about1.jpg';
import CareerAbout2 from '../../assets/career-about2.jpg';
import CareerAbout3 from '../../assets/career-about3.jpg';
import CareerAbout4 from '../../assets/career-about4.jpg';
import $ from 'jquery';


function Careers(props) {

  useEffect(() => {
    filterFaq();
}, []);

const filterFaq = () => {
    $('select').on('change', function() {
        // alert( this.value);
        $('.job-open').css("display","none");
        $('.'+this.value).css("display","table-row");
    });
}

  return(
    <>
    <section className="main-banner py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="career-head col-lg-10">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid w-100 shadow" src={CareerBanner1} alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid w-100" src={CareerBanner2} alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid w-100" src={CareerBanner3} alt="Third slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid w-100" src={CareerBanner4} alt="Fourth slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
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

    <section className="what-we-look pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>What we look for</h1>
            <p className="description pt-3">We believe in innovation and modern thinking. Our schools, from the students to the staff, are energized by our playful, child-led learning approach.</p>
            <p className="description">We’re looking for people who share our vision for early childhood education. We offer an exciting career with plenty of opportunity for progression for those who wish to join our team.</p>
          </div>
       </div>
      </div>
    </section> 

    <section className="carrer-about pt-5">
      <div className="container">
        <div className="our-values row justify-content-center pb-5">
          <div className="col-lg-5">
            <img src={CareerAbout1} className="img-fluid our-values-img" alt="our-values"/>
          </div>
          <div className="col-lg-5">
            <h1>Our values</h1>
            <p className="description pt-3">We have a vision of your career: to have fun and grow at the same time.</p>
            <p className="description">Respect between colleagues is crucial. We want to know what our people care about so we always listen to the feedback of our teams, students and their parents.</p>
            <p className="description">We want our staff to develop as much as they can, because if we don’t progress, then the children won’t take us as an example. We have only a few boundaries in the classroom, as our staff are always challenging themselves to learn more about the world.</p>
            <p className="description">Our unique way of thinking makes us a leader in the early childhood education sector. We encourage being happy and confident in your work and private life.</p>
          </div>
       </div>
       <div className="work-in-our-preschool row justify-content-center py-5">
          <div className="col-lg-5">
            <h1>Work in our preschools</h1>
            <p className="description pt-3">A career at Kïdo is like no other. Our schools are energized by our playful, child-led learning approach. We provide the best benefits in the industry, including full childcare, and an environment that fosters continuous learning and development.</p>
            <p className="description">We offer different levels, such as day care, play groups, half and full day Kindergarten.</p>
            <p className="description">You just need to find the program that suits you best – and of course, we’ll help you along the way.</p>
          </div>
          <div className="col-lg-5">
            <img src={CareerAbout2} className="img-fluid" alt="our-values"/>
          </div>
       </div>
       <div className="work-in-our-hubs row justify-content-center py-5">
          <div className="col-lg-5">
            <img src={CareerAbout3} className="img-fluid" alt="our-values"/>
          </div>
          <div className="col-lg-5">
            <h1>Work in our hubs</h1>
            <p className="description pt-3">We’re always working hard behind the scenes so that our early childhood educators can focus on the children.</p>
            <p className="description">From marketing to accounting and beyond, all our departments share a common goal: to meet and exceed the demands of each Kïdo Kindergarten.</p>
          </div>
       </div>
       <div className="learning-development row justify-content-center py-5">
          <div className="col-lg-5">
            <h1>Learning &amp; development</h1>
            <p className="description pt-3">When you join Kïdo preschools, your learning won’t stop, as we live and promote lifelong learning for our colleague.</p>
            <p className="description">At Kïdo, we fully support continued professional development, transparency, and honesty, to make development and learning a part of our daily life.</p>
            <p className="description">In addition to training on the job through mentoring and coaching with your team, we also offer professional development through new qualifications, please just approach us!</p>
          </div>
          <div className="col-lg-5">
            <img src={CareerAbout4} className="img-fluid" alt="our-values"/>
          </div>
       </div>
      </div>
    </section> 

    <section className="openings pb-5">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
        <div className="opening-table border p-5 bg-light">
        <div className="job-filters d-flex flex-wrap justify-content-between pb-4">
              <div className="search-box"> 
                  <h1>Positions open</h1>
              </div> 
              <label className="faq-select font-h1" htmlFor="filter-faqs">View By 
              <select id="filter-job-listings" className="filter-select form-control">
                <option value="job-open">All</option>
                <option value="austin">Austin</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="chennai">Chennai</option>
                <option value="dubai">Dubai</option>
                <option value="houston">Houston</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="kharadi">Kharadi</option>
                <option value="london">London</option>
                <option value="lucknow">Lucknow</option>
                <option value="mumbai">Mumbai</option>
                <option value="noida">Noida</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>
                <option value="windsor">Windsor</option> 
              </select>
              </label>
          </div>
            <div className="table-responsives">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" width="55%">Role</th>
                <th scope="col">Location</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="job-open">
                <td>Kido Home Teacher	</td>
                <td></td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open">
                <td>Preschool Teacher</td>
                <td></td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open">
                <td>Bilingual Teacher ( Independent Contractor)</td>
                <td></td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open">
                <td>Preschool Teacher</td>
                <td></td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open austin">
                <td>Pre School Teacher (Part Time)</td>
                <td>Austin</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open austin">
                <td>U.S. Early Childhood Educator- Austin</td>
                <td>Austin</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open bengaluru">
                <td>Freelance Teacher</td>
                <td>Bengaluru</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open bengaluru">
                <td>Account Executive - Whitefield, Bangalore</td>
                <td>Bengaluru</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open chennai">
                <td>Freelance Teacher</td>
                <td>Chennai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open dubai">
                <td>Preschool Teacher</td>
                <td>Dubai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open dubai">
                <td>Nursery Manager</td>
                <td>Dubai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open dubai">
                <td>Telemarketer/ Sales</td>
                <td>Dubai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open dubai">
                <td>Nursery Manager - Dubai</td>
                <td>Dubai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open houston">
                <td>U.S. Early Childhood Educator (Bi-Lingual)- Houston</td>
                <td>Houston</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open hyderabad">
                <td>Freelance Teacher</td>
                <td>Hyderabad</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open kharadi">
                <td>School Administrator</td>
                <td>Kharadi</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Room Leaders Needed for International Nursery in Crouch End - London</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>International Nursery in Golders Green looking for a Baby Room Leader.</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Practitioner - Golders Green</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Room Leader positions - London</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Toddler Room Leader - Camden (Maternity Cover)</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Apprentice - International Nursery &amp; Preschool - London</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Deputy Nursery Manager - Brand New International Nursery in Greenwich</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Baby Room Leader - Clerkenwell Nursery - 22K- 25K</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Mandarin Teacher Role for Nursery in Clerkenwell</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Practitioner - Crouch End</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Toddler Room Leader - Golders Green</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Housekeeper - Crouch End</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Early Years Educator - Wandsworth</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Preschool Room Leader/Third in Charge - Camden Nursery</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>French Teacher - London</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Nursery Practitioner - Clerkenwell</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Bank Nursery Assistant</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Baby Room Leader for an International Preschool in Chiswick</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Kitchen Assistant for an International Nursery - Crouch End</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open london">
                <td>Early Years Practitioner - Camden</td>
                <td>London</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open lucknow">
                <td>Freelance Teacher</td>
                <td>Lucknow</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Content and Copywriter - Khar, Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Digital Marketing Executive - Khar, Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Sr. Graphic Designer - Khar, mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Product / Technical Support - Khar, Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Scheduling and Rostering Executive - Khar, Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Account Executive</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Finance Manager - Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open mumbai">
                <td>Paid Media Executive (Online) - Khar, Mumbai</td>
                <td>Mumbai</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open noida">
                <td>Freelance Teacher</td>
                <td>Noida</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open thiruvananthapuram">
                <td>Preschool Teacher - Trivandrum</td>
                <td>Thiruvananthapuram</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
              <tr className="job-open windsor">
                <td>Early Years Educator - Windsor</td>
                <td>Windsor</td>
                <td>
                  <div className="text-center">
                    <a href="" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>

  
    </>
  );

  

}

export default Careers;
