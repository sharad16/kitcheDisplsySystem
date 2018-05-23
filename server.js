var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./server/config/dbConfig');
var kitchenController = require('./server/controller/kitchen');


//configuration
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser());
app.use(express.static(path.join(__dirname + 'client')));
app.use(kitchenController);
app.get('/favicon.ico',function(req, res){
  res.sendFile(path.join(__dirname, 'client/index.html'));
});
app.listen(config.PORT_NUMBER,function(){
	console.log('server running on port '+config.PORT_NUMBER);
  console.log(__dirname + '/client/index.html');
})
