import React from 'react';
import Calculator from './Pages/Calculator/calculator';
import './global.css';
import ShoppingList from './Pages/ShoppingList/shoppinglist';

export default function App(){
  return(
    <div>
      <Calculator/>
      <ShoppingList/>
    </div>
  );
}

//