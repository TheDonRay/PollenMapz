const mongoose = require('mongoose');
const fetch = require('node-fetch');  // need to install this so do npm install node-fetch however i need to downgrade it do the command npm uninstall node-fetch then npm install node-fetch@2 
const ParkLocationModel = require('../Model/park.js'); // rememeber the two dots represent the folder switching. 
const { DB_URI, MAPBOX_SECRET_TOKEN } = require('../config/env.js'); 


const MAPBOX_TOKEN = MAPBOX_SECRET_TOKEN;

async function geocodeAddress(address) {
  const encoded = encodeURIComponent(address);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${MAPBOX_TOKEN}&limit=1`;
  const res = await fetch(url);
  const data = await res.json(); 

  console.log('Mapbox response:', JSON.stringify(data)); // added this for just console error logging 

  if (data.features && data.features.length > 0) {
    // Mapbox returns coordinates as [longitude, latitude]
    return data.features[0].center;
  }
  return null;
}

async function updateParksWithCoordinates() {
  await mongoose.connect(DB_URI);

  const parks = await ParkLocationModel.find({ 'coordinates.coordinates': [0, 0] });
  console.log(`Found ${parks.length} parks without coordinates.`);

  for (const park of parks) {
    const addressToGeocode = park.address || park.location || park.name;
    if (!addressToGeocode) continue;

    console.log(`Geocoding: ${addressToGeocode}`);

    try {
      const coords = await geocodeAddress(addressToGeocode);
      if (coords) {
        park.coordinates = {
          type: 'Point',
          coordinates: coords,  // [lng, lat]
        };
        await park.save();
        console.log(`Updated ${park.name} with coordinates: ${coords}`);
      } else {
        console.log(`No coordinates found for ${park.name}`);
      }
    } catch (err) {
      console.error(`Error geocoding ${park.name}:`, err);
    }
  }

  await mongoose.disconnect();
  console.log('Finished updating parks with coordinates.');
}

updateParksWithCoordinates();
