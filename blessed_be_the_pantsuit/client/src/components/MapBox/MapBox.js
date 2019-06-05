import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MapBoxPin from './MapBoxPin.js';
import PoliticiansInfo from './PoliticiansInfo.js';
import DropDownList from './DropDownList.js';



const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '80vw',
          height: '60vh',
          latitude: 42.165726,
          longitude: -69.948051,
          zoom: 5
        }
      }
    };

  //dropdown list 
  const mapLocations = {
    'California': {
      //  bearing: 27,
        center: [42.0095169, -114.131211],
        zoom: 5,
        },
    'Wisconsin': {
        bearing: 27,
        center: [44.268543, -89.616508],
        zoom: 5,
        },

    'New York': {
    //  bearing: 27,
        center: [42.165726, -74.948051],
        zoom: 5,
        },
}

handleClick() {
  let mapLocationNames = Object.keys(mapLocations);
  for (var i = 0; i < mapLocationNames.length; i++) {
      let locationName = mapLocationNames[i];
          if (isElementOnScreen(locationName)) {
              setActiveChapter(locationName);
          break;
      }
  }
};

let activeMapLocations = 'New York';
    function setActiveChapter(mapLocations) {
    if (mapLocations === activeMapLocations) return;
    
    poliMap.flyTo(mapLocations[locationName]);
    
    document.getElementById(locationName).setAttribute('class', 'active');
    document.getElementById(activeMapLocations).setAttribute('class', '');
    
    let activeMapLocations = locationName;
  }

    function isElementOnScreen(id) {
      var element = document.getElementById(id);
      var bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
      }



  
    render() {
    
      const { viewport } = this.state;
    
        return (
          <div>
              <h4>By State </h4>
              <DropDownList /><br></br>
                <p>Select a state from the dropdown list to view the female politicians on the map.</p>
          
            <h4>Blessed Be the Pantsuit </h4>
              <p>Placeholder text here.</p>
            
            <h4>Map</h4>
              <ReactMapGL
              {...viewport}
              // onViewportChange={(viewport) => this.setState({viewport})}
              mapboxApiAccessToken={mapboxglToken}
              mapStyle="mapbox://styles/shenae/cjwi2w8on0a7e1cqvsemzxzot">
              </ReactMapGL>
              </div>
              )
       } //else {
  //        return null
  //      }
       

  //   }
   }

//map and website palette: Handmaid red #410401, medium gray #89726F, light gray/dust #BFA6A2
//lighter red #86433E, light dusty rose #FFD5CC, almost puple brown #574143

 
     
  export default MapBox;