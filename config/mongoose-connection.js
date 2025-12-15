const mongoose = require('mongoose');
//console.log("Connecting to MongoDB...");

mongoose
.connect("mongodb://127.0.0.1:27017/crudop")
.then(function(){
    console.log("Connected to MongoDB successfully at 27017");
})
.catch(function(err){
    console.log("Error connecting to MongoDB:", err);
})


module.exports = mongoose.connection;