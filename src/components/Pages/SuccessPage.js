import React from "react";
import './PagesStyles/SuccessPage.css'

const SuccessPage=()=>{
    return(
        <div className="success-post">
            <div className="thank-you">
            <img src={require("./photos/done-shopping.png")} alt="done-shopping"></img>
            <h1>YOUR ORDER HAS BEEN PLACED</h1>
            <h3>THANKS FOR PURCHASING FROM  OUR WEBSITE</h3>
            </div>
        </div>
    )

}

export default SuccessPage;