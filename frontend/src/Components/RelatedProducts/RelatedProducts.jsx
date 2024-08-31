import React,{useState,useEffect} from 'react'
import './RelatedProducts.css'
// import data_product from '../../Assets/data'
import Item from '../Item/Item'


const RelatedProducts = () => {
  const [new_collection, setNew_collection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/new/womenscollection')
    .then(res=>res.json())
    .then(data=>setNew_collection(data.data))
  },[])
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
   {new_collection.map((item,i)=>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price ={item.old_price}/>
     
    
   })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
