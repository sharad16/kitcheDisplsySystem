/**connect mongoose and define schema and exports it  */

var mongoose = require('mongoose');
var config = require('../config/dbConfig');
mongoose.connect(config.MONGO_URI);

var workers = mongoose.Schema({

     productName:{type:String ,unique: true, lowercase: true},
     quantity:{type:String,select: false},
     createdTillNow:{type:Number,required:true},
     predicted:{type:Number,required:true},
     status:{type:Boolean}


 });

var workers = mongoose.model('workers', workers);
exports.workers = workers;
