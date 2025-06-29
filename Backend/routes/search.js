const express = require("express"); 
const searchLocation = express.Router();  
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 

// to get the user location 

searchLocation.get('/search', async (req, res) => {  // represents the search page for when you are searching for location. 
    //  need to query database based of user location entered in the search bar  
    // const query = req.query.location; 
    // const result = await query
}); 

module.exports = searchLocation; 