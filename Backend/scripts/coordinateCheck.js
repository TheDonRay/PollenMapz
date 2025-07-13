const fetch = require('node-fetch'); 
const { MAPBOX_SECRET_TOKEN } = require('../config/env.js'); 
const MAPBOX_TOKEN = MAPBOX_SECRET_TOKEN;  // Replace with your actual token

// Sample places to verify
const places = [
  {
    name: "John Jay Park",
    address: "76-01 FDR drive",
coordinates:  [-97.198677, 32.885505] // [lng, lat]
  },
];

// Reverse geocode function (coordinates → address)
async function reverseGeocode(lng, lat) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&limit=1`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].place_name;
  }
  return null;
}

// Main verification function
async function verifyPlaces() {
  for (const place of places) {
    const [lng, lat] = place.coordinates;
    console.log(`Verifying: ${place.name}`);
    const mapboxAddress = await reverseGeocode(lng, lat);
    console.log(`Original Address: ${place.address}`);
    console.log(`Mapbox Address: ${mapboxAddress}`);
    console.log('-----------------------------');
  }
}

verifyPlaces();
