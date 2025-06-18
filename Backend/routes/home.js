// create a home page route for users to understand what pollen mapz is  
const express = require('express'); 
const homePage = express.Router();  


homePage.get('/', (req, res) => {
    res.send("Welcome to PollenMapz")
});  





module.exports = homePage; 