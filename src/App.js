import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import LandingPage from './components/LandingPage/landingPage.js';
import {Router} from '@reach/router'
import ClothesContextProvider from './components/contexts/ClothesContext.js';
import ItemsPage from './components/Pages/ItemsPage.js';


function App() {
  return (
    <div>
      <NavBar/>
      <ClothesContextProvider>
      <Router>
      <LandingPage path="/"/>
        <ItemsPage path="/itemspage"/>
      </Router>
      </ClothesContextProvider>
    </div>
  );
}

export default App;
