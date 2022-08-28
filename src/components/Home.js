import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from '../IMAGES/logo.png';
import ramen from '../IMAGES/ramen.png';
import ios from '../IMAGES/ios.png';
import google from '../IMAGES/google.png';
import Stir from '../IMAGES/stir.png';
import Meat from '../IMAGES/meat.png';
import Burger from '../IMAGES/burger.png';
const Home = () => {
return (
	<div>
    <div className="body">
		<nav className="Nav-Bar"  class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
        <div className="logo">
 <img src={logo} className ="Logo"/>
  <p class = "text-light"> Lilies</p>
  </div> 
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars" id ="toggler"></i>
    </button>
        <div  className="nav" class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<ul class="navbar-nav  ms-auto" id='nav'>
		<li>
	<Link to="/" className="nav-link">Home</Link>
		</li>
		<li>
	
		<Link to="/Login" className="nav-link">Login</Link>
		</li>
		<li>
		<Link to="/Signup" className="nav-link">Signup</Link>
		</li>
	</ul>  </div> </div> </nav>
    <div className="head">
    <section class=" p-5 p-lg-0 pt-lg-5 text-center gx-5 text-sm-start">
    <div class="container ">
     <div class="d-sm-flex align-items-center  justify-content-between">
        <div class="box">
            <div class=" p-3 text text-light">
             <h1> Order food anytime, <br /> anywhere</h1>
            <p id="text"> Browse from our list of specials to place your order and 
            have food delivered to you in no time. Affordable, 
            tasty and fast!

          </p> 
                  <div class="app-store">
                  <img class="IOS" src={google} alt="IOS" />
                                <img class="Google" src={ios} alt="google"/>
                  </div>
            </div> 
       </div>
        <div class="illustartion p-3">
<img id = "illustration"src={ramen} class="img-fluid d-sm-block" />            
    </div>
    </div>
    </div>
</section> 
    </div>
    <div class = "text-2 text-light">
      <h1 >Special Meals of the day!</h1>
      <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
    </div>
    <section id ="services">
   
    <div class="services text-light">
      
      <div class="stir">
      <img class="Stir" src={Stir}
      />
      <h4> Stir fry Pasta</h4>
      <span>Stir fry pasta yada yada yada because of Sesan</span> 
    </div>
    <div class="meat">
      <img  class = "Meat" src={Meat} />
      <h4>Meat Balls</h4>
      <span> Stir fry pasta yada yada yada because of Sesan </span>
      </div>
<div class="burger">
    <img  class = "Burger" src={Burger}/>
    <h4>Burger Meal </h4>
    <span>Stir fry pasta yada yada yada because of Sesan</span> 
   </div>
</div>
   </section>
   <div className="head2">
    <section class=" p-5 p-lg-0 pt-lg-5 text-center gx-5 text-sm-start">
    <div class="container">
     <div class="d-sm-flex align-items-center  justify-content-between">
        <div class="box">
            <div class=" p-3 text text-light">
             <h2> Get notified when we update!</h2>
            <span id="text-3"> Get notified when we add new items to our specials menu, update our price list of have promos!
             </span>
            </div> 
       </div>
        <div class="app-store p-3 " >
          <input type="text"style={{width:'250px', height:'40px'}} placeholder='gregphillips@gmail.com'/> 
          <button style={{width:'200px',height:'40px'}}> Get notified</button>
    </div>
    </div>
    </div>
</section> 
</div> </div>
<footer class="footer ">
  <div className="ps-5">
                  <div class="container py-5 text-light ps-5">
                    <div class="row py-4 ps-5">
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 ps-3">
                        <h6 class="text-uppercase font-weight-bold mb-4" id="company">Company</h6>
                        <ul class="list-unstyled mb-0">
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">About Us</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Contact Us</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Career</a></li>
                        
                        </ul>
                      </div>
                      <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 ps-3">
                        <h6 class="text-uppercase font-weight-bold mb-4" id="services2">Support</h6>
                        <ul class="list-unstyled mb-0">
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Help Center</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Safety Center</a></li>
                    
                    
                        </ul>
                      </div>
                      <div class="col-lg-2 col-md-6 mb-lg-0 ps-3 ">
                        <h6 class="text-uppercase font-weight-bold mb-4" id="support">Legal</h6>
                        <ul class="list-unstyled mb-0 ">
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none" >Cookies Policy</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Privacy Policy</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Terms of Service</a></li>
                          <li class="mb-2"><a href="#" class="text-white  text-decoration-none">Despute Resolution</a></li>
                        </ul>
                      </div>
                        <div class="col-lg-6 col-md-6 mb-4 mb-lg-0 ps-5 " id ="install">
                        <h6 class="text-uppercase font-weight-bold mb-4" id="support">Install App</h6>      
                        <div class="app-store2">
                  <img class="IOS" src={google} alt="IOS" />
                                <img class="Google" src={ios} alt="google"/>
                  </div>   
                        </div>
                      </div>
                      </div> </div>
                      </footer>
	</div>
);
};

export default Home;
