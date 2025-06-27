// import mongoose 
const mongo = require('mongoose'); 
// import the csv to json 
const csv = require('csvtojson');  
// we need to call our data schema model since thats where we will be querying our data for when user enters location 
const ParkData = require('../Model/park.js'); // remember we are using the two dots the .. means "go up one folder" 


// connect to the db 
mongoose.connect('mongodb://localhost:27017/pollenmapz', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}); 


