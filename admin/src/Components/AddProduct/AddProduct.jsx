import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddProduct = () => {

const [image, setImage] = useState(false)
const [productDetails, setProductDetails] = useState({
  name:"",
  image:"",
  category:"women",
  new_price:"",
  old_price:""
})

const changeHandler=(e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setProductDetails(productDetails=>({...productDetails, [name]:value}))
  }


const imageHandler=(e)=>{
  setImage(e.target.files[0])

}

const Add_Product=async(e)=>{
  e.preventDefault();

  // console.log(productDetails)


  const formData = new FormData();
  formData.append('name',productDetails.name)
  formData.append('product',image)
  formData.append('category',productDetails.category)
  formData.append('new_price',productDetails.new_price)
  formData.append('old_price',productDetails.old_price)



  const response = await axios.post(`http://localhost:4000/addproduct`,formData)
  if(response.data.success){
    setProductDetails({
      name:"",
      new_price:"",
      old_price:"",
      category:"women"
    })
    toast.success(response.data.message)
    setImage(false)
  }else{
    toast.error(response.data.message)
  }
    
}


  return (
    <div className='add-product'>
      <form  onSubmit={Add_Product}>

      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' required placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' required placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' required placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" required className='add-product-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area}  className='addproduct-thumbnail-img' alt="" />
            {/* src={image?URL.createObjectURL(image):assets.upload_area} */}
        </label>
        <input onChange={imageHandler} type="file" name='image' required id='file-input' hidden />
      </div>
        <button type='submit'  className='addproduct-btn'>ADD</button>
      </form>
    </div>
  )
}

export default AddProduct
