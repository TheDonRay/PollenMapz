import React from "react"; 
import "./styling/Homepage.css";  
import { useState } from 'react'; 

// to access backend data use fetech or axios to make HTTP requests.  
//import axios from 'axios'; 


function Homepage() { 

    const [backendMessage, setBackendMessage] = useState('');  

    function handleClick() { 
        // going to use the fetch keyword 
        // in the fetch keyword we are going to call it at where our route is which in this case is at api/v1/home
        fetch('/api/v1/home')
            .then((res) => res.text())  
            .then((data) => setBackendMessage(data))
            .catch((err) => console.error(err)); 
    } 

    return (
        <div> 
            <button onClick={handleClick}>View Backend data</button>

            <div className="homepage">
            <h1>Welcome to PollenMapz</h1>
        </div>

      {backendMessage && (
        <div>
          <h2>Backend says:</h2>
          <p>{backendMessage}</p>
        </div>
        )}
    </div>
    ); 
}

export default Homepage; 