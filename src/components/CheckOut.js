import React,{useContext} from 'react';
import { CartContext } from './contexts/CartContext';





const CheckOut=()=>{
    const {setCart}= useContext(CartContext);
    let localData=localStorage.getItem('Cart');
    const items= localData? JSON.parse(localData):[];


    return(
       <div>
           {items.map (item=>(
               <div style={{display:"flex-box", width:"100%"}} key={item.id} >
                   <p style={{float:"left"}}>{item.name}</p>
                   <p style={{float:"right"}}>{item.price}$</p>
                   <br/>
               </div>
           ))}

   
       </div>
      
    )
}

export default CheckOut;
