import React, {useContext,useEffect,useState} from "react";
import { ClothesContext } from "../contexts/ClothesContext";
import {CartContext} from "../contexts/CartContext"
import uuid from "react-uuid"
import './PagesStyles/itemsPage.css'




const ItemsPage=()=>{
    
    const {clothes}= useContext(ClothesContext)
    const {Cart,addToCart,removeFromCart} = useContext(CartContext)
    const [DisplayColumn, setDisplayColumn] = useState(false)
    const [SearchedItem, setSearchedItem]=useState("")
    const [SearchResult,setSearchResult]=useState([...clothes])


    const toggled=()=>{
        setDisplayColumn(!DisplayColumn);
    }

    const onSubmitItem=e=>{
        e.preventDefault();
        let resultArr=[];
        let word=new RegExp(SearchedItem,"i");


        if(SearchedItem==="") {
            return;
        }

        resultArr=clothes.filter((shirt)=>(shirt.name.match(word)))
        setSearchResult([...resultArr])

    }
    

    useEffect(()=>{
        localStorage.setItem('Cart',JSON.stringify(Cart))
    },[Cart])

    useEffect(()=>{
        localStorage.setItem('SearchResult',JSON.stringify(SearchResult))
    },[SearchResult])



   
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

          <form className="search-bar">
                <input id="search-box" placeholder="Item Name" onChange={e=>setSearchedItem(e.target.value)}></input>
                <input type="submit" id="search-button" value="Search Item" onClick={e=>onSubmitItem(e)}></input>
            </form>
              
              <div className="items">
                  {
                      SearchResult.map(shirt=>(
                          <div className="item" key={shirt.id}>
                          <img src={require(`../contexts/clothes-photos/${shirt.image}.jpg`)} alt={shirt.name}></img>
                          <h4 id="item-name">{shirt.name}</h4>
                          <p id="item-price">{shirt.price}$</p>
                          <button onClick={(e)=>addToCart(shirt.name,shirt.price, shirt.id)} id="add-to-cart-btn">ADD TO CART</button>
                          
                      </div>
                      ) )
                  }
           
              </div>
              
              <i id="cart-icon" onClick={(e)=>toggled()} style={{display:Cart.length? "block":"none"}} className="fas fa-cart-plus"></i>
              
              <div className="item-not-found" style={{display:SearchResult.length!==0?"none":"block"}}>
                  <h2>Sorry, We can not find this item</h2>
                  <img src={require("./photos/notfound.png")} alt="not-found"></img>
              </div>
        </div>

      
        
    </div>
    )
}

export default ItemsPage;