const express = require('express'); 
const upcoming = express.Router(); 

// the goal of this route is to basically have it where it shows the many different tasks or future things i want to do with the project.  
upcoming.get('/features', (req, res) => { 
    res.json({ 
        RoutePurpose: 'To show client/users progress and upcoming features for the app'
    }); 
})



module.exports = upcoming; 