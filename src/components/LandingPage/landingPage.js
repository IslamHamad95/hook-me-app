import React from 'react';
import './landingPage.css'

function LandingPage(){
    return(
    
              <div className="container">
                     <h1>LETS HOOK YOU UP WITH OUR LATEST PRODUCTS</h1>
                     <img src={require("./model.png")} alt="By name of the photogropher"></img>

                <div className="buttons">
                    <a href="/itemspage"><button id="shop-now">SHOP NOW</button></a>
                     <button id="learn-more">LEARN MORE</button>
                </div>
              </div>         
        
    )
}

export default LandingPage;