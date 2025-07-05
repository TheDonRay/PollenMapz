
import "./styling/searchloc.css" // importing the css files   
import React, { useEffect, useRef } from "react";

// basically helps with changing between pages/components in React. Keeps the app fast and responsive. 


// will include the google maps API 
// this will have a different background compared to the front two pages 
// this will also incorporate the google maps api key stuff 

function SearchLoc() { 
    const vantaRef  = useRef(null); 
    const vantaEffect = useRef(null);  

    // function to insert the search bar stuff and test out 

    useEffect(() => { 
        if(!vantaEffect.current && window.VANTA && window.VANTA.WAVES){ 
            vantaEffect.current = window.VANTA.WAVES({  
                el: vantaRef.current, 
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xd06402b, 
                shininess: 36.00,
                waveHeight: 22.50,
                waveSpeed: 1.10,
                zoom: 0.71
            }); 
        } 
        
        return () => { 
            if (vantaEffect.current) { 
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
        </div>
      </div>
    </>
  );
}

export default SearchLoc; 