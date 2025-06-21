// install mongo js on this    
const mongoose = require('mongoose'); // import the library 
const {DB_URI, NODE_ENV} = require('../config/env.js'); // where i ran into a issue forgot the two dots vs one dot can create a big issue

// need to check if DB is successfuly connected to our backend server .  
if(!DB_URI) { 
    throw new Error("Error connecting to Database"); 
} 
 

async function ConnectionDatabase() { 

    try { 
        await mongoose.connect(DB_URI); // waiting for the connection to happen 
        console.log(`MongoDB connected in ${NODE_ENV} mode`)
    } 
    catch(error){ 
        console.error('Error connecting to Database', error);  
        process.exit(1); // used for errors 
    }
};

// function ConnectionDatabase() { 

//     return new Promise(async (resolve, reject) => { 
//             try {  
//                 await mongoose.connect(DB_URI);  
//                 resolve(`MongoDB connected in ${NODE_ENV} mode`); 
//             } 
//             catch(error) {  
//                 reject('Error connecting to Database', error); 
//                 process.exit(1); 
//             } 
//         });  

//}
// go ahead an invoke the function with the then cases and catch cases also known as methodchaining. 


    // try that new promise approach to see if you can do that and practice it see if it will work from what you learned to test yourself. 
    // return new Promise((resolve, reject) => {async code} ); general formula. 


module.exports = ConnectionDatabase; 

