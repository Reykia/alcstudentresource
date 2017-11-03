var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'monogdb://heroku_tc8dt4nn:2jmvhlmhcmqhrifugt4a4q7t0p@ds145275.mlab.com:45275/heroku_tc8dt4nn');

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
