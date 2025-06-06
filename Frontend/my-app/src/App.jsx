// Make sure this line is here to link the CSS
//import './SearchBar'; // importing css files.  


// applying the react dom router stuff here 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// All my componenets 
import SearchBar from './SearchBar.jsx'; // this is a componenet. 
import Homepage from './Homepage.jsx'; // this is a component 


function App() {
  return ( 
    <Router>  
     <Routes> 
        <Route exact path = "/" element = {<Homepage />} />  
        <Route exact path = "/locationHomePage" element = {<SearchBar />} />
     </Routes>
    </Router>
  );
}

export default App;
