import React from 'react';
import MapBox from './MapBox';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


export default function DropDownList (props) {

    const mapboxglToken = process.env.REACT_APP_MAPBOX;
   
    const sfmapbox = [-122.413692, 37.775712];

    const poliMap = ReactMapGL({
        accessToken: {mapboxglToken},
        style: 'mapbox://styles/shenae/cjwi2w8on0a7e1cqvsemzxzot',
        center: [42.165726, -69.948051],
        zoom: 5,
        // bearing: 60,
        // pitch: 45
        });;

    
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

    window.onscroll = function() {
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

    return (
        <div class="active">
        <select>
        <option id="New York" selected>United States</option>
        <option value="AK">Alaska</option>
        <option value="AL">Alabama</option>
        <option value="AR">Arkansas</option>
        <option value="AZ">Arizona</option>
        <option id="California">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option id="Massachusetts">Massachusetts</option>
        <option id="New York">New York</option>
        <option id="Wisconsin">Wisconsin</option>
         </select>
         <br />
         </div>
     )
 }
//map.flyTo({center:sfmapbox, zoom: 12}
//const sfmapbox = [-122.413692, 37.775712];
// dropdownhandler option if needed: onChange={(event) => props.DropDownhandler(event.props.changeViewport)}


// State lists in Alphabetical order 
// Idaho - ID
// Illinois - IL
// Indiana - IN
// Iowa - IA
// Kansas - KS
// Kentucky - KY
// Louisiana - LA
// Maine - ME
// Maryland - MD
// Massachusetts - MA
// Michigan - MI
// Minnesota - MN
// Mississippi - MS
// Missouri - MO
// Montana - MT
// Nebraska - NE
// Nevada - NV
// New Hampshire - NH
// New Jersey - NJ
// New Mexico - NM
// New York - NY
// North Carolina - NC
// North Dakota - ND
// Ohio - OH
// Oklahoma - OK
// Oregon - OR
// Pennsylvania - PA
// Rhode Island - RI
// South Carolina - SC
// South Dakota - SD
// Tennessee - TN
// Texas - TX
// Utah - UT
// Vermont - VT
// Virginia - VA
// Washington - WA
// West Virginia - WV
// Wisconsin - WI
// Wyoming - WY