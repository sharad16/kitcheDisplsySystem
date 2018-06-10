/**connect mongoose and define schema and exports it  */

var mongoose = require('mongoose');
 var config = require('../config/dbConfig');
 //Database connection
mongoose.connect(config.MONGO_URI);
// .then(function(){
//     console.log(config.SUCCESS_MSG);   
//    }).catch(function(err) {
//     console.log(config.ERROR_MSG,err);
//     process.exit();
//   });
var workers = mongoose.Schema({
     coustomerName:{type:String ,select:false},
     productName:{type:String ,unique: true,},
     quantity:{type:Number,min:0},
     createdTillNow:{type:Number},
     predicted:{type:Number}
 });

var workers = mongoose.model('workers', workers);
exports.workers = workers;
