// creating a new route to hold the button  
const express = require('express'); 
const about = express.Router(); 

// Set up http requests 
// page holds the 

about.get('/', (req, res) => {  
    res.send(`
        PollenMapz helps you enjoy the outdoors while staying safe from allergies. By combining real-time pollen data with a location-based view,
        it lets you check how allergy-friendly a park or area is before you go.Whether you're planning a walk or a weekend picnic, PollenMapz gives 
        you clear, visual pollen insights — so you can breathe easy and explore confidently.
        `);  
});  



// future cool feature to think about 
// users can send me back feed back that can be stored in the data base and that feed back gets a response back through my email.  

module.exports = about; 