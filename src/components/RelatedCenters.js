import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";


function RelatedCenters(props) {
  
    const centerContents = JSON.parse(localStorage.getItem("centres"));
    const allCities = JSON.parse(localStorage.getItem("cities"));

    var cityNames = {};
    $.each(allCities, function (k, v) {
      cityNames[v.id] = v.name;
    });

    const todosPerPage = 4;
    const [ activePage, setCurrentPage ] = useState( 1 );
  
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos     = centerContents.slice( indexOfFirstTodo, indexOfLastTodo );
  
  
    const handlePageChange1 = ( pageNumber ) => {
      setCurrentPage( pageNumber )
   };


   return(
    <>
    <div className="related-centers-list">
    <div className="card-deck">
      {Object.entries(currentTodos).map((item, k) => {
        // console.log(item)
        return (
          <>
              <div className="card" key={item[0]}>
                <div style={{ backgroundImage: `url(${item[1].img})` }} className="card-img-top1"></div>
                <div className="label">{cityNames[item[1].city]}</div>
                <div className="card-body">
                  <p className="card-title name-info pb-3"><Link to={{ pathname: "/our-centres/" + (cityNames[item[1].city]).toLowerCase().split(' ').join('-') + "/" + item[1].slug + "/" }}>{item[1].name}</Link></p>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-6 text-center">
                      <div className="card-icon1 py-2"><img src={'/images/' + (item[1].features[0].feature.slug) + ".svg"} className="img-fluid" width="25" alt="features icon"/></div>
                      <p className="card-text sch-config-text">{item[1].features[0].feature.description}</p>
                      <p className="card-text"><small className="text-muted">{item[1].features[0]["feature_information"]}</small></p>
                    </div>
                    <div className="col-lg-6 col-6 text-center">
                      <div className="card-icon2 py-2"><img src={'/images/' + (item[1].features[1].feature.slug) + ".svg"} className="img-fluid" width="25" alt="features icon"/></div>
                      <p className="card-text sch-config-text">{item[1].features[1].feature.description}</p>
                      <p className="card-text"><small className="text-muted">{item[1].features[1]["feature_information"]}</small></p>
                    </div>
                  </div>
                </div>
              </div>
          </>)
      })
      }
    </div>
    <div className="pagination pt-3">
      <Pagination
        activePage={ activePage }
        itemsCountPerPage={ 4 }
        totalItemsCount={ centerContents.length }
        pageRangeDisplayed={ 4 }
        onChange={ handlePageChange1 }
      />
  </div>
</div>
</>
)

}

export default RelatedCenters;