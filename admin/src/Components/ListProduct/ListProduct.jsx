import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import axios from 'axios'
import cross_icon from '../../assets/cross_icon.png'
import {toast} from 'react-toastify'

const ListProduct = () => {


  let url = 'http://localhost:4000'
const [products, setProducts] = useState([])


const fetchProducts= async()=>{
  const response = await axios.get(`${url}/allproducts`)
  if(response.data.success){
    setProducts(response.data.product)
  }else{
    console.log('Products not found')
  }

}


const removeProduct = async(id)=>{
   const response = await axios.post(`${url}/removeproduct`,{id:id})
   if(response.data.success){
    fetchProducts()
    toast.success(response.data.message)
   }else{
    toast.error(response.data.message)
   }
}

useEffect(()=>{
  fetchProducts()
  // console.log(products)

},[])

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
</div>

      <div className="listproduct-allproducts ">
        <hr />
    {products.map((product,index)=>{
      return <>
       <div key={index} className="listproduct-format-main listproduct-format" >
        <img src={`${url}/images/`+product.image} alt="" className="listproduct-product-icon" />
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <p>{product.category}</p>
        <img onClick={()=>removeProduct(product.id)}  className='listproduct-remove-icon' src={cross_icon} alt="" />
      </div>
      <hr />
      </>

})}
      </div>
    </div>
  )
}

export default ListProduct
