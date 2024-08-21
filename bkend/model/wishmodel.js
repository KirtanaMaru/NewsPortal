let mongoose = require("mongoose")
let wishsch= new mongoose.Schema({
    "_id":String,
    "uid":String,
    "title":String,
    "name":String,
    "date":String,
    "cat":String,
    "body":String,
    "wuid":String


})

let wmodel = mongoose.model("wishlist",wishsch)
module.exports=wmodel