const express = require("express"); 
const searchLocation = express.Router();  
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 

// to get the user location 

// now im familiar with the querying here 
searchLocation.get('/search', async (req, res) => {  // represents the search page for when you are searching for location. 
    // need to be able to get the search req that use rputs in  
    res.send("Yes this backend is running"); 
    // can i do a settime out function for this ? 
    setTimeout(() => { 
        const SearchedLocation = req.query.SearchedLocation; 
         console.log(`Your location is ${req.query.SearchedLocation}`); // this will print after the 5 seconds are reached. 
    }, 5000);     
    console.log("Fetching Data......");  // this will print immediately.  

    // next step is to actually incorporate the searching using the data park data model that holds the model schema of how the data is presented in the mongoDb. 
}); 

module.exports = searchLocation; 