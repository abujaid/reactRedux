import React from 'react';
import './App.css';
import ShoppingList from './components/shoppingList';
import AppNavbar from './components/AppNavbar';
// import ItemModel from './components/ItemModel';

function App ()
{
  return (
    <React.Fragment>
      <AppNavbar />
      <ShoppingList />
      {/* <ItemModel /> */}
    </React.Fragment>
  );
}

export default App;
