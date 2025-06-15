import React, { useEffect, useRef, useState } from "react"; 
import "./styling/Homepage.css";  
import { useNavigate  } from "react-router-dom";    
import "./styling/aboutPageButton.css"; 


// using the useNavigate Hook to dynamically switch between componenets. 


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

function Homepage(){ // this is our main react component.

  //instantiate navigate inside the react component 
  const navigate = useNavigate();  // i use this to dynamically change between pages. 

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

  // // create another function to handle button click  
  function buttonClick() { 
    // we actually call the path to where to go to 
    navigate('/about'); 
  }; 

  /* note that one thing of a error i ran into was the fact that when adding the button element it would slow up so to fix that i lay out a full background which is the vanta animation and then I 
  overlay the content in front of it cleanly. so essentially the first div below is necessary because it avoids the laggyness since it kept rendering the animations on top of the button*/ 

  return (
    <div style={{position: "relative", height: "100vh", width: "100vw"}}> 
      <div ref={vantaRef} style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', zIndex: 0, }} />

        <div className="homepage" style={{ position: "relative", zIndex: 1, textAlign: 'center', paddingTop: '30vh', color: 'white', fontWeight: 'bold' }}> 
          <h1 style={{ marginBottom: '15px', fontSize: '53px' }}>PollenMapz</h1>
          <p style = {{ marginTop: 0, marginBottom: '12px', fontSize: '17px'}}>Breathe easy—check real-time pollen levels in Parks near you in immersive 3D!</p> 
          <button style = {{marginTop: 5, marginBottom: '12px', fontSize: '14px', fontWeight: 'bold'}} className = "buttonStyle" onClick={buttonClick}>About PollenMapz</button>
        </div>
      </div>
  ); // if you are wondering the return statement in our react component defines what will be rendered on the screen when the component is used. 
}

export default Homepage;  

