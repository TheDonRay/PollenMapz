import React from "react"; 
import "./styling/Homepage.css";  
import { useState } from 'react'; // 

// to access backend data use fetech or axios to make HTTP requests.  
//import axios from 'axios'; 

// example of testing and fetching from the backend just testing some stuff 

// function Homepage() { 

//     const [backendMessage, setBackendMessage] = useState('');  

//     function handleClick() { 
//         // going to use the fetch keyword 
//         // in the fetch keyword we are going to call it at where our route is which in this case is at api/v1/home
//         fetch('/api/v1/home')
//             .then((res) => res.text())  // the res data and err are all callback functions meaning that 
//             .then((data) => setBackendMessage(data))
//             .catch((err) => console.error(err)); 
//     } 

//     return (
//         <div> 
//             <button onClick={handleClick}>View Backend data</button>

//             <div className="homepage">
//             <h1>Welcome to PollenMapz</h1>
//         </div>

//       {backendMessage && (
//         <div>
//           <h2>Backend says:</h2>
//           <p>{backendMessage}</p>
//         </div>
//         )}
//     </div>
//     ); // need to add cool background picture im thinking of keeping the button just to make sure i understand but depends after i take 
//     // notes in my backend dev notebook. 
// }


function Homepage(){ 

  // create a button function on another feature where upon clicking it user sees what PollenMapz is about 
  
  return(
    <div className = "homepage">
      <h1>PollenMapz</h1>
    </div>
  ); 
}


export default Homepage;  

