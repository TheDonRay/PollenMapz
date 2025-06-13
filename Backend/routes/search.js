const express = require("express"); 
const searchLocation = express.Router(); 

// to get the user location 

searchLocation.get('/locationHomePage', (req, res) => {  // represents the home page of the location part. 

    res.send("Welcome to Location Home page"); 
});  

searchLocation.get('/search', (req, res) => {  // represents the search page for when you are searching for location. 

    res.send("Getting location of where you are"); 
}); 

module.exports = searchLocation; 