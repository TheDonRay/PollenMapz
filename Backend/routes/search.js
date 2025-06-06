const express = require("express"); 
const searchLocation = express.Router(); 


searchLocation.get('/locationHomePage', (req, res) => { 

    //const { address } = req.query; 

    res.send("Welcome to location page"); 
});  

searchLocation.get('/location', (req, res) => { 

    res.send("Getting location of where you are"); 
}); 

module.exports = searchLocation; 