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
        console.log(SearchedLocation); 
    }, 5000);   
    console.log(`Your location is ${SearchedLocation}`); 
}); 

module.exports = searchLocation; 