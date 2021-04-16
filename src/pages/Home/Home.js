import React from 'react';
import RelatedCenters from "../../components/RelatedCenters";
import Banner1 from '../../assets/Slider-banner1.jpg';
import Banner2 from '../../assets/Slider-banner2.jpg';
import Banner3 from '../../assets/Slider-banner3.jpg';
import Banner4 from '../../assets/Slider-banner4.jpg';
import Banner5 from '../../assets/Slider-banner5.jpg';
import Banner6 from '../../assets/Slider-banner6.jpg';
import Banner7 from '../../assets/Slider-banner7.jpg';
import Banner8 from '../../assets/Slider-banner8.jpg';
import Banner9 from '../../assets/Slider-banner9.jpg';
import Banner_video from '../../assets/banner-video-Mp4.mp4';
import TestiParent1 from '../../assets/Parent-Testimonial-1.jpg';
import TestiParent2 from '../../assets/Parent-Testimonial-2.jpg';
import LatestNews1 from '../../assets/latest-news-pic1.jpg';
import LatestNews2 from '../../assets/latest-news-pic2.jpg';
import {Link} from "react-router-dom";

function Home(props) {
  
  const allBlogs = JSON.parse(localStorage.getItem("blogs"));


  return(
    <>
  
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
              </div>
              <img className="main-banner-img d-block w-100" src={Banner1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner4} alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner5} alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner6} alt="Sixth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner7} alt="Seventh slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner8} alt="Eight slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新构想</h2>
                  <Link to="ourcentres" className="btn-banner">寻找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner9} alt="Nine slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    </section>

    <section className="welcome-kido py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>欢迎来到奇道</h1>
            <p className="subtitle subtitle-smaller">照亮孩子的早年</p>
            <p className="description">我们致力于提供世界上最高质量的早期教育和护理。我们正在创造充满魔力和引人入胜的学习空间，融合了先进的教学法和出色的老师，以培养和增强每个孩子与生俱来的好奇心，创造力和成为终身学习者的能力。</p>
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
                <h1>我们的理念</h1>
                <p className="description pt-4">我们相信，自由和结构化的游戏，引人入胜的互动学习环境以及丰富的爱，关怀和关注相结合，为幼儿提供了最坚实的基础。</p>
              </div>
              <div className="col-lg-5 offset-lg-1">
              <video width="450" id="vid" controls autoPlay loop muted>
                <source src={Banner_video} type="video/mp4"/>
                Your browser does not support HTML video.
              </video>              
              </div>
            </div>
            </div>
       </div>
      </div>
    </section>

    <section className="find-centers py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
        <h1>在哪里可以找到我们的中心</h1>
          <div className="col-lg-12">
            <div className="getlocation-btn">
            <ul className="list-inline d-flex justify-content-center py-5">
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=austin">奥斯丁</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=houston">休斯敦</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=greater-london">大伦敦</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=dubai">迪拜</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=india">印度</Link></li>
              <li className="list-inline-item"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=hong-kong">香港</Link></li>
            </ul>
            </div>
            <div className="find-our-centers">
            <RelatedCenters/>
            </div>
            <div className="text-center pt-5">
            <Link to="ourcentres" className="my-btn center">寻找中心</Link>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className="parent-testi bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
          <h1 className="pb-4">父母对我们学校的评价</h1>
            <div className="col-md-10">
            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                  <li data-target="#carouselExampleControls1" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleControls1" data-slide-to="1"></li>
                </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="parent_testimonial">
                    <div className="pics"><img src={TestiParent1} alt=""/></div>
                    <div className="parent_testimonial-content">
                    <p className="description">我两个孩子都去托儿所，在那里很开心</p>
                    <h3 className="parent_testimonial-title">父级<small className="post">父母, 奇斯威克</small></h3>
                    </div>
                  </div>
                  </div>
                  <div className="carousel-item">
                  <div className="parent_testimonial">
                    <div className="pics"><img src={TestiParent2} alt=""/></div>
                    <div className="parent_testimonial-content">
                    <p className="description">我两个孩子都去托儿所，在那里很开心</p>
                    <h3 className="parent_testimonial-title">父级<small className="post">父母，温莎</small></h3>
                    </div>
                  </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            </div>
          </div>
        </div>
    </section>

    <section className="latest-news py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
          <div className="row">
          <div className="col-lg-4">
          <div className="latest-news-text-blue">
            <h1 className="subtitle">最新消息</h1>
            <p>了解我们如何在世界各地成为头条新闻，或阅读有关我们学校和计划的最新更新。您还可以查看我们的博客，并从我们的老师，中心团队和贡献者那里获得有用的育儿技巧。</p>
          </div>
          </div>
          {Object.entries(allBlogs.slice(2, 4)).map((item,k) => {
            return( <>
            <div className="col-lg-4">
                <div className="card">
                    <div style={{backgroundImage: `url(${item[1].img})`}} className="card-img-top blog-img"></div>
                    <div className="card-body">
                    <p className="card-text">{item[1].date}</p>
                    <h5 className="card-title pb-4 pr-4">{item[1].name}</h5>
                    <Link to={{ pathname: "/news/" + item[1].slug +"/"}} className="btn btn-outline-primary">阅读更多</Link>
                    </div>
                </div>
            </div>
            </>)
            })}
       </div>
       </div>
       </div>
      </div>
    </section>

    </>
  );

  

}

export default Home;
