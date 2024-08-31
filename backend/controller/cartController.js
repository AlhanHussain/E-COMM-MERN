const userModel = require("../model/userModel");

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: cartData });
    res.json({ success: true, message: "item added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
};


const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById({_id:req.body.userId,})
        let  cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
           cartData[req.body.itemId] = 0;
        }else{
           cartData[req.body.itemId] -= 1;
        }
       await userModel.findByIdAndUpdate(req.body.userId, {cartData:cartData})
       res.json({success:true,message:"item removed to cart"})
       
    
    } catch (error) {
       console.log(error)
       res.json({success:false,message:"something went wrong"})
    }
}

const getCartItem = async (req, res) => {
    try {
        
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        res.json({success:true,message:"cart data",data:cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"something went wrong"})
    }
}

module.exports = { addToCart, removeFromCart, getCartItem };