import React, {useState,createContext} from "react";


export const ClothesContext= createContext();

const ClothesContextProvider=(props)=>{

    const [clothes, setclothes] = useState([
        {name:"Oxford Shirt ", id:1, price:50, desc:"All sizes Avalabile" ,image:"oxford-shirt"},
        {name:"Cotton Shirt", id:2, price:70, desc:"All sizes Avalabile",image:"cotton-shirt"},
        {name:"Patterned Shirt", id:3, price:30, desc:"All sizes Avalabile",image:"patterned-shirt"},
        {name:"Denim Shirt", id:4, price:40, desc:"All sizes Avalabile",image:"denim-shirt"}, 
        {name:"Oxford Shirt ", id:5, price:50, desc:"All sizes Avalabile" ,image:"oxford-shirt"},
        {name:"Cotton Shirt", id:6, price:70, desc:"All sizes Avalabile",image:"cotton-shirt"},
        {name:"Patterned Shirt", id:7, price:30, desc:"All sizes Avalabile",image:"patterned-shirt"},
        {name:"Denim Shirt", id:8, price:40, desc:"All sizes Avalabile",image:"denim-shirt"}, 
        {name:"Oxford Shirt ", id:9, price:50, desc:"All sizes Avalabile" ,image:"oxford-shirt"},
        {name:"Cotton Shirt", id:10, price:70, desc:"All sizes Avalabile",image:"cotton-shirt"},
        {name:"Patterned Shirt", id:11, price:30, desc:"All sizes Avalabile",image:"patterned-shirt"},
        {name:"Denim Shirt", id:12, price:40, desc:"All sizes Avalabile",image:"denim-shirt"},   
    ])

    return(
        <ClothesContext.Provider value={{clothes}} >
            {props.children}
        </ClothesContext.Provider>
    )

}

export default ClothesContextProvider
