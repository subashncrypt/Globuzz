
// This is the http module from Node.js
const http = require('http');

// This code imports the Express module into this file
var express = require('express');

// This code creates a new express app. 
// The app variable is used to create the express app. 
var app = express();

// normalizePort is a function that takes a port number as a string, parses it
// as an integer, and returns the port number if it is a valid port number
// (a positive integer less than 65536) or else returns false.
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

// This code gets the port number from the environment variable PORT, and if that is not available, it defaults to 3000. It then calls normalizePort to make sure that the port is a valid number, in a valid range.
const port = normalizePort(process.env.PORT || '3000');

// This code sets the port for the app to listen on.
app.set('port', port);

// What is the purpose of errorHandler?
// The purpose of errorHandler is to handle errors that occur when the server is listening for requests.
// It checks to see if the error is a system error, and if so, it logs the error to the console and exits the process. If the error is not a system error, it throws the error.
const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
    default:
      throw error;
  }
};

// This code creates a new server and passes the app to it. 
// The app is the Express app that was created earlier. 
// The server is then configured to listen for errors and to listen for requests.
const server = http.createServer(app);

// This code listens for errors and calls the errorHandler function when an error occurs.
server.on('error', errorHandler);

// This code listens for requests and logs a message to the console when the server is listening.
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind + ' Anna! =)');
});

// listen to get requests to the root of our website and return "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// This code starts the server listening on the port that was set earlier.
server.listen(port);
