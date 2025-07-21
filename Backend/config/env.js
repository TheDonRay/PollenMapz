const dotenv = require('dotenv'); // we are importing the dotenv package which allows us to load env variables from .env file into process.env 
const path = require('path'); // This is a core Node.js module that helps you work with file and directory paths in a consistent way across operating systems.

// load right env file depending on the enviorment 
dotenv.config({ //path.resolve() builds an absolute path to your .env file.
    path: path.resolve(__dirname, `../env.${process.env.NODE_ENV || 'development'}`) // this loads the environment variables from a specific file.
}); 

// now we can export 

module.exports = { 
    PORT: process.env.PORT, 
    NODE_ENV: process.env.NODE_ENV,  
    DB_URI: process.env.DB_URI, // this is for the mongo DB 
    MAPBOX_SECRET_TOKEN: process.env.MAPBOX_SECRET_TOKEN, 
    GOOGLE_MAPS_API_POLLEN_KEY: process.env.GOOGLE_MAPS_API_POLLEN_KEY
}; 
