import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Pagination from "react-js-pagination";
import $ from 'jquery';
import SearchFilter from '../../components/SearchFilter';
import MapUpdate from "../../components/Map/MapUpdate";
import {Link} from "react-router-dom";

function OurCenters(props) {

  const [centerContents, setCenterContents] = useState({});
  const [selectedOption, setSelectedOption] = useState("everyone");
  const todosPerPage = 5;
  const [ activePage, setCurrentPage ] = useState( 1 );

  useEffect(() => {
    getCentersData();
}, []);

  const getCentersData = () => {
    Axios
    .get(`https://kido-school-new-default-rtdb.firebaseio.com/centers.json`)
    .then((response) => {
      // console.log(response);
      localStorage.setItem("centres",JSON.stringify(response));
      setCenterContents(response.data);
    })
    .catch((error) => console.log(error));
};

// Logic for displaying current todos
const indexOfLastTodo  = activePage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

var filteredOptions = [];

var centresList = Object.entries(centerContents);

if(selectedOption){
  $.each(centresList, function (k, v) {
    if(v[1].city == parseInt(selectedOption)){
      filteredOptions.push(v);
    }
  });
}

if(filteredOptions.length){
  centresList = filteredOptions;
}

 const currentCenters   = centresList.slice( indexOfFirstTodo, indexOfLastTodo );

// console.log(currentCenters,"--------------------CC");
// console.log(filteredOptions,"--------------------FO");

const handlePageChange = ( pageNumber ) => {
  console.log( `active page is ${ pageNumber }` );
  setCurrentPage( pageNumber )
};

const handleOnChange = (e) => {
  setSelectedOption(e.target.value)
  setCurrentPage(1)
  $("#update_map").click();
};

 function printCentres(centreList) {

   const renderTodos = centreList.map((item,k) => {
    return (
    <div className="find-our-centers" key={item[0]}>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div style={{backgroundImage: `url(${item[1].img})`}} className="card-img"></div>
            <div className="label">{$("#search_filter > option[value="+item[1].city+"]").text()}</div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title name"><Link to={item[1].url}>{item[1].name}</Link></p>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-4 text-center">
                  <div className="card-icon1 py-2"><img src={'/'+(item[1].features[0].feature.slug) +".svg"} className="img-fluid" width="25"/></div>
                  <p className="card-text sch-config-text">{item[1].features[0].feature.description}</p>
                  <p className="card-text"><small className="text-muted">{item[1].features[0]["feature_information"]}</small></p>
                </div>
                <div className="col-lg-4 col-4 text-center">
                  <div className="card-icon2 py-2"><img src={'/'+(item[1].features[1].feature.slug) +".svg"} className="img-fluid" width="25"/></div>
                  <p className="card-text sch-config-text">{item[1].features[1].feature.description}</p>
                  <p className="card-text"><small className="text-muted">{item[1].features[1]["feature_information"]}</small></p>
                </div>
                <div className="col-lg-4 col-4 text-center">
                  <div className="card-icon2 py-2"><img src={'/'+(item[1].features[2].feature.slug) +".svg"} className="img-fluid" width="25"/></div>
                  <p className="card-text sch-config-text">{item[1].features[2].feature.description}</p>
                  <p className="card-text"><small className="text-muted">{item[1].features[2]["feature_information"]}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      )
      })
      return renderTodos;
 }

  return(
    <>
    
      <section className="main-banner pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
          <p className="text no-margin pt-4"> Explore Our centres across the globe</p>
          <div className="d-flex">
          <p id="number" className="text no-margin">We found 32 centres</p>
          <SearchFilter
              selectedOption={selectedOption}
              onChange={handleOnChange}
          />
          </div>
          </div>
        </div>
        <div className="row justify-content-center py-4">
          <div className="col-lg-7">
              { printCentres(currentCenters)  }

              <div className="pagination pt-3">
                <Pagination
                  activePage={ activePage }
                  itemsCountPerPage={ 5 }
                  totalItemsCount={ centresList.length }
                  pageRangeDisplayed={ 5 }
                  onChange={ handlePageChange }
                />
              </div>
          </div>
       
           <div className="col-lg-5">
              <div className="map">
              {/* <Maps/> */}
            <MapUpdate
            // center1={center}
            />
              </div>
           </div>
       </div>
      </div>
    </section>
  
    </>
  );

}
 
export default OurCenters;
