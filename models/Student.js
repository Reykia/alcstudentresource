var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'monogdb://heroku_ncj00r1l:2236i5pseeb8jogckck6vghm0v@ds245805mlab.com:45805/heroku_ncj00r1k');

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
