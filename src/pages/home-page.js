import React from "react";
import ShoppingCartTable from "../components/Shopping-cart-table";
import BookListContainer from "../components/Book-list-container";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <BookListContainer/>
      <ShoppingCartTable/>
    </div>
  );
}

export default HomePage
