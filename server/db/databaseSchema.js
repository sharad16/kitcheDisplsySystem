/**connect mongoose and define schema and exports it  */

var mongoose = require('mongoose');
var config = require('../config/dbConfig');
mongoose.connect(config.MONGO_URI);

var workers = mongoose.Schema({
     coustomerName:{type:String ,select:false},
     productName:{type:String ,unique: true,},
     quantity:{type:Number},
     createdTillNow:{type:Number},
     predicted:{type:Number}
 });

var workers = mongoose.model('workers', workers);
exports.workers = workers;
