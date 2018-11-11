//bringing required modules
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nexmo = require('nexmo');
const socketIo = require('socket.io');

//init app
const app = express();

//Middleware
//Tem plate engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);//enables to render .html files

//Public folder setup
//all client side scripts will go here
app.use(express.static(__dirname + 'public'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Define port
const port = 3000;

//Start server
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
