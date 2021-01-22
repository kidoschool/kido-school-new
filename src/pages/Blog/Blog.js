import React, {useState} from 'react';
import {Link} from "react-router-dom";
import BlogBanner from '../../assets/blog-banner.jpg';
import BlogCard1 from '../../assets/blog-card1.jpg';

function Blog(props) {

  const allBlogs = JSON.parse(localStorage.getItem("blogs"));

  return(
    <>
     <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={BlogBanner} className="img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="days-at-kido pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-11">
            <h1>Latest news and events</h1>
            <p className="description pt-3">Find out more about the latest events, happenings, and newly released articles from our Kïdo preschools.</p>
          </div>
       </div>
      </div>
    </section> 

    <section className="latest-news pt-2 pb-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-11">
            <div className="row">
              {Object.entries(allBlogs).map((item,k) => {
                // console.log(item)
              return( <>
              <div className="col-lg-4 pb-4">
                  <div className="card">
                    {/* <img className="card-img-top blog-img" src={BlogCard1} alt="latest news"/> */}
                    <div style={{backgroundImage: `url(${item[1].img})`}} className="card-img-top blog-img"></div>
                    <div className="card-body">
                      <p className="card-text">{item[1].date}</p>
                      <h5 className="card-title pb-4 pr-4">{item[1].name}</h5>
                      <Link to={{ pathname: "/news/" + item[1].slug +"/"}} className="btn btn-outline-primary">Read more</Link>
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

export default Blog;
