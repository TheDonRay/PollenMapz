const express = require("express"); 
const searchLocation = express.Router();  
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 

// to get the user location 

searchLocation.get('/search', (req, res) => {  // represents the search page for when you are searching for location. 

    res.send("search route is running fine i believe"); 
}); 

module.exports = searchLocation; 