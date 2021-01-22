import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function RelatedBlogs(props) {
  
    const allBlogs = JSON.parse(localStorage.getItem("blogs"));

    return(
        <>
        <section className="latest-news py-5">
        <div className="container">
            <h2 className="pl-5">Related Blogs</h2>
            <div className="row justify-content-center py-3">
            <div className="col-lg-11">
                <div className="row">
                {Object.entries(allBlogs.slice(1, 4)).map((item,k) => {
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
    )
}

    export default RelatedBlogs;