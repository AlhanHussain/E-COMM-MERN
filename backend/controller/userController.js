const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const bcrypt = require('bcrypt')

// JWT Token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

const userregister =async(req,res)=>{
    
    
    const {name,email,password} = req.body
    try {
    const user = await userModel.findOne({email})
    
    if(user){
        return res.status(404).json({success:false,message:"user already exist"})
    }

    if(!validator.isEmail(email)){
        return res.status(404).json({success:false,message:"email is not valid"})
    }
    if(password.length<8){
        return res.status(404).json({success:false,message:"password must be 8 character long"})
    }
 
    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password:hashPassword
    })
   const currentuser =  await newUser.save();
   const token = createToken(currentuser._id);
   res.status(200).json({success:true,token})
} catch (error) {
        console.log(error)
        return res.json({success:false,message:"something went wrong"})
}
   
}




const userLogin = async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
                return res.status(404).json({success:false,message:"user not found"})
            }        
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({success:false,message:"password not matched"})
        }
        const token = createToken(user._id);
        res.status(200).json({success:true,token})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"something went wrong"})
        
    }
}
module.exports={userregister,userLogin}