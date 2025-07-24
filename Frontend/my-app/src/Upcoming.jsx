import React, { useEffect, useRef } from "react";
import "./styling/upcomingfeatures.css";

function UpcomingFeatures() {
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
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Will fetch data inside here later and represent it on the frontend
return (
  <>
    <div style={{ position: "relative", height: "100vh", width: "100vw", margin: 0 }}>
      {/* Vanta Background */}
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

      {/* Title Section */}
      <div
        style={{
          fontSize: 30,
          color: "#06402B",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: 50,
          fontWeight: "bold",
        }}
      >
        <u style={{ color: "#06402B" }}>
          <h1 style={{ color: "#06402B" }}>Upcoming Features:</h1>
        </u>
      </div>

      {/* Subheading */}
      <div
        style={{
          fontSize: 30,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: 55,
          fontWeight: "bold",
        }}
      >
        <h3 style={{ color: "#06402B", marginBottom: "1rem" }}>AI Feature</h3>
      </div>

      {/* Centered Card with Paragraph */}
      <div
        style={{
          backgroundColor: "transparent",
          padding: "1.5rem",
          maxWidth: "500px",
          margin: "1rem auto", // centers horizontally
          marginTop: "80px",  // creates space below "AI Feature"
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <p style={{ fontSize: 20, color: "#06402B", lineHeight: "1.5" }}>
          The AI feature will allow users to explore various parks and receive personalized recommendations based on their preferred activities, group size, parking availability, and, most importantly, pollen severity. Using this information, the AI will identify and suggest the park that best matches each user’s preferences.
        </p>
      </div> 

        <div
            style={{
            fontSize: 30,
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            top: 30,
            fontWeight: "bold",
            }}
        >
            <h3 style={{ color: "#06402B", marginBottom: "1rem" }}>Direction's Feature</h3>
        </div>
        <div
        style={{
          backgroundColor: "transparent",
          padding: "1.5rem",
          maxWidth: "500px",
          margin: "1rem auto", // centers horizontally
          marginTop: "50px",  // creates space below "AI Feature"
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <p style={{ fontSize: 20, color: "#06402B", lineHeight: "1.5" }}>
         Once our AI suggests the perfect park for your needs, the Directions feature helps you 
         get there effortlessly. Instantly access the best route, real-time traffic 
         updates, and travel time estimates, so you can spend less time navigating and 
         more time enjoying your day outdoors.
        </p>
      </div> 

    </div>
  </>
);

}

export default UpcomingFeatures;
