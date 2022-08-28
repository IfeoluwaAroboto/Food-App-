import React from 'react'
import Oghene  from "../IMAGES/Oghene.png";
import Burg  from "../IMAGES/Burg.png";
import Pasta  from "../IMAGES/Pasta.png";
import Balls  from "../IMAGES/Balls.png";
import Ramen  from "../IMAGES/ramen2.png";
import banna  from "../IMAGES/banna.png";
import Soup  from "../IMAGES/soup.png";
import './Menu.css'
const Menu = () => {
  let user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <div>
     <div className="welcome">
        <div className="greetings">
 <h2> Good Day, {user?.name} </h2>
 <p> What delicious meal are you craving today? </p>
        </div>
        <div className="profile">
<img src={Oghene} alt="" />
        </div>
     </div>
     <section id="Food" class="p-4 ">
        <div class="container">
            <div class="row g-4">
            
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={Burg} class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                           Burger
                           </h4>
                           <span class="card-text">
                      The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
      
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={Burg} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> 0 </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
                            
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={Pasta} class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                    Stair Fry Pasta
                           </h4>
                           <span class="card-text">
                           The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
                              
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={Pasta} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> 0 </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
              
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={Balls}class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                            Meat Balls
                           </h4>
                           <span class="card-text">
                           The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
                             
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={Balls} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
               
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="row g-4">
            
                <div class="col-md-6 col-lg-4 pt-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={Ramen} class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                      Ramen
                           </h4>
                           <span class="card-text">
                      The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
                              
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={Ramen} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> 0 </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
              
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pt-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={banna} class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                    Toast
                           </h4>
                           <span class="card-text">
                           The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
                              
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={banna} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> 0 </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
              
                          </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-4 pt-4">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src={Soup}class = "rounded-circle mb-3" alt="" srcset=""/>
                           <h4 class="card-title mb-3">
                            Soup
                           </h4>
                           <span class="card-text">
                           The in-house pasta and chicken by Chef Moose
                           </span>
                          <div className='price'>
                            <span> N1000</span>
                              
<button type="button" class="btn " data-toggle="modal" data-target="#exampleModalLong">
 Add to Cart 
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={Soup} alt="" />

      <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et aliquid consectetur veritatis mollitia recusandae aut corporis eum. Dignissimos accusamus ea odio cumque sint, alias consectetur. Quos nostrum ut vitae. </h6>
  <div class = "buy">
    <h5> N1000 </h5> 
    <h5> 10 - 20 Min </h5>
    <h5> 10 pics available </h5>
  </div>
      </div>
      <div class="modal-footer ">
        <button>
         + </button>
         <h5> 0 </h5>
         <button>- </button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Add to Cart </button>
   
      </div>
    </div>
  </div>
</div>
              
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          
                
        </div>
     
     </section>
    </div>
  )
}

export default Menu