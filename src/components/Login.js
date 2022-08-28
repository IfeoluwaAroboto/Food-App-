import React from 'react'
import "./Login.css"
import { useState } from 'react';
import { Link } from "react-router-dom";
import Cooking  from "../IMAGES/cooking.png"
const Login = () => {
  const [LoginData, setLoginData] = useState({
    email : "",
    password : " "
  })
  const [passwordType, setpasswordType] = useState("password")
  const [passwordInputType, setpasswordInputType] = useState("")
  
const handlePassword = (e)=> {
  setpasswordInputType (e.target.value)
  e.preventDefault(); }
  const togglePassword = (e) => {
  if (passwordInputType === "password"){
    setpasswordInputType ("text");
    return;
  }
  setpasswordType ("password") 
}

const handleChange= (e) => {
 setLoginData({
  ...LoginData,
  [e.target.name]: e.target.value
 })
}
console.log(LoginData)

const handleSubmit = (e) => { 
  e.preventDefault()
  let user = JSON.parse(sessionStorage.getItem('user'))
if (LoginData?.email === user?.email && LoginData?.password === user?.password){

setInterval(() => {
  window.location ='./dashbord'
  }, 1500);
  alert("Login Sucessful")
}
else {
  alert("Wrong Email/Password")
}
}
  return ( <> 
<section id ="learn">
    <div class="container">
        <div class="row align-items-center justify-content-between">
     
      <div class="col-md pt-3">
        <div className="photo">
<img src={Cooking} alt="" className='cooking'/>
        </div>
        </div>
            <div class="col-md pt-5">
    <form  onSubmit={handleSubmit}>
        <h2 class ="text-center">Welcome Back</h2>
        <div className="mb-3">
          <label></label>
          <input
            type="email"
            name = "email"
            onChange={handleChange}
            className="form-control"
            placeholder="Your Email address"
      required    />
        </div>
        <div className="mb-3">
          <label></label>
          <input
            type="password"
            className="form-control"
            name = "password"
            onChange={handleChange}
          
            placeholder="Your password"
   required       />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
         
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className=" d-grid text-decoration-none">    <button type="submit" className="btn">
        LOGIN </button>
        </div>
        <div className="under">
            <p> <a href='./Signup' class ="text-decoration-none text-dark">Create account </a></p>
            <p> Forget Password? </p> 
        </div>
      </form> </div> </div> </div> </section> </>
  )
}

export default Login