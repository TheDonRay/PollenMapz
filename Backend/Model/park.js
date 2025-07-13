const mongoose = require("mongoose"); 

// the reason why im doing this model schema is to determine how the data is  going to be stored in my mongoDb 
// set up the schema of the data location query that i want to get and understand how to map that data 
// may need to create another shcema as well for the pollen one 

const parkLocSchema = new mongoose.Schema({  
    // follow the syntax of what i have 
    name: String, // got it from the csv file for the db  NAME311
    address: String, //ADDRESS
    borough: String,   // from BOROUGH
    location: String, // from LOCATION (for now, keep as string since i dont have coordinates)
    multipolygon: mongoose.Schema.Types.Mixed,  


    coordinates: { 
        type: {
            type: String, 
            enum: ['Point'],  
            required: true, 
            default: 'Point',  
        }, 
        coordinates: { 
            type: [Number], 
            default: [0, 0], // here i changed it to 0,0 because it was not matching up with mongodb since mongodb its very strict on fields matching wit the model and the script. 
        }, 
    },
}); 

// export this schema as such  
// remember again we are doing commonJS  
parkLocSchema.index({ coordinates: '2dsphere' }); 

const ParkLocationModel = mongoose.model('ParkLocation', parkLocSchema); // note that when we query it going to be under ParkLocation but as plural and lower case so parklocations on mongoDB or mongosh
module.exports = ParkLocationModel; 

