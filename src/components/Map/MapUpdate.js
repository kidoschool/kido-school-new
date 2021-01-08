import React, { Component } from 'react';
import Maps from './Maps';
import $ from 'jquery';

const GOOGLE_API_KEY = "AIzaSyCIJkPLyzo5XZODdhxAa_XYbk2ESQpJyZw";

const centersLocation = JSON.parse(localStorage.getItem("centres"));

class MapUpdate extends Component {
    constructor(props) {
      super(props);

      this.state = {
        center : { lat: 35.446982, lng: 5.1975812 },
        zoom:1,
        // size:{ width:250,height:250 },
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      let cityId = parseInt($("#search_filter").val());
      var latt = 0;
      var long = 0;
      $.each(centersLocation.data, function(k, v) {
        if(v.city == cityId){latt = v.lat;long = v.lng;console.log(v.city);return;}
      });
      // console.log(centersLocation.data);
      this.setState({
        center: {lat:latt,lng:long}
      });
    }
  
    render() {
      const center = this.state.center;

      return (<>
        <div style={{ width: "100%", height: "100%" }}>
          <div>
            <input onClick={this.handleClick} type="button" id="update_map" data-tag="Update" />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Maps center={center} zoom={9} size={{width:300,height:300}}/>
            
         </div>
        </div>
        </>
      );
    }
  }
  
  export default MapUpdate;
  
