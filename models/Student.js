var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  sex: String,
  roll_no: String,
  faculty: String,
  department: String,
  level: Number,
  photo: { data: Buffer, contentType: String },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);