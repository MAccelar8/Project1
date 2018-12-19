const mongoose = require('mongoose');

const sem5Schema = mongoose.Schema({
  st_id:String,
  role:String,
  subject:String,
  password:String,
  sub:[{
    subname:String,
    internal:Number,
    external:Number
  }]
});
module.exports = mongoose.model('sem5_result',sem5Schema);
