import React from 'react';
import CookieBanner from '../../assets/Cookie-Policy-Banner.jpg';
import {Link} from "react-router-dom";

function CookiePolicy(props) {

    return(
        <>
            <section className="main-banner bg-light-blue py-5">
            <div className="container">
                <div className="row pt-5">
                    <h1 className="policy-head pl-3 py-3">Cookie Policy</h1>
                    <div className="col-lg-12 text-center">
                        <img src={CookieBanner} className="blog-info-img img-fluid"/>
                    </div>
                </div>
            </div>
            </section>

            <section className="blog-info-discription bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <h2 className="privacy-head-text">Cookie Policy</h2>
                            <p>This website uses cookies. We use cookies to provide social media features and to analyse the traffic on our website. We do not share information about you with any third parties. The analytical data is used for our own purposes. Cookies are small text files that can be used by websites to make a user’s experience more efficient. The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. This site uses different types of cookies and these are categorised to allow you to change or withdraw your consent at any time using the Cookie Declaration on our website. Learn more about who we are, how you can contact us and how we process personal data in our Privacy Notice. Please state your consent ID and date when you contact us regarding your consent.</p>
                            <p>Your consent applies to the following domains: kido.school</p>
                            <h4 className="background py-4">Change your consent</h4>
                            <p>Necessary (4)</p>
                            <p>Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                            <div className="cookie-table pt-4">
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Provider</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Expiry</th>
                                <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    );

  

}

export default CookiePolicy;
