import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

 
const AnyReactComponent = ({ text }) => <div>{<i className="text-primary fas fa-map-marker-alt fa-2x"></i>}</div>;
const GOOGLE_API_KEY = "AIzaSyBRMLmGwB29gMHS8ii1tktv-6LD4kCo6bc";

class Maps extends Component {

   render() {

    // let centersLocation = JSON.parse(localStorage.getItem("centres"));

    return (
      // Important! Always set the container height explicitly
      <div id="gmap" style={{ width: "100%", height: "520px" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: [GOOGLE_API_KEY]}}
          center={this.props.center}
          zoom={this.props.zoom}
          resetBoundsOnResize={true}    
          siz={{width:300,height:300}}
        >

          {Object.entries(this.props.centerContents).map((item,k) => {
              return <AnyReactComponent
                lng={item[1].lng}
                lat={item[1].lat}
                text="My Marker"
              />
          })
        }

        </GoogleMap>
      </div>
    );
  }
}
 
export default Maps;


