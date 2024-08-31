const productModel = require("../model/productModel")
const fs = require("fs")



//creating products
const addProduct = async(req,res)=>{
    try {
        let products = await productModel.find({});
        let id;
        if(products.length>0){
            let last_product_array =products.slice(-1)
            let last_product = last_product_array[0]
            id = last_product.id+1;
        }else{
            id = 1;
        }

   const image_filename = `${req.file.filename}`  
   const product = new productModel({
    id:id,
    name:req.body.name,
    image:image_filename,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
   })
   await product.save()
   return res.status(200).json({success:true,message:"product added successfully",product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"something went wrong"})
    }
}



//deleting products
const deleteProduct= async(req,res)=>{
    try {
     const product = await productModel.findOneAndDelete({id:req.body.id})
     fs.unlink(`upload/${product.product}`,()=>{});
     if(!product){
        return res.status(404).json({success:false,message:"Product not found"})
     }
     return res.status(200).json({success:true,message:"Product deleted successfully",product})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Something went wrong"})
    }
}



// getting products
const getProduct = async(req,res)=>{
    try {
        const product = await productModel.find({})
        if(!product){
            return res.status(404).json({success:false,message:"Product not found"})
        }
        return res.status(200).json({success:true,message:"Product found successfully",product})
    } catch (error) {
        
    }
}

module.exports = {addProduct,deleteProduct,getProduct}