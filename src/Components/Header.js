import React from "react";
import "../CSS/Header.css";

import search from "../Images/search.svg";
import cart from "../Images/cart.svg";

function Header() {
  function handleSearch(e) {
    e.preventDefault();
    console.log("Search :", e.target.querySelector("input").value);
  }

  return (
    <header>
      <nav>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon navigation icon"
          style={{ paddingTop: "7px", height: "40px" }}
        />

        <form onSubmit={handleSearch}>
          <input type="text" placeholder="" name="search" />
          <button>
            <img src={search} alt="search" height={20} />
          </button>
        </form>

        <div id="nav_options">
          <div>
            <p className="nav_options1">Hello, Guest</p>
            <p className="nav_options2">Sign in</p>
          </div>
          <div>
            <p className="nav_options1">Returns</p>
            <p className="nav_options2">& Orders</p>
          </div>
          <div id="header_cart">
            <p>0</p>
            <img src={cart} alt="shopping cart" />
            <span>Cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
