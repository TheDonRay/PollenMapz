// create a home page route for users to understand what pollen mapz is  
const express = require('express'); 
const homePage = express.Router();  


homePage.get('/home', (req, res) => {
    const userName = req.query.user;  // Access the query parameter `?user=ray`
    
    if (userName) {
        res.send(`Welcome, ${userName}, to Pollen Mapz!`);
    } else {
        res.send("Welcome to Pollen Mapz! Please provide a name.");
    }
});


module.exports = homePage; 