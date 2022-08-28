import React from 'react'
import { Link } from "react-router-dom";
import vector  from "../IMAGES/Vector.png";
import Vector2  from "../IMAGES/Vector2.png";
import Vector3  from "../IMAGES/Vector3.png";
import Vector4  from "../IMAGES/Vector4.png";
import logo from '../IMAGES/logo.png';
import './dashboard.css'
import Menu from './Menu';
const dashbord = () => {
	
  return (
    <div>
        <div class="sidenav">
        <ul class = "side-bar">
        <div className="logo">
 <img src={logo} className ="Logo"  />
  <p> Lilies</p>
  </div> 
		<li style={{fontWeight: '500'}}>
	<Link to="/dashbord" className="nav-link"><img src={Vector4} alt="" /> Dashboard</Link>
		</li>
		<li>
	
		<Link to="/dashbord" className="nav-link"> <img src={vector} alt=""/>  Your Profile</Link>
		</li>
		<li>
		<Link to="/dashbord" className="nav-link"> <img src={Vector2} alt="" />   Orders</Link>
		</li>
        <li>
		<Link to="/dashbord" className="nav-link">  <img src={Vector3} alt="" />    Cart</Link>
		</li>
	</ul>  </div>
    <div class="main">
<Menu />
</div>
    </div>
  )
}

export default dashbord