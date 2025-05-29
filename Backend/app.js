// note that i am going to have different routes so thats when we do the express.router() on those files on the route files. 
// in the app.js is where we import all of our routes. 

const express = require('express'); 
const app = express(); 
require('dotenv').config(); 


const {PORT, NODE_ENV} = require('./config/env.js'); 

app.get('/', (req, res) => { 

    res.send('Backend is Successfully Running'); 
}); 


app.listen(PORT, () => { 
    console.log(`Server is sucessfully running in ${NODE_ENV} mode on port http://localhost:${PORT}`); 
}); 

module.exports = app; 