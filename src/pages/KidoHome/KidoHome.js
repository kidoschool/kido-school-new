import React from 'react';
import KidoBanner from '../../assets/kido-home-banner.jpg';
import kido_home_video from '../../assets/KidoHome-video.mp4';
import KidoCard1 from '../../assets/kido-home-card-img1.jpg';
import KidoCard2 from '../../assets/kido-home-card-img2.jpg';
import KidoCard3 from '../../assets/kido-home-card-img3.jpg';
import KidoCard4 from '../../assets/kido-home-card-img4.jpg';
import KidoCard5 from '../../assets/kido-home-card-img5.jpg';
import KidoCard6 from '../../assets/kido-home-card-img6.jpg';

function KidoHome(props) {

  return(
    <>
     <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={KidoBanner} className="k-home-banner banner-images img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="virtual-preschool py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>虚拟学前班</h1>
            <p className="subtitle subtitle-smaller">量身定制的学前班，适合所有人</p>
            <p className="description">KïdoHome是我们的虚拟学前班和幼儿园计划，我们在这里为世界各地的孩子们提供我们的课程，国际教师网络和多种语言。所有这一切都只是普通学前班的价格的一小部分。高质量的教学法和教学，任何人都可以使用，而无需实际参与。最初在四个时区可用-美国，阿联酋，印度和香港。访问KïdoHome网站以了解更多信息，并预订免费试听课！</p>
            <div className="kido-home-website text-center pt-5">
              <a href="https://www.kidohome.net/" target='_blank' rel="noreferrer" className="my-btn center">访问Kido主页网站</a>
            </div>
            </div>
       </div>
      </div>
    </section> 


      <section className="our-philosophy bg-light py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-5">
                <h1>这个怎么运作</h1>
                <p className="description pt-4">通过小组的现场视频会议进行的教师主导的活动和课程计划得到了触摸屏互动模块和家庭活动的补充。与父母和老师进行一对一的交流，并能够不受年龄限制地将儿童带到小组中，以确保根据孩子的能力进行个性化设置。观看视频以观看课堂活动</p>
              </div>
              <div className="col-lg-6 offset-lg-1">
              <video width="550" id="vid" controls autoPlay loop muted>
                <source src={kido_home_video} type="video/mp4"/>
                Your browser does not support HTML video.
              </video>              
              </div>
            </div>
            </div>
       </div>
      </div>
    </section> 

    <section className="highlights py-5">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1>强调</h1>
            <div className="highlights-para pt-3">
                <p>根据我们的课程，KïdoHome是一个针对2-6岁儿童的完整的学前班计划，并提供经过测试的有效交付方式。在大多数情况下，需要最少的父母支持，并且该程序每天运行两个小时，有时会中断。所有这些仅是可比的国际学前班的一小部分费用。</p>
            </div>

            <div className="row pt-5">
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard1} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">小团体</h4>
                    <p className="card-text">实时互动视频会议的比例为1：6或1：8，可确保参与度和个人关注度</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard2} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">触摸屏互动</h4>
                    <p className="card-text">通过交互式触摸屏技术教授的识字和数学模块，始终有一位老师在场</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard3} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">完成程序</h4>
                    <p className="card-text">涵盖识字，数学，艺术，STEM，身体发育和生活技能，因此孩子们比上学还要更充分</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard4} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">国际教师</h4>
                    <p className="card-text">我们的全球教师网络可确保提供最佳的课堂教学和语言支持</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard5} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">家庭活动</h4>
                    <p className="card-text">针对家庭活动的每月参与工具包和基于视频的课程计划，以补充在线学习。</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card khome-card">
                  <img className="card-img-top-khome img-fluid" src={KidoCard6} alt="kido highlights"/>
                  <div className="card-body">
                    <h4 className="card-title pb-2">和更多</h4>
                    <p className="card-text">专科，瑜伽，正念，音乐等课。现场附加项目，用于基于项目的学习等</p>
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

export default KidoHome;
