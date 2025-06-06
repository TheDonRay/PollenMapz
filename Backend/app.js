// note that i am going to have different routes so thats when we do the express.router() on those files on the route files. 
// in the app.js is where we import all of our routes. 

const express = require('express'); 
const app = express(); 
require('dotenv').config(); // need this for the env setup. 

// importing statements. 
const {PORT, NODE_ENV} = require('./config/env.js'); 
const Homepage = require('./routes/home.js'); 
const connection = require('./database/mongo.js'); 
const locationSearch = require("./routes/search.js") 

//Mounting a Router (or Router Middleware) in Express we do this in order to get access to a specific route in the project. like homepage or a certain route the user can visit.  
// use the key word use. 
app.use('/api/v1/home', Homepage); // this is mounting a router and its more in depth to it the idea is that 
app.use('/api/v1/', locationSearch); 



app.get('/', (req, res) => { 
    res.send('Backend is Successfully Running'); 
});  




app.listen(PORT, async() => { 
    console.log(`Server is sucessfully running in ${NODE_ENV} mode on port http://localhost:${PORT}`);  

    await connection(); // call this to wait for the db connection to come. 
}); 

module.exports = app; 