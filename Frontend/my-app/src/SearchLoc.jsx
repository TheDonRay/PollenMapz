
// importing the mapbox stuff 
import mapboxgl from 'mapbox-gl';  
import 'mapbox-gl/dist/mapbox-gl.css'; 

import "./styling/searchloc.css" // importing the css files   
import React, { useEffect, useRef } from "react";
//importing the mapbox secret token stuff: 


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_SECRET_TOKEN;  

// creating function for the map stuff / and the vanta js library stuff 

function SearchLoc() {  

      // this is for the mapbox stuff: 
      const mapContainer = useRef(null); 
      const map = useRef(null);   

      useEffect(() => { 
        if (map.current) return; // this basically initializes the map only once.  

        map.current = new mapboxgl.Map({ 
          container: mapContainer.current, 
          style: 'mapbox://styles/mapbox/streets-v12', // map style 
          center: [0, 20], // starting position 
          zoom: 1.5, // starting zoom. 
        });  

        map.current.on('load', () => {  
          if (map.current.getLayer('background')) { 
            map.current.setPaintProperty('background', 'background-color', 'rgba(0,0,0,0)'); 
          }
          map.current.resize(); 
        }); 
      }, []); 

    return (
    <>
      <div 
        ref={mapContainer} 
        style={{ 
              position: 'fixed',     // or 'absolute' if preferred
              top: 0,
              left: 0,
              width: '100vw',       // full viewport width
              height: '100vh',      // full viewport height
              zIndex: 1, 
        }} 
      />
    </> 
  );
}

export default SearchLoc; 