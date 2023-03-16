/*const is a keyword used to declare a constant variable that cannot be reassigned. In this case, the constant variable being declared is express.

express is the name of the package that is being required. It is a popular Node.js package for creating web applications and APIs.

require is a built-in function in Node.js used to load modules. In this case, it is being used to load the express package.
Overall, this line of code is used to import the express package and make it available for use in the current Node.js application.
Once imported, developers can use the express package to create web servers, handle HTTP requests and responses,
 and build out various other functionalities that are required for their web application.*/

const express = require('express');

// q:why do we need express() here?
/*a: express() is a function that returns an object that has methods for handling HTTP requests and responses.express() is a function that creates a new instance of an Express application. It is called as a constructor to create a new object that represents the Express application.
The app variable is used to interact with the newly created Express application. Developers can use the app variable to define routes, middleware, and other functionalities of their application.*/
const app = express();

//q:what is the purpose of this line of code?
// a: The bodyParser package is used to parse the body of incoming HTTP requests. It is a Node.js package that is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');

//q: what is let keyword?
/*a: The let keyword is used to declare a variable that can be reassigned. In this case, the variable is being declared to store the port number that the Express application will listen on. The port number is set to 3001, but it can be reassigned to any other port number.*/

// q:difference between const and let and var?
/*a: The const keyword is used to declare a constant variable that cannot be reassigned. The let keyword is used to declare a variable that can be reassigned. The var keyword is used to declare a variable that can be reassigned and is scoped to the nearest function block.*/
let people = [
  {
    name: 'Hannah Rickard',
    number: '06-51-99-56-83',
    id: 1,
  },
  {
    name: 'Hyun Namkoong',
    number: '10987654',
    id: 2,
  },
  {
    name: 'Courtney Martinez',
    number: '3691215',
    id: 3,
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Phonebook</h1>');
});

app.get('/api/people', (request, response) => {
  response.json(people);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//q: what is the purpose of this line of code?
/*a: The app.listen() method is used to start the HTTP server. It is called with the port number that the server will listen on as the first parameter. The second parameter is a callback function that is executed once the server starts listening for requests.*/