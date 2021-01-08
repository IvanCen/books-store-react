import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import './index.css'
import Spinner from "../Spinner";
import CartPage from "../../pages/cart-page";
import HomePage from "../../pages/home-page";
import ShopHeader from "../Shop-header";

function App() {
  return (
    <main role='main' className="container">
      <ShopHeader numItems={5} total={210}/>
      <header className='header'>
        <Link to='/'>home</Link>
        <Link to='/cart'>cart</Link>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
      <Spinner/>
    </main>
  );
}

export default App
