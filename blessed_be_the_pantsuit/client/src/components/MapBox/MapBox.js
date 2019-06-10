import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import SenatorHarris from '../Politician/SenatorHarris';
import RepAOC from '../Politician/RepAOC';


const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '90vw',
          height: '50vh',
          latitude: 42.165726,
          longitude: -69.948051,
          zoom: 5
        }
       
      }
    };

    render() {
    
      const { viewport } = this.state;
    
        return (
              <ReactMapGL
              {...viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
              mapboxApiAccessToken={mapboxglToken}
              mapStyle="mapbox://styles/shenae/cjwi2w8on0a7e1cqvsemzxzot">
              <Marker latitude={42.36} longitude={-71.06} offsetLeft={-20} offsetTop={-10}>
          <div>warren</div>
        </Marker>
        <Marker latitude={40.74} longitude={-73.89} offsetLeft={-20} offsetTop={-10}>
          <div><RepAOC /></div>
        </Marker>
        <Marker latitude={40.74} longitude={-73.97} offsetLeft={-30} offsetTop={-10}>
          <div>gillibrand</div>
        </Marker>
        <Marker latitude={37.79} longitude={-122.40} offsetLeft={-20} offsetTop={-10}>
          <div><SenatorHarris /></div>
        </Marker>
              </ReactMapGL>
              )
       }
   }
  
     
  export default MapBox;