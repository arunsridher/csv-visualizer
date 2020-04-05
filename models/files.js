//include mongoose
var mongoose = require('mongoose');

//create file schema
const filesSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

//create files model
const Files = mongoose.model('Files', filesSchema);

//export the model
module.exports = Files;