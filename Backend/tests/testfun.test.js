// make sure we import that test file here 
// since we are using jest we can use CommonJS or ES6 up to you and based of the project.  
const testfunction = require('../random.js'); 

// remember in jest gloval functions are defaulted built in so we dont need to import or call or require them etc. 
describe('this is just testing one function', () => { 
    test('whether this function throws an error', () => { 
        expect(() => testfunction()).toThrow(); // remember since we are testing whether this function will throw an error we use a callback on the expect assertion as shown 
    }) 

    // we can also test whether it shows the correct test output as such: 
}) 