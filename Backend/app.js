// note that i am going to have different routes so thats when we do the express.router() on those files on the route files. 

const express = require('express'); 
const app = express();

const PORT = 3000;  

app.get('/', (req, res) => { 

    res.send('Backend is Successfully Running'); 
}); 

app.listen(PORT, () => { 
    console.log(`Server is sucessfully running on http://localhost:${PORT}`); 
}); 

module.exports = app; 