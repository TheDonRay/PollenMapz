// note that i am going to have different routes so thats when we do the express.router() on those files on the route files. 
// in the app.js is where we import all of our routes. 

const express = require('express'); 
const app = express();  
// using CORS (cross Origin resource sharing) 
const cors = require('cors'); // since my backend and frontend are running on different routes 
require('dotenv').config(); // need this for the env setup that helps env variable 


app.use(cors()); // use CORS middleware  | had to install it thats why it wasn't working. 


// importing statements. 
const {PORT, NODE_ENV} = require('./config/env.js'); 
const Homepage = require('./routes/home.js'); 
const connectiondb = require('./database/mongo.js'); // data base stuff 
const locationSearch = require("./routes/search.js");   
const aboutpage = require('./routes/about.js'); 

/*===========================================================================================================================================================================================*/  

//Mounting a Router (or Router Middleware) in Express we do this in order to get access to a specific route in the project. like homepage or a certain route the user can visit.  
// use the key word use. 

app.use('/api/v1/', Homepage); // this is mounting a router and its more in depth to it the idea is that 
app.use('/api/v1/location', locationSearch); // mounting a router 
app.use('/api/v1/aboutPage', aboutpage); 
// key to understand that when mounting the routes we essentially need to call that same route in our fetch call in the frontend 


app.get('/', (req, res) => { // just to test that the server is running as of now. 
    res.send('Backend is Successfully Running'); 
});  




app.listen(PORT, async() => { 
    console.log(`Server is sucessfully running in ${NODE_ENV} mode on port http://localhost:${PORT}`);  

    await connectiondb(); // call this to wait for the db connection to come. 

}); 

module.exports = app; 