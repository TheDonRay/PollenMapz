// note that i am going to have different routes so thats when we do the express.router() on those files on the route files. 
// in the app.js is where we import all of our routes. 

const express = require('express'); 
const app = express(); 
require('dotenv').config(); 

// importing statements. 
const {PORT, NODE_ENV} = require('./config/env.js'); 
const Homepage = require('./routes/home.js'); 


//Mounting a Router (or Router Middleware) in Express we do this in order to get access to a specific route in the project. like homepage or a certain route the user can visit.  
// use the key word use. 
app.use('/', Homepage);


app.get('/', (req, res) => { 
    res.send('Backend is Successfully Running'); 
});  




app.listen(PORT, () => { 
    console.log(`Server is sucessfully running in ${NODE_ENV} mode on port http://localhost:${PORT}`); 
}); 

module.exports = app; 