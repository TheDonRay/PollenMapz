// Make sure this line is here to link the CSS
//import './SearchBar'; // importing css files.  


// applying the react dom router stuff here 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// basically helps with changing between pages/components in React. Keeps the app fast and responsive. 

// All my componenets 
import SearchBar from './SearchBar.jsx'; // this is a componenet. 
import Homepage from './Homepage.jsx'; // this is a component 



// routes - renders the first matching route only, which helps avoid rendering multiple components for similar paths 
// route - Maps URLs to components. For example '/about' displays the 'About' component. 
function App() {
  return ( 
    <Router> 
     <Routes> 
        <Route exact path = "/" element = {<Homepage />} />  
        <Route exact path = "/locationHomePage" element = {<SearchBar />} />
     </Routes>  
    </Router> // the Router aka browser router wraps my app, enabling routing. 
  );
}

export default App;
