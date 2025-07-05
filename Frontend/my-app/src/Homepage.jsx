import React, { useEffect, useRef } from "react"; // this i needed for the vantajs stuff 
import "./styling/Homepage.css";  // css styling 
import { useNavigate } from "react-router-dom";  // needed these so i can navigate to the next page. 
import "./styling/aboutPageButton.css"; // css style for the button 




function Homepage(){ // this is our main react component.

  //instantiate navigate inside the react component 
  const navigate = useNavigate();  // i use this to dynamically change between pages. 

  // this below is the vanta js background stuff 
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

  // create another function to handle button click  
  function buttonClick() { 
    // we actually call the path to where to go to for instance the about page which is a react component. 
    navigate('/about'); 
  }; 

  /* note that one thing of a error i ran into was the fact that when adding the button element it would slow up so to fix that i lay out a full background which is the vanta animation and then I 
  overlay the content in front of it cleanly. so essentially the first div below is necessary because it avoids the laggyness since it kept rendering the animations on top of the button*/ 

  return (
    <div style={{position: "relative", height: "100vh", width: "100vw"}}> 
      <div ref={vantaRef  } style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', zIndex: 0, }} />
        {/*the div below here is really important because it allows us to position element on top of the canvas animation using zIndex: 1 or any value greater than 1 */}
        <div className="homepage" style={{ position: "relative", zIndex: 1, textAlign: 'center', paddingTop: '30vh', color: '#06402B', fontWeight: 'bold' }}> 
          <h1 style={{ marginBottom: '15px', fontSize: '58px' }}>PollenMapz</h1>
          <p style = {{ marginTop: 0, marginBottom: '12px', fontSize: '17px'}}>Breathe easy—check real-time pollen levels in Parks near you in immersive 3D!</p> 
          <button style = {{marginTop: 5, marginBottom: '12px', fontSize: '16px', color: '#06402B', fontWeight: 'bold',  boxShadow: "0 4px 12px rgba(10, 97, 7, 0.84)", }} className = "buttonStyle" onClick={buttonClick}>Meet PollenMapz!</button> 
        </div>
      </div>
  ); // if you are wondering the return statement in our react component defines what will be rendered on the screen when the component is used. 
}

export default Homepage;  

