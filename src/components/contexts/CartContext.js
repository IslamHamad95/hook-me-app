import React,{createContext,useState} from 'react';

const CartContext= createContext();

const CartContextProvider=()=>{
    const [Cart, setCart] = useState("")

}

export default CartContextProvider;