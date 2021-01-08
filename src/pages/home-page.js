import React from "react";
import BookList from "../components/Book-list";
import ShoppingCartTable from "../components/Shopping-cart-table";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <BookList/>
      <ShoppingCartTable/>
    </div>
  );
}

export default HomePage
