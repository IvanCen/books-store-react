import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ShopHeader = ({cartItems, total}) => {
  const allItemsCount = cartItems.reduce((acc, cur) => acc + cur.count, 0)

  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link className="shopping-cart" to='/cart'>
        <i className="cart-icon fa fa-shopping-cart"/>
        {allItemsCount} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    cartItems: cartItems,
    total: orderTotal
  }
}


export default connect(mapStateToProps)(ShopHeader);
