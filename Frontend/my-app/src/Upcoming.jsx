import React, { useEffect, useRef } from "react";
import "./styling/upcomingfeatures.css";

function UpcomingFeatures() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && window.VANTA.HALO) {
      vantaEffect.current = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x590500,
        amplitudeFactor: 2.5,
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
        <div style={{ position: "relative", zIndex: 1, color: "#fff", textAlign: "center", top: 30}}>
          <h1>Upcoming Features</h1>
          <h2>Some of my upcoming features are the following:</h2>
        </div> 
      </div>
    </>
  );
}

export default UpcomingFeatures;
