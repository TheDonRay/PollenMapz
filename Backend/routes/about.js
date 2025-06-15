// creating a new route to hold the button  
const express = require('express'); 
const about = express.Router(); 

// Set up http requests 
// page holds the 

about.get('/', (req, res) => { 
    res.send('about page is running');  
});  



// future cool feature to think about 
// users can send me back feed back that can be stored in the data base and that feed back gets a response back through my email.  

module.exports = about; 