import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import LandingPage from './components/LandingPage/landingPage.js';
import {Router} from '@reach/router'
import ClothesContextProvider from './components/contexts/ClothesContext.js';
import ItemsPage from './components/Pages/ItemsPage.js';
import CartContextProvider from './components/contexts/CartContext.js';
import CheckOutPage from './components/Pages/CheckOutPage.js';
import SuccessPage from './components/Pages/SuccessPage.js';


function App() {
  return (
    <div>
      <NavBar/>
      <CartContextProvider>
      <ClothesContextProvider>
      <Router>
      <LandingPage path="/"/>
      <ItemsPage path="/itemspage"/>
      <CheckOutPage path="/check-out"/>
      <SuccessPage path="/order-placed"/>
      </Router>
      </ClothesContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
