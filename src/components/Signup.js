import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
import { useState } from 'react';
import Berries  from "../IMAGES/berries.png"
const Signup = () => {
 const [form, setForm] = useState({
  name : "",
  email: "",
  password:" ",
 })
 const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
 }
 const handleSubmit =(e)=> {
  e.preventDefault()
  sessionStorage.setItem('user', JSON.stringify(form))
  setInterval(() => {
    window.location ='./Login'
    }, 1500);
    alert("You Can Now Login")
}
 console.log(JSON.stringify(form))

 
  return ( <>
    <section id ="learn">
    <div class="container">
        <div class="row align-items-center justify-content-between">
     
      <div class="col-md pt-3">
        <div className="photo">
<img src={Berries} alt="" className='cooking'/>
        </div>
        </div>
            <div class="col-md pt-5">
            <form onSubmit={handleSubmit}>
        <h2 class ="text-center">Welcome to Lilies </h2>
        
        <div className="mb-3">
          <label></label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name ="name"
            placeholder="Your First Name"
required/>
        </div>
        <div className="mb-3">
          <label></label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="Your Email address"
            name = "email"
       required   />
        </div>
        <div className="mb-3">
          <label></label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            name = "password"
            placeholder="Your password"
        required  />
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
        <div className=" d-grid text-decoration-none">    <button type="submit" name = "submit" className="btn" >
        LOGIN </button>
        </div>
        <div className="under">
            <p> Already have an account <a href='./Login' class = "text-decoration-none text-dark" >SIGNUP </a></p>
      
        </div>
      </form> </div> </div> </div> </section> </>
  )
}

export default Signup