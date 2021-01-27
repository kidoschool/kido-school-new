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

            <section className="cookie-info-discription py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <h2 className="privacy-head-text">Cookie Policy</h2>
                            <p>This website uses cookies. We use cookies to provide social media features and to analyse the traffic on our website. We do not share information about you with any third parties. The analytical data is used for our own purposes. Cookies are small text files that can be used by websites to make a user’s experience more efficient. The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. This site uses different types of cookies and these are categorised to allow you to change or withdraw your consent at any time using the Cookie Declaration on our website. Learn more about who we are, how you can contact us and how we process personal data in our Privacy Notice. Please state your consent ID and date when you contact us regarding your consent.</p>
                            <p>Your consent applies to the following domains: kido.school</p>
                            <h4 className="background py-4">Change your consent</h4>

                                <div className="necessary">
                                    <p>Necessary (4)</p>
                                    <p>Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                                    <div className="cookie-table pt-4">
                                    <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" width="10%">Name</th>
                                        <th scope="col" width="20%">Provider</th>
                                        <th scope="col" width="50%">Purpose</th>
                                        <th scope="col" width="10%">Expiry</th>
                                        <th scope="col" width="10%">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>__cfduid</td>
                                        <td>kido.school</td>
                                        <td>Used by the content network, Cloudflare, to identify trusted web traffic.</td>
                                        <td>29 days</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>ASP.NET_SessionId</td>
                                        <td>web-in21.mxradon.com</td>
                                        <td>Preserves the visitor’s session state across page requests.</td>
                                        <td>1 day</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>CookieConsent</td>
                                        <td>kido.school</td>
                                        <td>Stores the user’s cookie consent state for the current domain</td>
                                        <td>1 year</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                </div>

                                <div className="preferences pt-3">
                                    <p>Preferences (1)</p>
                                    <p>Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.</p>
                                    <div className="cookie-table pt-4">
                                    <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" width="10%">Name</th>
                                        <th scope="col" width="20%">Provider</th>
                                        <th scope="col" width="50%">Purpose</th>
                                        <th scope="col" width="10%">Expiry</th>
                                        <th scope="col" width="10%">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>zoom</td>
                                        <td>kido.school</td>
                                        <td>Used in context with the website’s map integration. The cookie stores user interaction with the map in order to optimize its functionality.</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                </div>

                                <div className="statistics pt-3">
                                    <p>Statistics (4)</p>
                                    <p>Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
                                    <div className="cookie-table pt-4">
                                    <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" width="10%">Name</th>
                                        <th scope="col" width="20%">Provider</th>
                                        <th scope="col" width="50%">Purpose</th>
                                        <th scope="col" width="10%">Expiry</th>
                                        <th scope="col" width="10%">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>_ga</td>
                                        <td>kido.school</td>
                                        <td>Registers a unique ID that is used to generate statistical data on how the visitor uses the website.</td>
                                        <td>2 years</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>_ga_#</td>
                                        <td>kido.school</td>
                                        <td>Used by Google Analytics to collect data on the number of times a user has visited the website as well as dates for the first and most recent visit.</td>
                                        <td>2 years</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>_gat</td>
                                        <td>kido.school</td>
                                        <td>Used by Google Analytics to throttle request rate</td>
                                        <td>1 day</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>_gid</td>
                                        <td>kido.school</td>
                                        <td>Registers a unique ID that is used to generate statistical data on how the visitor uses the website</td>
                                        <td>1 day</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                </div>

                                <div className="marketing pt-3">
                                    <p>Marketing (19)</p>
                                    <p>Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
                                    <div className="cookie-table pt-4">
                                    <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" width="10%">Name</th>
                                        <th scope="col" width="20%">Provider</th>
                                        <th scope="col" width="50%">Purpose</th>
                                        <th scope="col" width="10%">Expiry</th>
                                        <th scope="col" width="10%">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>_fbp</td>
                                        <td>kido.school</td>
                                        <td>Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.</td>
                                        <td>3 months</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>_gcl_au</td>
                                        <td>kido.school</td>
                                        <td>Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.</td>
                                        <td>3 months</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>ads/ga-audiences</td>
                                        <td>google.com</td>
                                        <td>Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor’s online behaviour across websites.</td>
                                        <td>Session</td>
                                        <td>Pixel Tracker</td>
                                        </tr>
                                        <tr>
                                        <td>fr</td>
                                        <td>facebook.com</td>
                                        <td>Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.</td>
                                        <td>3 months</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>IDE</td>
                                        <td>doubleclick.net</td>
                                        <td>Used by Google DoubleClick to register and report the website user’s actions after viewing or clicking one of the advertiser’s ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user.</td>
                                        <td>1 year</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>pagead/1p-conversion/#</td>
                                        <td>google.com</td>
                                        <td>Unclassified</td>
                                        <td>Session</td>
                                        <td>Pixel Tracker</td>
                                        </tr>
                                        <tr>
                                        <td>pagead/1p-user-list/#</td>
                                        <td>google.com</td>
                                        <td>UTracks if the user has shown interest in specific products or events across multiple websites and detects how the user navigates between sites. This is used for measurement of advertisement efforts and facilitates payment of referral-fees between websites.</td>
                                        <td>Session</td>
                                        <td>Pixel Tracker</td>
                                        </tr>
                                        <tr>
                                        <td>pagead/landing</td>
                                        <td>doubleclick.net</td>
                                        <td>Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement – This also allows the website to limit the number of times that they are shown the same advertisement.</td>
                                        <td>Session</td>
                                        <td>Pixel Tracker</td>
                                        </tr>  
                                        <tr>
                                        <td>RUL</td>
                                        <td>doubleclick.net</td>
                                        <td>Used by DoubleClick to determine whether website advertisement has been properly displayed – This is done to make their marketing efforts more efficient.</td>
                                        <td>1 year</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>test_cookie</td>
                                        <td>doubleclick.net</td>
                                        <td>Used to check if the user’s browser supports cookies.</td>
                                        <td>1 day</td>
                                        <td>HTTP Cookie</td>
                                        </tr> 
                                        <tr>
                                        <td>tr</td>
                                        <td>facebook.com</td>
                                        <td>Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.</td>
                                        <td>Session</td>
                                        <td>Pixel Tracker</td>
                                        </tr> 
                                        <tr>
                                        <td>VISITOR_INFO1_LIVE</td>
                                        <td>youtube.com</td>
                                        <td>Tries to estimate the users’ bandwidth on pages with integrated YouTube videos.</td>
                                        <td>179 days</td>
                                        <td>HTTP Cookie</td>
                                        </tr> 
                                        <tr>
                                        <td>YSC</td>
                                        <td>youtube.com</td>
                                        <td>Registers a unique ID to keep statistics of what videos from YouTube the user has seen.</td>
                                        <td>Session</td>
                                        <td>HTTP Cookie</td>
                                        </tr> 
                                        <tr>
                                        <td>yt-remote-cast-installed</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Session</td>
                                        <td>HTML Local Storage</td>
                                        </tr> 
                                        <tr>
                                        <td>yt-remote-connected-devices</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
                                        </tr> 
                                        <tr>
                                        <td>yt-remote-device-id</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
                                        </tr>
                                        <tr>
                                        <td>yt-remote-fast-check-period</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Session</td>
                                        <td>HTML Local Storage</td>
                                        </tr> 
                                        <tr>
                                        <td>yt-remote-session-app</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Session</td>
                                        <td>HTML Local Storage</td>
                                        </tr> 
                                        <tr>
                                        <td>yt-remote-session-name</td>
                                        <td>youtube.com</td>
                                        <td>Stores the user’s video player preferences using embedded YouTube video</td>
                                        <td>Session</td>
                                        <td>HTML Local Storage</td>
                                        </tr> 
                                    </tbody>
                                    </table>
                                    </div>
                                </div>
                                <div className="unclassified pt-3">
                                    <p>Unclassified (6)</p>
                                    <p>Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.</p>
                                    <div className="cookie-table pt-4">
                                    <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" width="10%">Name</th>
                                        <th scope="col" width="20%">Provider</th>
                                        <th scope="col" width="50%">Purpose</th>
                                        <th scope="col" width="10%">Expiry</th>
                                        <th scope="col" width="10%">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>_ga</td>
                                        <td>kido.school</td>
                                        <td>Unclassified</td>
                                        <td>Session</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>centresArray</td>
                                        <td>kido.school</td>
                                        <td>Unclassified</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
                                        </tr>
                                        <tr>
                                        <td>citiesArray</td>
                                        <td>kido.school</td>
                                        <td>Unclassified</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
                                        </tr>
                                        <tr>
                                        <td>ORG49973[x2]</td>
                                        <td>kido.school web-in21.mxradon.com</td>
                                        <td>Unclassified</td>
                                        <td>2 years</td>
                                        <td>HTTP Cookie</td>
                                        </tr>
                                        <tr>
                                        <td>singleCentreLocalization</td>
                                        <td>kido.school</td>
                                        <td>Unclassified</td>
                                        <td>Persistent</td>
                                        <td>HTML Local Storage</td>
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

export default CookiePolicy;
