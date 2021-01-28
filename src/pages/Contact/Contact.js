import React from 'react';
import ContactBanner from '../../assets/Contact-banner.jpg';
import RelatedCenters from "../../components/RelatedCenters";

function Contact(props) {
  

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={ContactBanner} className="img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="contact-text py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>Let’s talk!</h1>
            <div className="contact-para pt-3">
                <p>Are you interested in finding out more? Feel free to get in touch with us.</p>
                <p>Just select a <strong>preschool</strong> you are interested in and complete the form to send a direct message to our team</p>
                <p>If you are interested in working with us, please select <strong>people team</strong>, and if you have any other questions, please select <strong>general enquiries</strong>. Thank you!</p>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className="contact-form py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="c-form">
              <form className="contact-form" id="validateform">
                <div className="row">
                    <div className="form-group col-lg-12">
                        <label htmlFor="select-team">Please select the team you would like to contact *</label>
                        <select className="form-control" name="select_team" id="select_team" >
                            <option Value="">Select Team</option>
                            <option value="People Team">People Team</option>
                            <option value="General Enquiries">General Enquiries</option>
                            <option value="Unites States (Houston) - Rice Village Preschool">Unites States (Houston) - Rice Village Preschool</option>
                            <option value="Unites States (Austin) - River Place Preschool">Unites States (Austin) - River Place Preschool</option>
                            <option value="United Kingdom (London) - Camden Nursery &amp; Preschool">United Kingdom (London) - Camden Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Chiswick Nursery &amp; Preschool">United Kingdom (London) - Chiswick Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Clerkenwell Nursery &amp; Preschool">United Kingdom (London) - Clerkenwell Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Crouch End Nursery &amp; Preschool">United Kingdom (London) - Crouch End Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Golders Green Nursery &amp; Preschool">United Kingdom (London) - Golders Green Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Wandsworth Nursery &amp; Preschool">United Kingdom (London) - Wandsworth Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Windsor Nursery &amp; Preschool">United Kingdom (London) - Windsor Nursery &amp; Preschool</option>
                            <option value="United Kingdom (London) - Greenwich Nursery and Preschool">United Kingdom (London) - Greenwich Nursery and Preschool</option>
                            <option value="Dubai (Kido Meydan)">Dubai (Kido Meydan)</option>
                            <option value="Dubai (Kido Sheikh Zayed Road)">Dubai (Kido Sheikh Zayed Road)</option>
                            <option value="Dubai (Kido JBR)">Dubai (Kido JBR)</option>
                            <option value="Hong Kong - Pok Fu Lam">Hong Kong - Pok Fu Lam</option>
                            <option value="Hong Kong - Repulse Bay">Hong Kong - Repulse Bay</option>
                        </select>                    
                        </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="select-country">Please select your country *</label>
                        <select className="form-control" name="select_country" id="select_country">
                          <option Value="">Select Country</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="USA">USA</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="UAE">UAE</option>
                          <option value="India">India</option>    
                        </select>                
                      </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" type="text" name="name" className="form-control" placeholder="Enter your Full Name" required/>
                    </div>
                    <div className="form-group col-lg-6 pt-3">
                        <label htmlFor="email">Email *</label>
                        <input id="email" type="text" name="email" className="form-control" placeholder="Enter your Email Address" required/>
                    </div>
                    <div className="form-group col-lg-6 pt-3">
                        <label htmlFor="phone">Phone *</label>
                        <input id="phone" type="text" name="phone" className="form-control" placeholder="Enter your Phone Number" required/>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="message">How did you find out about us? *</label>
                        <select className="form-control" name="find_out" id="find_out">
                            <option Value="">Please Select</option>
                            <option value="Advertisement (print ads, outdoor ads, tv ads etc.)">Advertisement (print ads, outdoor ads, tv ads etc.)</option>
                            <option value="Friend or colleague">Friend or colleague</option>
                            <option value="Event">Event</option>
                            <option value="Social Media (Facebook, Twitter, YouTube etc.)">Social Media (Facebook, Twitter, YouTube etc.)</option>
                            <option value="Web search (Google, Bing, Yahoo etc.)">Web search (Google, Bing, Yahoo etc.)</option>    
                        </select>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" type="text" name="message" className="form-control" placeholder="Enter your Message"></textarea>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                    <label htmlFor="tcheck">Consent</label>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" name="tcheck" id="tcheck"/>
                      <label class="form-check-label" for="tcheck"><small>Yes, I would like to receive relevant marketing material. I can opt out at privacy@kido.school anytime.</small></label>
                    </div>
                    </div>
                    <div className="form-group col-lg-4 pt-3">
                        <button type="submit" name="submit" className="btn btn-outline-primary w-100">Submit</button>
                    </div>
                </div>
                {/* {thankuMessage ? <span className="text-success text-center my-2">"Thank you for making Appointment!"</span> : null} */}
            </form>
            </div>
          </div>
       </div>
      </div>
    </section>

    
      <section className="related_centers bg-light py-5" id="related-centers">
        <div className="container">
          <h4 className="basics-subtitle text-align-left pb-3">Other centres you may love</h4>
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

export default Contact;
