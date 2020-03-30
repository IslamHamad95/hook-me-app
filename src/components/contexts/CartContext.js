import React,{createContext,useState} from 'react';

export const CartContext= createContext();


const CartContextProvider=(props)=>{
    const [Cart, setCart] = useState([])

    
    const addToCart=(name,price,id)=>{
        setCart([...Cart, {name, price,id}]);
        //console.log([...Cart, {name, price,id}])
    }

        const removeFromCart=(id)=>{
            setCart(Cart.filter(item=>item.id!==id));
        }
    return(
        <CartContext.Provider value={{Cart,addToCart,removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )

}



export default CartContextProvider;