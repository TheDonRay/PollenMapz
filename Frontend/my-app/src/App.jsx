// Make sure this line is here to link the CSS
//import './SearchBar'; // importing css files.  


// applying the react dom router stuff here 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// basically helps with changing between pages/components in React. Keeps the app fast and responsive. 

// All my componenets 
import SearchLoc from './SearchLoc.jsx'; // this is a componenet. 
import Homepage from './Homepage.jsx'; // this is a component 
import About from './About.jsx'; // this is a componenet. 


// routes - renders the first matching route only, which helps avoid rendering multiple components for similar paths 
// route - Maps URLs to components. For example '/about' displays the 'About' component. 
function App() { 

  // below im setting up my routes that the page will have. And if you notice those routes are imported from different jsx components. 
  return ( 
    <Router> 
     <Routes> 
        <Route exact path = "/" element = {<Homepage />} />  
        <Route exact path = "/search" element = {<SearchLoc />} /> 
        <Route exact path = "/about" element = {<About />} />  
     </Routes>  
    </Router> // the Router aka browser router wraps my app, enabling routing. 
  );
}

export default App;
