
import "./styling/searchloc.css" // importing the css files   
import React, { useEffect, useRef } from "react";

// basically helps with changing between pages/components in React. Keeps the app fast and responsive. 


// will include the google maps API 
// this will have a different background compared to the front two pages 
// this will also incorporate the google maps api key stuff 
// want to keep the background consistent. 

function SearchLoc() {  

    // below is just the vantaJS library stuff nothing to much. 
      const vantaRef = useRef(null);  // create a ref to the DOM element
      const vantaEffect = useRef(null);
    
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
        </div>
      </div>
    </>
  );
}

export default SearchLoc; 