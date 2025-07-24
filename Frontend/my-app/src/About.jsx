import React from 'react'; 
import './styles/aboutPage.css'  
import './styles/abtcreatorbutton.css'
import { useEffect, useState, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom'; 


// create the about jsx file here which holds why i created this website. 
// do want to include some other 3d features from the library i found 

// another thing that I do want to mention is that to use the cells i just made sure to add the script in the index html file. 

function About() { // main component function 
    // basically want it to import the backend data but first i need to import the background animation with vantaJS so lets try that out.  
    const navigate = useNavigate(); // using this to navigat between pages. 
        // create another function to handle button click  
      function buttonClick() { 
        // we actually call the path to where to go to for instance the about page which is a react component. 
        navigate('/search'); 
      };   

      // creating another function to handle the about creator click which is going to send me to linkedn 
      function aboutCreatorButton() { // here i just created a function to handle the second button click that leds you to my linkedn 
        window.location.href = "https://www.linkedin.com/in/rayatchowdhury2005/" // locatio href is typically used It is used in JavaScript to redirect the browser to a new URL. 
      } 

      // create another button feature where  
      function upcomingFeaturesButton() { 
        // route this to a seperate route that holds like a cool little page on updates and different things to expect.  
        navigate('/upcoming-features'); 
      }

    
    // need to add the useEffect and use state for fetching data from the backend 
    const [data, setAboutData] = useState(null);  // use state basically re renders the component on the page when data is updated. 

    // set up the useEffect route here to fetch data from the backend for the about me text and display in paragraph. 
    useEffect(()=> { 
      // define variable to hold async function to get the data from the backend at the restful api 
      const fetchData = async () => { 
        try { 
          const response = await fetch('http://localhost:8000/api/v1/aboutPage'); // follow the prefix + path syntax and fetch on the route you have 
          const result = await response.text(); // was displaying text data in the backend 
          setAboutData(result);  
        } 
        catch(error) { 
          console.error('Error fetching data', error); 
        }
      }; 
      fetchData(); // invoking this function 
    }, []); // make sure i run only once 

    // below is for the vanta js library for state background 
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
            skyColor: 0xdc8948,
            cloudColor: 0xd7d7d7,
            sunColor: 0xffd618,
            sunGlareColor: 0xff9130,
            sunlightColor: 0x965555,
            speed: 1.40
          });
        }
    
        return () => {
          if (vantaEffect.current){ 
            vantaEffect.current.destroy(); 
            vantaEffect.current = null; 
          }
        };
      }, []);
    
      /* note that one thing of a error i ran into was the fact that when adding the button element it would slow up so to fix that i lay out a full background which is the vanta animation and then I 
      overlay the content in front of it cleanly. so essentially the first div below is necessary because it avoids the laggyness since it kept rendering the animations on top of the button*/ 
    
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
        }}
      />

      {/* Parent flex container for both sections */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4rem",
          paddingLeft: "3.3vw",
          paddingRight: "10vw",
          height: "75vh",
          color: "#06402B",
          fontWeight: "bold",
        }}
      >
        {/* About Section */}
        <div className="aboutPage" style={{ textAlign: "left", marginTop: "-10rem" }}>
          <h1 className="heading">About PollenMapz</h1>
          <button
            style={{
              marginTop: 20,
              marginBottom: "10px",
              fontSize: "16px",
              color: "#06402B",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(10, 97, 7, 0.84)",
            }}
            className="buttonStyle"
            onClick={buttonClick}
          >
            Discover Your Park!
          </button>
        </div>

        {/* Card Section */}
        <div
          style={{
            backgroundColor: "transparent",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(10, 97, 7, 0.84)",
            minWidth: "300px",
            maxWidth: "500px",
          }}
        >
          <h1>What Is PollenMapz?</h1>
          <p
            style={{
              color: "black",
              fontSize: "17px",
              wordSpacing: "2px",
              lineHeight: "19px",
            }}
          >
            {data ? data : "Loading..."}
          </p>

          {/* Buttons Row */}
          <div
            style={{
              display: "flex",
              gap: "9.4rem",
              marginTop: "1rem",
            }}
          >
            <button
              className="creator-btn"
              onClick={aboutCreatorButton}
              style={{
                boxShadow: "0 4px 12px rgba(10, 97, 7, 0.84)",
              }}
            >
              About Creator
            </button>

            <button
              className="upcoming-feature-btn"
              onClick={upcomingFeaturesButton}
              style={{
                boxShadow: "0 4px 12px rgba(10, 97, 7, 0.84)", color: '#06402B', fontWeight: "bold",
              }}
            >
              Upcoming Features
            </button>
          </div>
        </div> {/* <-- closes Card Section */}
      </div> {/* <-- closes Parent Flex Container */}
    </div> {/* <-- closes Full Page Container */}
  </>
)};

export default About;
