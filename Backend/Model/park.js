const mongoose = require("mongoose"); 

// the reason why im doing this model schema is to determine how the data is  going to be stored in my mongoDb 
// set up the schema of the data location query that i want to get and understand how to map that data 
// may need to create another shcema as well for the pollen one 

const parkLocSchema = new mongoose.Schema({  
    // follow the syntax of what i have 
    name: String, 
    address: String,  
    coordinates: { 
        lat: Number, // the reason so is because we need to convert the actual address from csv to json data. 
        lng: Number, 
    }, 
    borough: String, 
    multipolygon: Object, 
}); 

// export this schema as such  
// remember again we are doing commonJS 

const ParkLocationModel = mongoose.model('ParkLocation', parkLocSchema); 
module.exports = ParkLocationModel; 

