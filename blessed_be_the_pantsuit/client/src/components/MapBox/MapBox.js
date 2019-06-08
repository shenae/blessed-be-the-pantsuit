import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '90vw',
          height: '60vh',
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
              <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
              </ReactMapGL>
              )
       }
   }

     
  export default MapBox;