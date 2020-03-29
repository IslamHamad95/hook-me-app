import React, {useContext} from "react";
import { ClothesContext } from "../contexts/ClothesContext";
import './PagesStyles/itemsPage.css'
const ItemsPage=()=>{
    const {clothes}= useContext(ClothesContext)

    return(
    <div className="items-page-container">
        <div className="items">
            {
                clothes.map(shirt=>(
                    <div className="item" key={shirt.id}>
                    <img src={require(`../contexts/clothes-photos/${shirt.image}.jpg`)}></img>
                    <h4 id="item-name">{shirt.name}</h4>
                    <p id="item-price">{shirt.price}$</p>
                    <button id="add-to-cart-btn">ADD TO CART</button>
                </div>
                ) )
            }
           

        </div>

        
    </div>
    )
}

export default ItemsPage;