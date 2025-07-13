// import mongoose 
const mongo = require('mongoose'); 
// import the csv to json 
const csv = require('csvtojson');  
// we need to call our data schema model since thats where we will be querying our data for when user enters location 
const ParkData = require('../Model/park.js'); // remember we are using the two dots the .. means "go up one folder" 
const {DB_URI} = require('../config/env.js');
//This code is designed to convert a CSV file to JSON and then insert that data into your MongoDB database — specifically into a ParkData collection using Mongoose.

// note that i can also write it as a async function which idk if is recommended to switch it to? to handle better error handling using await keyword on the connection. just remember to invoke that function 
// connect to the mongo db 
mongo.connect(DB_URI);  // need this to parse csv to json data. 


// now i need to load and parse the csv 
csv()
    .fromFile("./data/parkdata.csv")
    .then(async (jsonArray) => { 
        const transformingData = jsonArray
            .map((parkData, i) => {
                    return {
                        name: parkData["NAME311"], // if you are wondering the reason why we use NAME311 like the csv columns is because when you read a CSV file using a parser like csvtojson it creates a javascript object for each row, using the column headers as keys so you want to match everything up. 
                        address: parkData["ADDRESS"].toLowerCase(), // because address might be in lower case since the digits usually go first. 
                        borough: parkData["BOROUGH"], 
                        location: parkData["LOCATION"], 
                        multipolygon: parkData["MULTIPOLYGON"], 
                    }; 
                }) 
            .filter(Boolean); // removes all null entries  
        console.log(`Preparing to insert ${transformingData.length} documents...`); // added this line to test for bugs and see things that I may not see which i had before
        console.log(transformingData.slice(0, 2)); // preview first two did this for testing

        try { // put in a try or catch case to test if we have any errors running into the the data being loaded into mongodb 
            await ParkData.insertMany(transformingData);
            console.log('Data inserted Successfully!');
        } catch (err) {
            console.error('Insert failed:', err);
        } finally {
            mongo.disconnect(); // disconnect after data is inputted. 
        } 
    }); 
    
    // remember we dont need to export anything its just a script. 
    // what i had before here: no try or catch case to catch any missing errors 
    //     await ParkData.insertMany(transformingData); // inserts the cleaned data into mongodb 
    //     console.log("Data inserted Successfully!");
    //     mongo.disconnect(); // disconnect from the data base after script completes. 
    // })
    // .catch(error => { 
    //     console.error("Error", error); 
    //     mongo.disconnect();  
    // });

// now we need dont need to export the module file because this is going to only run once to convert the data  

//db.parkdatas.find().limit(5).pretty() 

//db.yourCollectionName.deleteMany({})
 
//to find a certain name such as this; db.parklocations.find({ name: "Central Park" }).pretty() 