// install mongo js on this    
const mongoose = require('mongoose'); // import the library 
const {DB_URI, NODE_ENV} = require('../config/env.js'); // where i ran into a issue forgot the two dots vs one dot can create a big issue

// need to check if DB is successfuly connected to our backend server .  
if(!DB_URI) { 
    throw new Error("Error connecting to Database"); 
} 
 

async function ConnectionDatabase() { // function name to connect the database but first you need to make sure that mongo db is actually installed in your machine. 

    try { 
        await mongoose.connect(DB_URI); // waiting for the connection to happen 
        console.log(`MongoDB connected in ${NODE_ENV} mode`)
    } 
    catch(error){ 
        console.error('Error connecting to Database', error);  
        process.exit(1); // used for errors 
    }
};


module.exports = ConnectionDatabase; 

