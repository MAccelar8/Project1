const mongoose = require('mongoose');

const stu_post = mongoose.Schema({
  stu_id:String,
  post:String,
  upvotes:Number,
  comment:[{
    message:String,
    author:String,
    time:String,
  }]
});
module.exports = mongoose.model('stupost',stu_post);
