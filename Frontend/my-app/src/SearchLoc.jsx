
// importing the mapbox stuff 
import mapboxgl from 'mapbox-gl';  
import 'mapbox-gl/dist/mapbox-gl.css'; 

import "./styling/searchloc.css" // importing the css files   
import React, { useEffect, useRef } from "react";
//importing the mapbox secret token stuff: 


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_SECRET_TOKEN;  

// creating function for the map stuff / and the vanta js library stuff 

function SearchLoc() {  

    // below is just the vantaJS library stuff nothing to much. 
      const vantaRef = useRef(null);  // create a ref to the DOM element
      const vantaEffect = useRef(null); 

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
    
      useEffect(() => {
        if (!vantaEffect.current && window.VANTA && window.VANTA.CLOUDS) {
          vantaEffect.current = window.VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 1.5
          });
        }
    
        return () => {
          if (vantaEffect.current){ 
            vantaEffect.current.destroy(); 
            vantaEffect.current = null; 
          }
        };
      }, []); 

    return (
    <>
      <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
        <div
          ref={vantaRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}> 
      <div 
        ref={mapContainer} 
        style={{ 
            width: '100%',           // full width of parent container
            maxWidth: '800px',       // a bit wider max width
            height: '600px',         // taller height for a balanced card shape
            margin: '20px auto',     // center horizontally with vertical spacing
            backgroundColor: '#fff', // white background for card feel
            borderRadius: '12px',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',  // subtle shadow
            border: '1px solid #ccc',
            overflow: 'hidden',
        }} 
      />
        </div>
      </div>
    </> 
  );
}

export default SearchLoc; 