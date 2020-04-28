import React,{useState} from 'react'
import uuid from "react-uuid"


 const SearchedItems=()=> {
    let localData=localStorage.getItem('SearchResult');
    const items= localData? JSON.parse(localData):[];

  
    return (
        <div>
           <div>
               {items.map((element)=>
               <h1  key={uuid()}>{element}</h1>
               )}
           </div>
        </div>
    )
}


export default SearchedItems;