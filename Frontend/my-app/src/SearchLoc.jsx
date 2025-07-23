import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import "./styling/searchloc.css";
import React, { useEffect, useRef } from "react";

// google api key stuff here  
const POLLEN_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_POLLEN_KEY; 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_SECRET_TOKEN;

function SearchLoc() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geocoderContainer = useRef(null);

  useEffect(() => {
    if (map.current) return;

    // Create map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [0, 20],
      zoom: 1.5,
    });

    // Create geocoder // this is for the search bar feature
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Enter a Park',
      marker: false,
    });

    geocoderContainer.current.appendChild(geocoder.onAdd(map.current));

    // On search result:
    geocoder.on('result', async (e) => {
      const { center, place_name } = e.result; 
      console.log('User searched:', place_name);
      console.log('Coordinates:', center);

      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/location/search?getUserLocation=${encodeURIComponent(place_name)}` // so here like the way the it gets the user entered location is from the placeholder and that is the place name that is added into the req query parameter. From there logic is handedin our backend. 
        );

        const data = await response.json();
        console.log('response in frontend', data);

        const pollenInfoHtml = (data.pollen || [])
          .map(p => `
            <div>
              <strong>${p.type}</strong>: ${p.severity} (Index: ${p.index})
            </div>
          `)
          .join('');
        // Add marker
        new mapboxgl.Marker()
          .setLngLat(center)
          .setPopup(new mapboxgl.Popup().setHTML(`
              <h2>${data.location || place_name}</h2>
              <h3>Pollen Levels</h3>
              ${pollenInfoHtml || '<p>No pollen data available.</p>'}
            `)
          )
          .addTo(map.current); 

          // Zoom in on the searched area
        map.current.flyTo({ center: center, zoom: 10 });

      } catch (error) {
        console.error('Error fetching match:', error);
      }
    });

    // Resize and background fix
    map.current.on('load', () => {
      if (map.current.getLayer('background')) {
        map.current.setPaintProperty('background', 'background-color', 'rgba(0,0,0,0)');
      } 
      console.log("Google API key loaded:", POLLEN_API_KEY);
   
      map.current.resize();
    });
  }, []);

  // here is where it shows things into the frontend. 
  return (
    <>
      <div
        ref={mapContainer}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1,
        }}
      />
      {/*the div below here adds the actual search bar stuff here*/}
      <div 
        ref={geocoderContainer}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          width: '300px',
        }}
      />
    </>
  );
}

export default SearchLoc;
