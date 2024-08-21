let user=require("../model/resmodel")
let bcrypt=require("bcryptjs")
let jwt=require("jsonwebtoken")
let {v4:uuid}= require("uuid")
let postm =require("../model/postmodel")
let wishm =require("../model/wishmodel")
let add=async (req,res)=>{
   try{
      let dt = await user.findById({"_id":req.body._id})
   if(dt){
      res.json({"msg":"Existing email"})
   }
   else{
      let hash= await bcrypt.hash(req.body.pwd,10)
   let data = new user({...req.body,"pwd":hash})
   await data.save()
   res.json({"msg":"Registration successfully"})
     
   }
}
catch(err){
   console.log(err)
   res.send(err)
}
}

let login = async (req,res)=>{
   try{
      let data = await user.findById({"_id":req.body._id})
   if(data){
      let f= await bcrypt.compare(req.body.pwd,data.pwd)
      if(f){
         res.json({"token":jwt.sign({"_id":req.body._id},"fsd4"),"name":data.name,"_id":data._id})
         
      }
      else{
         res.json({"msg":"Password not correct"})
      }

   }
   else{
      res.json({"msg":"email not correct"})
   }
}
catch(err){
   console.log(err)
}
}

let getuser = async (req,res)=>{
   try{
     let data = await user.find({})
     res.json(data)
   }
   catch(err){

   }
}

let addpost= async (req,res)=>{
   try{
      let data = new postm({...req.body,"_id":uuid()})
      await data.save()
      res.json({"msg":"post added"})
      // res.send("data saved")
   }
   catch(err){
    res.send(err)
   }
}

let getpost = async(req,res)=>{
   try{
      let data = await postm.find({})
      res.json(data)
   }
   catch(err){

   }
}

let getpostbycat =async (req,res)=>{
   try{
      let data = await postm.find({[req.params.cat]:req.params.value})
      res.json(data)
   }
   catch(err){

   }
}
let updpost=async (req,res)=>{
   try{
      await postm.findByIdAndUpdate({"_id":req.body._id},{"title":req.body.title,"body":req.body.body,"cat":req.body.cat})
      res.json({'msg':"upd done"})
   }
   catch(err){

   }
}

let delpost = async (req,res)=>{
   try{
      await postm.findByIdAndDelete({"_id":req.params._id})
      res.json({"msg":"del done"})
   }
   catch(err){

   }
}

let addwish= async (req,res)=>{
   try{
      let data = new wishm({...req.body})
      await data.save()
      res.json({"msg":"wishlist added"})
      // res.send("data saved")
   }
   catch(err){
    res.send(err)
   }
}
let getwish = async(req,res)=>{
   try{
      let data = await wishm.find({"wuid":req.params.id})
      res.json(data)
   }
   catch(err){

   }
}

module.exports ={add,login,addpost,getpost,getpostbycat,updpost,delpost,addwish,getwish,getuser}