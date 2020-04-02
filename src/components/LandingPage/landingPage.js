import React from 'react';
import './landingPage.css'

function LandingPage(){
    return(
    
              <div className="container">
                     <h1>LETS HOOK YOU UP WITH OUR LATEST PRODUCTS</h1>
                     <img src={require("./model.png")} alt="By name of the photogropher"></img>

                <div className="buttons">
                    <a href="/itemspage"><button id="shop-now">SHOP NOW</button></a>
                     <a href="https://github.com/IslamHamad95/shopping-website"><button id="learn-more">LEARN MORE</button></a>
                </div>
              </div>         
        
    )
}

export default LandingPage;