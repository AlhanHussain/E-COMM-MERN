const productModel = require('../model/productModel.js');



const kidsCollection= async(req,res)=>{
    try {
        const products = await productModel.find({});
        let newCollection = products.slice(1).slice(-8)
        return res.status(200).json({success:true,message:"kids collection",data:newCollection});
    } catch (error) {
        console.log(error);
    }
}

const womenscollection= async(req,res)=>{
    try {
        const products = await productModel.find({category:"women"});
        // let newCollection = products.find()
        let popular_in_women = products.slice(0,4)
        return res.status(200).json({success:true,message:"womens collection",data:popular_in_women});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {kidsCollection,womenscollection};



