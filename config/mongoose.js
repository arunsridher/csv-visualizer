//include mongoose
const mongoose = require('mongoose');

//connect to the polling system database mongodb
mongoose.connect('mongodb://localhost/csv-visualizer');

//check if connected to the database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', function() {
  // if connected
  console.log("Successfully connected to the database");
});

//export the db
module.exports = db;