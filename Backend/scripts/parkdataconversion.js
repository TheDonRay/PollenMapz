// import mongoose 
const mongo = require('mongoose'); 
// import the csv to json 
const csv = require('csvtojson');  
// we need to call our data schema model since thats where we will be querying our data for when user enters location 
const ParkData = require('../Model/park.js'); // remember we are using the two dots the .. means "go up one folder" 
const { default: mongoose } = require('mongoose');



// connect to the db 
mongoose.connect('mongodb://localhost:27017/pollenmapz', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}); 

// now i need to load and parse the csv 
csv()
    .fromFile("./data/parkdata.csv") // path to the data  
    .then(async (jsonArray) => { 
        const transformingData = jsonArray.map(parkData => ({ // transforming data represents the array of objects 
            name: parkData.name, 
            address: parkData.address, 
            coordinates: { 
                lat: parseFloat(parkData.lat), 
                lng: parseFloat(parkData.lng) 
            }
        }));  

        // now we want to go ahead and inset into mongodb 
        await ParkData.insertMany(transformingData); 
        console.log("Data inserted Successfully !");  
        // now go ahead and close the connection 
        mongoose.disconnect(); 
    })
    .catch(error => { 
        console.error("Error", error); 
        mongoose.disconnect();  
        });  

