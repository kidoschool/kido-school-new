import React from 'react';
import {Link} from "react-router-dom";
import AboutBanner from '../../assets/About-banner.jpg';
import Aboutperson1 from '../../assets/about-person1.jpg';
import Aboutperson2 from '../../assets/about-person2.jpg';
import Aboutperson3 from '../../assets/about-person3.jpg';
import Aboutperson4 from '../../assets/about-person4.jpg';
import Aboutperson5 from '../../assets/about-person5.jpg';
import Aboutperson6 from '../../assets/about-person6.jpg';
import Aboutperson7 from '../../assets/about-person7.jpg';
import Aboutperson8 from '../../assets/about-person8.png';




function AboutUs(props) {

  const size = {
    width:'100%',
    height:'95%'
}


  return(
    <>
    <section className="about-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={AboutBanner} className="img-fluid w-100" alt="about-banner"/>
       </div>
      </div>
    </section>

    <section className="about-text py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>关于我们</h1>
            <div className="about-para pt-3">
                <p>我们由来自世界各地的一群父母所有和经营。我们的创始人对所在城市提供的早期儿童教育的质量不满意，因此他们聚在一起建立了一个真正的21世纪计划。</p>
                <p>现在，我们在全球各地都有学校，这些学校汇集了世界上最好的早年实践，为孩子和父母提供了最好的学前教育体验。</p>
            </div>
          </div>
       </div>
      </div>
    </section>


    <section className="our-leadership py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>我们的教学领导</h1>
            <div className="about-para pt-3">
                <p>我们的课程是在内部开发的，并得到了世界知名的顾问小组的支持。我们的教学领导团队在20多个国家/地区的多种语言的早期教学，研究和教学法领域拥有200多年的综合经验。</p>
            </div>

            <div className="row justify-content-center pt-5">
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson1} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">顾问Robert Swartz博士</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson2} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">顾问Yuuko Tonkovich博士</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson3} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Fruzsina Benyei，亚洲课程与培训</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson4} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">艾玛·菲利普斯（Emma Phillips），课程与运营，英国</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson5} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">阿联酋课程协调员Azah Rahman</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson6} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">香港课程协调员Karen Norrisg</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson7} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">Tez Razzaq，课程与培训，英国</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div class="card" style={size}>
                  <img class="card-img-top" src={Aboutperson8} alt="pedagogical leaders"/>
                  <div class="card-body text-center">
                    <p class="card-title">印度课程协调员Anjali Motiani</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
       </div>
      </div>
    </section>

    <section className="our-program bg-light py-5">
      <div className="container">
      <h1 className="text-center">我们的节目</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="about-para py-4">
                <p>我们针对我们所服务的每个本地社区量身定制我们的产品。根据不同的位置，我们会根据课程设置为六周到六年的儿童提供课程。</p>
            </div>
            <Link to="ourcentres" className="my-btn center">找到更多</Link>

          </div>
       </div>
      </div>
    </section>
  
    </>
  );

  

}

export default AboutUs;
