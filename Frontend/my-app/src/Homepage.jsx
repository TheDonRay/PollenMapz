import React, { useEffect, useRef, useState } from "react"; 
import "./styling/Homepage.css";  


// to access backend data use fetech or axios to make HTTP requests.  
//import axios from 'axios'; 

// example of testing and fetching from the backend just testing some stuff 

// function Homepage() { 

//     const [backendMessage, setBackendMessage] = useState('');  

//     function handleClick() { 
//         // going to use the fetch keyword 
//         // in the fetch keyword we are going to call it at where our route is which in this case is at api/v1/home
//         fetch('/api/v1/home')
//             .then((res) => res.text())  // the res data and err are all callback functions meaning that 
//             .then((data) => setBackendMessage(data))
//             .catch((err) => console.error(err)); 
//     } 

//     return (
//         <div> 
//             <button onClick={handleClick}>View Backend data</button>

//             <div className="homepage">
//             <h1>Welcome to PollenMapz</h1>
//         </div>

//       {backendMessage && (
//         <div>
//           <h2>Backend says:</h2>
//           <p>{backendMessage}</p>
//         </div>
//         )}
//     </div>
//     ); // need to add cool background picture im thinking of keeping the button just to make sure i understand but depends after i take 
//     // notes in my backend dev notebook. 
// }

/* ======================================================================================================================================================== */ 

function Homepage(){ 

  const vantaRef = useRef(null);  // create a ref to the DOM element
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.CLOUDS) {
      const effect = window.VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0xd78268,
        sunColor: 0xffd618,
        sunlightColor: 0x3c30ff,
        speed: 2.10,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ height: '100vh', width: '100vw' }}>
      <div className="homepage" style={{ textAlign: 'center', paddingTop: '30vh', color: 'white', fontWeight: 'bold' }}>
        <h1>PollenMapz</h1>
        <p>Breathe easy—check real-time pollen levels in immersive 3D!</p>
      </div>
    </div>
  );
}

export default Homepage;  

