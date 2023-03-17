const http = require('http');
//q: what is the purpose of this line of code?
/*a: The http module is used to create an HTTP server. It is a built-in module in Node.js that allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).*/
var express = require('express');
var app = express();
// const app = require('./app');
//q: what is the purpose of this line of code?
/*a: The app variable is used to interact with the newly created Express application. Developers can use the app variable to define routes, middleware, and other functionalities of their application.*/

require("./config/db-connection");

//q: what is the purpose of this line of code?
/*a: The normalizePort() function is used to normalize a port into a number, string, or false. In this case, the normalizePort() function is being used to normalize the port number that the Express application will listen on. The port number is set to 3000, but it can be reassigned to any other port number.*/

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const useRouter = require("./routes/router");

app.use('/', useRouter);

//q:what is process.env.PORT?
/*a: process.env.PORT is an environment variable that is used to set the port number that the Express application will listen on.*/
const port = normalizePort(process.env.PORT || '3000');

//q: what happens if we don't set the port number?
/*a: If the port number is not set, the Express application will listen on a random port number.*/

//q: what is the purpose of this line of code?
/*a: The set() method is used to set the port number that the Express application will listen on.*/
app.set('port', port);
//q:How do i solve the TypeError: app.set is not a function error?

//q: what does the followinf function do?
/*a: The errorHandler() function is used to handle errors that occur when the Express application is listening on a port. The errorHandler() function takes an error argument. The error argument is an object that contains information about the error that occurred. The errorHandler() function checks if the error is a system error. If the error is a system error, the errorHandler() function throws the error. If the error is not a system error, the errorHandler() function checks if the error is a port in use error. If the error is a port in use error, the errorHandler() function logs a message to the console and exits the process. If the error is not a port in use error, the errorHandler() function throws the error.*/

const errorHandler = (error) => {
  //q: when would the error be a system error?
  /*a: The error is a system error if the error is not a port in use error. The error is a port in use error if the error code is EADDRINUSE. The error code is EADDRINUSE if the port number that the Express application is trying to listen on is already in use. The error code is EACCES if the port number that the Express application is trying to listen on requires elevated privileges. The error code is EADDRNOTAVAIL if the port number that the Express application is trying to listen on is not available. The error code is ECONNREFUSED if the port number that the Express application is trying to listen on is refused. The error code is ECONNRESET if the port number that the Express application is trying to listen on is reset. The error code is EISCONN if the port number that the Express application is trying to listen on is already connected. The error code is ENETUNREACH if the port number that the Express application is trying to listen on is unreachable. The error code is ENOTSOCK if the port number that the Express application is trying to listen on is not a socket. The error code is EPERM if the port number that the Express application is trying to listen on is not permitted. The error code is EPIPE if the port number that the Express application is trying to listen on is a pipe. The error code is ESRCH if the port number that the Express application is trying to listen on is not found.*/
  if (error.syscall !== 'listen') {
    throw error;
  }
  //q: what is the purpose of this line of code?
  /*a: The address() method is used to get the address information of the server.The address() method returns an object that contains information about the server.The object contains the port number that the server is listening on. The object also contains the IP address of the server. The object also contains the name of the server. */
  const address = server.address();
  //q: Why do we need to check if the server address is a string?
  /*a: The server address is a string if the server is listening on a pipe. The server address is not a string if the server is listening on a port.*/
  const bind =
    typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  //q: what is the purpose of this line of code?
  /*a: The switch statement is used to execute different code based on different conditions. In this case, the switch statement is used to execute different code based on the error code. The switch statement checks if the error code is EACCES. If the error code is EACCES, the switch statement logs a message to the console and exits the process. If the error code is not EACCES, the switch statement checks if the error code is EADDRINUSE. If the error code is EADDRINUSE, the switch statement logs a message to the console and exits the process. If the error code is not EADDRINUSE, the switch statement throws the error.*/
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      //q: what is the purpose of this line of code?
      /*a: The process.exit() method is used to exit the process. The process.exit() method takes an exit code as an argument. The exit code is a number that represents the exit status of the process. The exit code is 0 if the process exited successfully. The exit code is 1 if the process exited with an error.*/
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
    default:
      throw error;
  }
};

//q: what is the purpose of this line of code?
/*a: The createServer() method is used to create an HTTP server. The createServer() method takes a requestListener function as an argument. The requestListener function is a function that is executed every time the server receives a request. The requestListener function takes two arguments: req and res. The req argument represents the request from the client, and the res argument represents the response that the server sends back to the client.*/
const server = http.createServer(app);

// get requests return the hello world message
app.get('/', (req, res) => {
  res.send("Hello World!");
});

//q: what is the purpose of this line of code?
/*a: The on() method is used to bind an event to a function. In this case, the on() method is used to bind the error event to the errorHandler function. The error event is emitted when an error occurs. The errorHandler function is executed when the error event is emitted.*/
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind + ' Anna! =)');
});

server.listen(port);
