import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function SearchFilter(props){

  const [citiesContents, setCitiesContents] = useState({});
  const { selectedOption, onChange} = props;

  useEffect(() => {
    getCitiesData();
}, []);


const getCitiesData = () => {
  Axios
  .get(`https://kido-school-new-default-rtdb.firebaseio.com/cities.json`)
  .then((response) => {
    // console.log(response);
    setCitiesContents(response.data);
  })
  .catch((error) => console.log(error));
};

    return(
      <>
          <div className="form-group pl-5" id="search">
          <select className="form-control" id="search_filter"
            value={selectedOption}
            onChange={onChange}>
              <option id="allCitiesOption" value="-" defaultValue="selected">Everywhere</option>
                  { Object.entries(citiesContents).map(item => (
                      <option key={item[1].id} value={item[1].id}>{item[1].name}</option>
                    ))}
          </select>
        </div>

      </>

    );

}

export default SearchFilter;
