import React from 'react';
import './PagesStyles/CheckOutPage.css'



const CheckOutPage=()=>{
    let localData=localStorage.getItem('Cart');
    const items= localData? JSON.parse(localData):[];


    return(
       <div className="submit">
           <form className="submit-form">
               <label>Full Name:</label>
               <input id="full-name" ></input>
               <label>Email:</label>
               <input id="email" ></input>
               <label>Phone Number:</label>
               <input id="phone" ></input>
               <label>Full Address:</label>
               <input id="address" ></input>
               <label>Comments:</label>
               <textarea id="comments"></textarea>

               
           </form>
           <div className="cart-items-to-submit">
              {items.map (item=>(
                  <div style={{display:"flex-box", width:"100%"}} key={item.id} >
                      <p style={{float:"left"}}>{item.name}</p>
                      <p style={{float:"right"}}>{item.price}$</p>
                      <br/>
                  </div>
            
           ))}
           </div>

   
       </div>
      
    )
}

export default CheckOutPage;
