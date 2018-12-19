const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sem5_result= require('./models/results');
const jwt1 = require('jsonwebtoken');
const mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
mongoose.connect("mongodb+srv://smit:n2u1hai7VamLlDNk@cluster0-9revo.mongodb.net/maryville?retryWrites=true").then(function(){
  console.log("Successfully Connected");
}).catch(function(){
  console.log("Error Occured");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req,res,next)
{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS,PUT");
  next();
});
// {role:"student"},'st_id'
app.get("/getstudents",async function(req,res) {
  const usr= await Sem5_result.find({role:"student"});
  res.json(usr);
})
app.put("/huzaifa1",async function(req,res){
  var student=Sem5_result.findOne({st_id:"hiren"},function(err,data){
    if(err)
    {
      console.log(err);
    }
    else {
      data.sub[0].internal=45;
    }
    data.save(function(err,x){
      console.log("updated...");
    })
  })
});
app.put("/huzaifa",async function(req,res) {
  //reset(res);
  //console.log("Hey kljasdjlj");
  //console.log(req.body);
  var marks=req.body.sm;
  var subj=req.body.sub;
  var exam=req.body.exam;
  console.log(subj);
  var stds= await Sem5_result.find();
  var x;
  if(subj=="AT")
  {
    x=0;
  }
  else if(subj=="OS")
  {
    x=1;
  }
  else {
    x=2;
  }
  console.log(x);
  var c= await Sem5_result.count();
  // Sem5_result.find({},function(err,std){
  //   std.set()
  // });

  //Sem5_result.update({"st_id":"hiren","subname":"AT"},{$set:{"sub.$.internal":marks[0]}},function(err,res){
  //  console.log('updated')});
    //console.log(Sem5_result.find({"st_id":"hiren"}));
  if(exam=="internal")
  {
    for(var s in stds)
    {
        var student=Sem5_result.findOne({st_id:stds[s].st_id},function(err,data){
          if(err)
          {
            console.log(err);
          }
          else {
            data.sub[x].internal=marks[s];
          }
          data.save(function(err,x){
            console.log(s);
            console.log("updated...");
          })
        });
        // Sem5_result.update({st_id:stds[s].st_id,subname:subj},{$set:{"sub.$.internal":marks[s]}},function(err,res){
        // console.log('updated');
    }
  }
  //  stds.save();

  else {

  }


  //for(var i=0;i<stds.length;i++)
//  {
  //  console.log("hii");
//  Sem5_result.update({st_id:stds[i].st_id},{$set:{sub1:{internal:marks[i]}}},function(err,res){
  //  console.log('updated');
  //});
  //  stds[i].sub1.internal=marks[i];
  //}
  //stds.save();
  console.log(stds);
  // stds.sub1:{internal:45,external:47};
  // console.log(stds.st_id);
  // res.json({
    message:"Doc Added Succesfully";

});
const generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt1.sign({
    uid:this.uid,
    role:this.role,
    subject:this.subject,
  exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

app.get("/huzaifa",async function (req,res) {
  console.log(req.query.user);
  const usr= await Sem5_result.findOne({st_id:req.query.user});
  console.log(usr);
  res.json(usr);
});

app.post("/login",async function(req,res){
  console.log(req.body);
  const usr= await Sem5_result.findOne({$and:[{st_id:req.body.uid},{password:Number(req.body.password)}]});
  console.log(usr);
  if (!usr) {
    res.status(401).json({"token":""});
    console.log("not found");
    //res.json({token:"",message:"Token Emtpy"});
  }
  else{
    token = generateJwt();
      res.status(200);
      res.json({
        "token" : token,
        "uid":usr.st_id,
        "role":usr.role,
        "subject":usr.subject
      });
      console.log('found');
    // const token = await jwt.sign({uid:usr.st_id},'maryville',{expiresIn:'1h'});
    // console.log('matched');
    // res.json({token:token});
  }

});

module.exports = app;
