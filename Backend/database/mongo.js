// install mongo js on this    
const mongoose = require('mongoose'); 
const {DB_URI, NODE_ENV} = require('../config/env.js'); 

// need to check if DB is successfuly connected to our backend server .  
if(!DB_URI) { 
    throw new Error("Error connecting to Database"); 
} 
 

async function ConnectionDatabase() { 

    try {  
    
        await mongoose.connect(DB_URI);  
        console.log(`MongoDB connected in ${NODE_ENV} mode`); 

    } 
    catch(error) {  
        
        console.error('Error connecting to Database', error); 
        process.exit(1); 
    }

}  

module.exports = ConnectionDatabase; 

