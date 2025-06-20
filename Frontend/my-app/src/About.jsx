import React from 'react'; 
import './styling/aboutPage.css' 
import { useEffect, useState, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';

// create the about jsx file here which holds why i created this website. 
// do want to include some other 3d features from the library i found 

// another thing that I do want to mention is that to use the cells i just made sure to add the script in the index html file. 

function About() { // main component function 
    // basically want it to import the backend data but first i need to import the background animation with vantaJS so lets try that out.  
    const navigate = useNavigate(); // using this to navigat between pages. 

    // need to add the useEffect and use state for fetching data from the backend 
    const [data, setAboutData] = useState(null);  

    // set up the useEffect route here to fetch data from the backend for the about me text and display in paragraph. 
    useEffect(()=> { 
      // define variable to hold async function to get the data from the backend at the restful api 
  
    }, []); 
    // below is for the vanta js state stuff. 
    const vantaRef = useRef(null);  
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
            skyColor: 0xd98127,
            cloudColor: 0xd9d3d3,
            cloudShadowColor: 0x1f2e57,
            sunColor: 0xb9742c,
            sunGlareColor: 0xd75d44,
            sunlightColor: 0xd48241,
            speed: 2.50
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
        navigate('/search'); 
      }; 
    
      /* note that one thing of a error i ran into was the fact that when adding the button element it would slow up so to fix that i lay out a full background which is the vanta animation and then I 
      overlay the content in front of it cleanly. so essentially the first div below is necessary because it avoids the laggyness since it kept rendering the animations on top of the button*/ 
    
      return (
        <div style={{position: "relative", height: "100vh", width: "100vw"}}> 
          <div ref={vantaRef  } style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', zIndex: 0, }} />
            {/*the div below here is really important because it allows us to position element on top of the canvas animation using zIndex: 1 or any value greater than 1 */}
            <div className="aboutPage" style={{ position: "relative", zIndex: 1, textAlign: 'left', paddingTop: '30vh', paddingLeft: '10vw', color: '#06402B', fontWeight: 'bold' }}> 
              <h1 className = "heading">About PollenMapz</h1> 
              <button style = {{marginTop: -20, marginBottom: '10px', fontSize: '15px', color: '#06402B', fontWeight: 'bold'}} className = "buttonStyle" onClick={buttonClick}>Discover Your Park!</button> 
            </div>
          </div>
      ); // if you are wondering the return statement in our react component defines what will be rendered on the screen when the component is used. 
}

export default About; 