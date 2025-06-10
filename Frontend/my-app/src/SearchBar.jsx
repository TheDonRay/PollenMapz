import React from "react";
import "./styling/SearchBar.css" // importing the css files  
// need to import the link library to link between pages  
// basically helps with changing between pages/components in React. Keeps the app fast and responsive. 
import { Link } from 'react-router-dom'; 


function SearchBar() { 
    return( 
        <nav>
            <Link to="/" id="searchbar">Home</Link>
        </nav>
    ); 
} 

export default SearchBar; 