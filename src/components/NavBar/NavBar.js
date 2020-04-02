import React from 'react';
import './NavBar.css';

function NavBar(){

    return(
        <header>
             <a href="/"><h1>HOOKMEAPP</h1></a>
             <nav>
                 <div className="hamburger">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                 </div>

                 <ul className="nav-links">
                     <li><a href="/">HOME</a></li>
                     <li><a href="https://ihdev.netlify.com/#Contact">CONTACT US</a></li>
                     <li>SIGN UP/SIGN IN</li>

                </ul>
            </nav>
        </header>

    )
}

export default NavBar;