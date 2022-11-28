import React from "react";
import "../CSS/Header.css";

import search from "../Images/search.svg";
import cart from "../Images/cart.svg";

import { Link } from "react-router-dom";

function Header() {
  function handleSearch(e) {
    e.preventDefault();
    console.log("Search :", e.target.querySelector("input").value);
  }

  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon navigation icon"
            style={{ cursor: "pointer", paddingTop: "7px", height: "40px" }}
          />
        </Link>

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
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <div id="header_cart">
              <p>0</p>
              <img src={cart} alt="shopping cart" />
              <span>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
