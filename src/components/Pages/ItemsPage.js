import React, {useContext,useEffect,useState} from "react";
import { ClothesContext } from "../contexts/ClothesContext";
import {CartContext} from "../contexts/CartContext"
import uuid from "react-uuid"
import './PagesStyles/itemsPage.css'



const ItemsPage=()=>{
    
    const {clothes}= useContext(ClothesContext)
    const {Cart,addToCart,removeFromCart} = useContext(CartContext)
    const [DisplayColumn, setDisplayColumn] = useState(false)


    const toggled=()=>{
        setDisplayColumn(!DisplayColumn);
    }

    useEffect(()=>{
        localStorage.setItem('Cart',JSON.stringify(Cart))
    },[Cart])

   
    return(
        <div>
            <div style={{display: (DisplayColumn&& Cart.length)? "block":"none"}} className="slider">
            {
                      Cart.map(shirt=>(
                          <div className="cart-item" key={uuid()}>
                              <button onClick={(e)=>removeFromCart(shirt.name)} id="remove-from-cart-btn">x</button>
                          <h4 id="cart-item-name">{shirt.name}</h4>
                          <p id="cart-item-price">{shirt.price}$</p>
                          <br/>
                      </div>
                      ) )
                  }
                <a href="/check-out"><button id="check-out-btn" >CheckOut</button></a>
            </div>
            
          <div className="items-page-container">
              <div className="items">
                  {
                      clothes.map(shirt=>(
                          <div className="item" key={shirt.id}>
                          <img src={require(`../contexts/clothes-photos/${shirt.image}.jpg`)}></img>
                          <h4 id="item-name">{shirt.name}</h4>
                          <p id="item-price">{shirt.price}$</p>
                          <button onClick={(e)=>addToCart(shirt.name,shirt.price, shirt.id)} id="add-to-cart-btn">ADD TO CART</button>
                          
                      </div>
                      ) )
                  }
           
              </div>
              
              <i id="cart-icon" onClick={(e)=>toggled()} style={{display:Cart.length? "block":"none"}} className="fas fa-cart-plus"></i>
        </div>
        
    </div>
    )
}

export default ItemsPage;