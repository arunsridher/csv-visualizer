var mongoose = require('mongoose');

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

const Files = mongoose.model('Files', filesSchema);
module.exports = Files;