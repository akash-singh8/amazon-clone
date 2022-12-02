import React from "react";
import "../CSS/Header.css";

import search from "../Images/search.svg";
import cart from "../Images/cart.svg";
import logo from "../Images/amazon.png";

import { Link } from "react-router-dom";
import { signInWithGoogle, logOut } from "../firebase";

function Header({ user, signed, cartLength }) {
  function handleSearch(e) {
    e.preventDefault();
    e.target.firstChild.value = "";
    alert("Under development!!!");
  }

  return (
    <header>
      <nav>
        <Link to="/">
          {/* <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon navigation icon"
            style={{ cursor: "pointer", paddingTop: "7px", height: "40px" }}
          /> */}
          <img
            src={
              window.screen.width < 500
                ? logo
                : "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            }
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
          <div
            onClick={signed ? logOut : signInWithGoogle}
            title={`Sign ${signed ? "out" : "in"} with Google`}
          >
            <p className="nav_options1">Hello, {user}</p>
            <p className="nav_options2">{"Sign " + (signed ? "out" : "in")}</p>
          </div>
          <div
            onClick={() => {
              alert("Under development!!!");
            }}
          >
            <p className="nav_options1">Returns</p>
            <p className="nav_options2">& Orders</p>
          </div>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <div id="header_cart">
              <p>{cartLength}</p>
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
