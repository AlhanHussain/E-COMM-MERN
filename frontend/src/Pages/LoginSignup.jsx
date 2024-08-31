import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import axios from 'axios';

const LoginSignup = () => {

const [state, setState] = useState("Login");
const [formData, setFormData] = useState({
  name:"",
  password:"",
  email:""
})


const changeHandler=(e)=>{
  // e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  setFormData(formData=>({...formData,[name]:value}))
}
//{...formData}: This is the spread operator, which creates a new object by copying all the properties of the formData object. This ensures that all existing properties are preserved when the state is updated.

const login = async()=>{
console.log("login function executed",formData)
try {
  
  let response =  await axios.post("http://localhost:4000/user/login",formData) 
  console.log("Response data", response.data)
  if(response.data.success){
    localStorage.setItem('auth-token',response.data.token)
    window.location.replace("/")
  }
  
}catch(error){
  console.log("Error",error)
  alert(error.response.data.message)
}
}


const signup = async()=>{
console.log("signup function executed",formData)
try {
  
  let response =  await axios.post("http://localhost:4000/user/register",formData) 
  if(response.data.success){
    localStorage.setItem('auth-token',response.data.token)
    window.location.replace("/")
  }
  
} catch (error) {
  console.log("Error",error)
  alert(error.response.data.message)
}
}





  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input onChange={changeHandler} value={formData.name}  name="name"  type="text" placeholder='Your Name' />:<></>}
          <input onChange={changeHandler} value={formData.email}  name="email"  type="email" placeholder='Email Address' />
          <input onChange={changeHandler} value={formData.password}  name="password"  type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">
          Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
                  <p className="loginsignup-login">
          Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
          }


          <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' required/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

      </div>
      
    </div>
  )
}

export default LoginSignup
