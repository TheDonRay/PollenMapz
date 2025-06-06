const express = require("express"); 
const searchLocation = express.Router(); 


searchLocation.get('/', (req, res) => {  // represents the home page of the location part. 

    //const { address } = req.query; 

    res.send("Welcome to Location Home page"); 
});  

searchLocation.get('/search', (req, res) => {  // represents the search page for when you are searching for location. 

    res.send("Getting location of where you are"); 
}); 

module.exports = searchLocation; 