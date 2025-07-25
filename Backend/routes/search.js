const express = require("express"); 
const searchLocation = express.Router(); // name of the route.   
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 
require('dotenv').config();  
const axios = require("axios"); 
// to get the user location 

// need to write this in a try catch case using await. Then console log errors to see where its going wrong. 
searchLocation.get('/search', async (req, res) => { // simple query to get the user location based of the location they put.  ,
    const getUserLocation = req.query.getUserLocation;  // in this line here 'm basically getting what the user enters that the frontend sent in the URL. 
    // console.log(getUserLocation); // error checking here
    
    // so the try and catch case logging the error works correctly. 
    try {   
        console.log("The Query reads the user entered this location:", getUserLocation);  
        console.log("Mongoose is using this collection:", Park.collection.name); 

        if (!getUserLocation){ 
            return res.status(400).json({ error: "Missing 'getUserLocation' query"})
        } 
        const Parkname = getUserLocation.split(',')[0].trim();
        const result = await Park.find({ name: new RegExp(Parkname, 'i')});  
        // console.log(result); // error checking here 

        if (!result || result.length === 0) { 
            return res.status(404).json({ error: 'No matching park found. '}); 
        } 
        const matchedPark = result[0];  // error is most likely here. 
        const [lng, lat] = matchedPark.coordinates.coordinates;   

        // console.log(matchedPark); 
        // console.log(lat, lng); // error found here  
        // coordinates are a property within itself 

        if (!lat || !lng) {
            return res.status(500).json({ error: "Park is missing coordinates." });
        }

    // Step 2: Get pollen severity from Google Maps Pollen API
        const pollenResponse = await axios.get("https://pollen.googleapis.com/v1/forecast:lookup", {
        params: {
            key: process.env.GOOGLE_MAPS_API_POLLEN_KEY,
            "location.latitude": lat,
            "location.longitude": lng,
            days: 1,
        },
    });     

        //console.log("Full pollen API response:", JSON.stringify(pollenResponse.data, null, 2)); // for debug purposes 


        const pollenData = pollenResponse.data.dailyInfo[0].pollenTypeInfo.filter(type => type.indexInfo).map(type => ({
            type: type.code, // TREE, GRASS, WEED
            severity: type.indexInfo?.category,// Low, Moderate, High
            index: type.indexInfo?.value, 
        }));  

        console.log(pollenData) 

        res.json({ 
            location: matchedPark.name, 
            coordinates: matchedPark.coordinates, 
            pollen: pollenData, 
        }); 
    } 
    catch (error) { // this error is hit so definetly need to revamp and re check the error on this route.      
        console.error('Server failed', error);  
        res.status(500).json({ error: "Internal Server Error. "}); // wriritng errors here  

    }
     
   
    // here the user result will go where we need to find that data that was posted here but for now I will just console.log the item  
     
      // we call this line essentially querying the database.    
    
    // what this line does here is that the Park.find is a mongoose query that searches the MongoDB collection associated with the park model 
    //the line { name: new RegExp(getUserLocation, 'i)} this is the filter criteria. Its saying search for documents where the name field matches the regular expression. 
    // query which in our case is the getUserLocation is expected to be a string containing the user's search input 
    // new RegExp(query (in our case query = getUserLocation), 'i') creates a regular expression that matches the value of the query, and the 'i' flag makes it case-insensitive.  
    // example: if query = central it will match with "Central Park" etc
});  

module.exports = searchLocation; 

// general syntax to get user input from Query Params in Express 
/* routename.get('/nameofroute', (req, res) => { 
        const queryname = req.query.queryname;  
        after you can use userInput to query your database or do other things 

        for example if you want to use the input to query MongoDb you can do the following 
        const result = await Park.find({ 
            name: new RegExp(queryname, 'i') // this handles case-insensitive match. 
        }) 
        res.json(result); // sends back the result to the client 
    })

    */



// here i was just playing around with the querying querying here 
// searchLocation.get('/search', async (req, res) => {  // represents the search page for when you are searching for location. 
//      need to be able to get the search req that use rputs in  
//     res.send("Yes this backend is running"); 
//     can i do a settime out function for this ? 
//     setTimeout(() => { 
//         const SearchedLocation = req.query.SearchedLocation; 
//          console.log(`Your location is ${req.query.SearchedLocation}`); // this will print after the 5 seconds are reached. 
//     }, 5000);     
//     console.log("Fetching Data......");  // this will print immediately.  

//     // next step is to actually incorporate the searching using the data park data model that holds the model schema of how the data is presented in the mongoDb. 
// });   db.parks.find({ name: "Central Park" })