const express = require("express"); 
const searchLocation = express.Router();  
// import the model schema 
const Park = require("../Model/park.js"); // include the model of how the database should look with the data there. 

// to get the user location 

// need to write this in a try catch case using await. Then console log errors to see where its going wrong. 
searchLocation.get('/search', async (req, res) => { // simple query to get the user location based of the location they put.  ,
    const getUserLocation = req.query.getUserLocation;   
    console.log(req.query.getUserLocation); 
    
    // here the user result will go where we need to find that data that was posted here but for now I will just console.log the item  
    // console.log(`You entered: ${getUserLocation}`); 
    const result = await Park.find({ name: new RegExp(getUserLocation, 'i')});  // we call this line essentially querying the database.    
    console.log(result); 
    // what this line does here is that the Park.find is a mongoose query that searches the MongoDB collection associated with the park model 
    //the line { name: new RegExp(getUserLocation, 'i)} this is the filter criteria. Its saying search for documents where the name field matches the regular expression. 
    // query which in our case is the getUserLocation is expected to be a string containing the user's search input 
    // new RegExp(query (in our case query = getUserLocation), 'i') creates a regular expression that matches the value of the query, and the 'i' flag makes it case-insensitive.  
    // example: if query = central it will match with "Central Park" etc
    res.json(result); 
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