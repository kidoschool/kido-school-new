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
              <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
              </div>
              <img className="main-banner-img d-block w-100" src={Banner1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner4} alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner5} alt="Fifth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner6} alt="Sixth slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner7} alt="Seventh slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
                </div>
              <img className="main-banner-img d-block w-100" src={Banner8} alt="Eight slide"/>
            </div>
            <div className="carousel-item">
                <div className="banner-tarea"><h2 className="banner-text">早年，重新構想</h2>
                  <Link to="ourcentres" className="btn-banner">尋找您附近的中心</Link>
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
            <h1>歡迎來到奇道</h1>
            <p className="subtitle subtitle-smaller">照亮孩子的早年</p>
            <p className="description">我們致力於提供世界上最高質量的早期教育和護理。我們正在創造充滿魔力和引人入勝的學習空間，融合了先進的教學法和出色的老師，以培養和增強每個孩子與生俱來的好奇心，創造力和成為終身學習者的能力。</p>
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
                <h1>我們的理念</h1>
                <p className="description pt-4">我們相信，自由和結構化的遊戲，引人入勝的互動學習環境以及豐富的愛，關懷和關注相結合，為幼兒提供了最堅實的基礎。</p>
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
        <h1>在哪裡可以找到我們的中心</h1>
          <div className="col-lg-12">
            <div className="getlocation-btn">
            <ul className="list-inline d-flex justify-content-center py-5">
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=austin">奧斯丁</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=houston">休斯敦</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=greater-london">大倫敦</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=dubai">迪拜</Link></li>
              <li className="list-inline-item pr-3"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=india">印度</Link></li>
              <li className="list-inline-item"><Link className="btn btn-outline-primary" to="/ourcentres?srch-trm=hong-kong">香港</Link></li>
            </ul>
            </div>
            <div className="find-our-centers">
            <RelatedCenters/>
            </div>
            <div className="text-center pt-5">
            <Link to="ourcentres" className="my-btn center">尋找中心</Link>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className="parent-testi bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
          <h1 className="pb-4">父母對我們學校的評價</h1>
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
                    <p className="description">我兩個孩子都去托兒所，在那裡很開心</p>
                    <h3 className="parent_testimonial-title">父級<small className="post">父級, 奇斯威克</small></h3>
                    </div>
                  </div>
                  </div>
                  <div className="carousel-item">
                  <div className="parent_testimonial">
                    <div className="pics"><img src={TestiParent2} alt=""/></div>
                    <div className="parent_testimonial-content">
                    <p className="description">我兩個孩子都去托兒所，在那裡很開心</p>
                    <h3 className="parent_testimonial-title">父級<small className="post">父級, 溫莎</small></h3>
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
            <p>了解我們如何在世界各地成為頭條新聞，或閱讀有關我們學校和課程的最新更新。您還可以查看我們的博客，並從我們的老師，中心團隊和貢獻者那裡獲得有用的育兒技巧。</p>
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
                    <Link to={{ pathname: "/news/" + item[1].slug +"/"}} className="btn btn-outline-primary">閱讀更多</Link>
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
