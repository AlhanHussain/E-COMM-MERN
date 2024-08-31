const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
    date:{type:Date,default:Date.now}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema)


module.exports = userModel;


//Date.now()
// // This sets the default value to the timestamp when the schema was defined, not when each document is created.


//Date.now
// This sets the default value to the current timestamp each time a new document is created.
