import React from "react";
import {Route, Switch} from "react-router-dom";
import './index.css'
import CartPage from "../../pages/cart-page";
import HomePage from "../../pages/home-page";
import ShopHeader from "../Shop-header";

function App() {
  return (
    <main role='main' className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
    </main>
  );
}

export default App
