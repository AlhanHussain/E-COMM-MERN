const multer  = require('multer');
const express = require('express');
const path = require('path');
const { addProduct, deleteProduct, getProduct } = require('../controller/productController');




const productRouter = express.Router();






// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//       // Generate a unique filename
//     return  cb(null, `${file.fieldname}_${Date.now()}path.extname${(file.originalname)}`);
//     }
//   });
const storage = multer.diskStorage({
  destination:'upload/images',
  filename: (req, file, cb) => {
    // Generate a unique filename
   return  cb(null, ` ${Date.now()}${file.originalname}`);
  },
})

const upload = multer({ storage: storage });

// productRouter.post('/upload',upload.single('product'),(req,res)=>{
//   res.status(200).json({success:1,image_url:`http://localhost:4000/images/${req.file.filename}`})
// })
 


productRouter.post('/addproduct',upload.single('product'),addProduct)
productRouter.post('/removeproduct',deleteProduct)
productRouter.get('/allproducts',getProduct)



module.exports = productRouter;