import React from 'react';
import {Link} from "react-router-dom";
import Privacybanner from '../../assets/privacy-banner.jpg';


function PrivacyPolicy(props) {


    return(
        <>
          <section className="main-banner bg-light-blue py-5">
            <div className="container">
                <div className="row pt-5">
                    <h1 className="policy-head pl-3 py-3">Privacy Policy</h1>
                    <div className="col-lg-12 text-center">
                        <img src={Privacybanner} className="blog-info-img img-fluid"/>
                    </div>
                </div>
            </div>
            </section>

            <section className="blog-info-discription bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <h2 className="privacy-head-text text-center">Privacy Notice</h2>
                            <h4 className="background py-4">Background</h4>
                            <p>This privacy notice sets out we, Kido Holdings PTE Ltd including our subsidiaries and affiliates, (also referred to as “us”, “we”, “our”) use and protect any personal information collected or generated in relation to you whilst using our website www.kido.school.</p>
                            <p>We take your privacy seriously and ensure that our operational policies, processes and procedures comply with appropriate data protection regulations around the world including General Data Protection Regulation (EU) 2016 / 679 (“GDPR”) , the UK Data Protection Act 2018 and any successor legislation.</p>
                            <p>If you have any questions about this Privacy Notice, please contact us at <strong>dpo@kido.school</strong></p>
                            
                            <h4 className="collected py-4">What is collected and the purpose of processing</h4>
                            <p>The types of personal data collected when you use www.kido.school</p>
                            <p className="pl-5"><b>Session cookies – please see our Cookie policy and the cookie consent pop up tool</b></p>
                            <p>If you contact us to find out about our services or to book a trial using Contact Us form you are consenting to provide additional personal contact data in order for us to respond to your request:</p>
                            <div className="p-form py-3 pl-5">
                                <p>Name</p>
                                <p>Email address</p>
                                <p>Phone Number</p>
                                <p>Location / Country</p>
                            </div>

                            <h4 className="Legal py-4">Legal basis for processing data</h4>
                            <h2 className="privacy-head-text pt-2">Your consent</h2>
                            <p>When you email us, you are agreeing to us using your data in order to contact you for the reason specified in the email.</p>
                            <h2 className="privacy-head-text pt-2">Becoming a client</h2>
                            <p>If you decide to become a valued client, we will require certain additional personal information in order to provide the requested services. During the registration process, further information will be provided to explain how this additional data will be used and the lawful basis for using it.</p>
                            
                            <h4 className="info-gather py-4">What we do with the information we gather</h4>
                            <h2 className="privacy-head-text pt-2">Contact Data</h2>
                            <p>Is used to respond to your queries, requests or questions and to deliver services to you. This data is stored for 18 months.</p>
                            <h2 className="privacy-head-text pt-2">Supplier Data</h2>
                            <p>If you become a supplier to any of our businesses, you are required to provide us with your contact information and payment details for the performance of our contract together. This data is stored for as long as you may be a supplier with us and for seven years thereafter for legal reasons.</p>

                            <h4 className="info-gather py-4">Links to other websites</h4>
                            <p>This site may contain select links to external sites from time to time. Care has been taken to ensure that any sites listed on our website are reputable and relevant to our services.</p>
                            <p>As you probably realise, once you use these links we do not have any control over how that external site may use your personal data, so we cannot be responsible for the protection and privacy of any information you provide whilst visiting those sites.</p>
                            <p>Please do exercise caution and look at the privacy notices applicable to external sites.</p>

                            <h4 className="info-gather py-4">Source of your data and recipients of your data</h4>
                            <p className="pl-5"><b>Your Contact data is provided by you when you email us</b></p>
                            <p className="pl-5"><b>The cookie data comes from your use of our site</b></p>
                            <p>Any analytical data collected via cookies is anonymised and used solely by us for internal analytical purposes. This information is not passed to any other party. You have the option to opt out of analytical data collected via cookies, by using our cookie consent tool.</p>
                            <p>We may share your data with third parties as part of a Company sale or restructure, or for other reasons to comply with a legal obligation upon us.</p>

                            <h4 className="info-gather py-4">Automated decision making</h4>
                            <p>No automated decisions are made using any personal information collected using this site.</p>

                            <h4 className="info-gather py-4">Security</h4>
                            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we receive from you when using this website or emailing us on the contact details provided.</p>

                            <h4 className="info-gather py-4">Data Transfers outside the EEA</h4>
                            <p>Most of the data we process resides in the EU with some exceptions. For any transfers outside of the EU, we have in place safeguards within our group companies as well as data processors which ensure the same data protection standards as data held within the EU.</p>
                            
                            <h4 className="info-gather py-4">Data Processor agreements</h4>
                            <p>This applies to third party organisations we may use from time to time to provide data processing or other services to us.</p>
                            <p>We have ensured they have committed to implementing appropriate technical and organisational measures in place to meet their obligations under the Data Protection regulations.</p>

                            <h4 className="info-gather py-4">Your rights</h4>
                            <p>You are entitled to ask about the data that is held about you, subject to certain exceptions. This is called a Subject Access Request (SAR). These should be made by email to us at <strong>dpo@kido.school</strong></p>
                            <p>In addition, the Data Protection regulation provides the following <a className="privacy-rights" href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/" target="_blank" rel="noreferrer">rights</a> for individuals:</p>
                            <ul className="rights-list">
                                <li>The right to be informed</li>
                                <li>The right of access</li>
                                <li>The right to rectification</li>
                                <li>The right to erasure</li>
                                <li>The right to restrict processing</li>
                                <li>The right to data portability</li>
                                <li>The right to object</li>
                                <li>Rights in relation to automated decision making and profiling</li>
                            </ul>
                            <p>We make every attempt to ensure you are satisfied with the handling of your data queries or requests. However, you have the right to complain to the Data Protection Authority in your country if you are not satisfied with the handling of your request about the protection of your data.</p>

                            <h4 className="text-right pt-3 text-primary">Last updated: November 2020</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}


export default PrivacyPolicy;
