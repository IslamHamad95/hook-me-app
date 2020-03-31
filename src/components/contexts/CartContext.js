import React,{createContext,useState} from 'react';

export const CartContext= createContext();


const CartContextProvider=(props)=>{
    const [Cart, setCart] = useState([])
  
    
    const addToCart=(name,price,id)=>{
        setCart([...Cart, {name, price,id}]);
      
    }

        const removeFromCart=(name)=>{
            
            
           
            if (Cart.length<1) return;
            for(let i=Cart.length-1; i>=0;i--){
                if(Cart[i].name===name){
                    setCart([...Cart.slice(0,i),...Cart.slice(i+1,Cart.length)])
                    break;
                }
            }
          
        }
            
        
    return(
        <CartContext.Provider value={{Cart,addToCart,removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )

}



export default CartContextProvider;