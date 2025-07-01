const express = require("express"); 
const searchLocation = express.Router();  
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 

// to get the user location 

// here i was just playing around with the querying querying here 
// searchLocation.get('/search', async (req, res) => {  // represents the search page for when you are searching for location. 
//     // need to be able to get the search req that use rputs in  
//     res.send("Yes this backend is running"); 
//     // can i do a settime out function for this ? 
//     setTimeout(() => { 
//         const SearchedLocation = req.query.SearchedLocation; 
//          console.log(`Your location is ${req.query.SearchedLocation}`); // this will print after the 5 seconds are reached. 
//     }, 5000);     
//     console.log("Fetching Data......");  // this will print immediately.  

//     // next step is to actually incorporate the searching using the data park data model that holds the model schema of how the data is presented in the mongoDb. 
// });  

// instead im just going to write a regular query to get data from the url that user enters.  apparently its async 
// going need to add the map and find function to find a specific query in the mongoose database. 
searchLocation.get('/search', (req, res) => { // simple query to get the user location based of the location they put.  
    res.send("Route is good and running"); 
    const getUserLocation = req.query.getUserLocation; 
    // here the user result will go where we need to find that data that was posted here but for now I will just console.log the item 
    console.log(getUserLocation); 
})

module.exports = searchLocation; 