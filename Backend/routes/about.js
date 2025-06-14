// creating a new route to hold the button  
const express = require('express'); 
const about = express.Router(); 

// Set up http requests 
// page holds the 

about.get('/', (req, res) => { 
    res.send('about page is running'); 
});  

module.exports = about; 