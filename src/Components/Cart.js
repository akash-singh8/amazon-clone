import React from "react";
import "../CSS/Cart.css";

import CartProduct from "./CartProduct";

function Cart() {
  return (
    <section id="cart">
      <div id="cart_products">
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Shopping Cart
        </p>
        <CartProduct
          title="ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop"
          price={1099}
          rating={4}
          image="https://m.media-amazon.com/images/I/61bwqXfWiaL._SX466_.jpg"
        />
        <CartProduct
          title="Apple 2021 iPad Pro M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SX679_.jpg"
        />
      </div>
      <div id="cart_order">
        <div>
          Subtotal ({0} item):
          <strong>
            <small> $</small>
            {0}
          </strong>
        </div>
        <label>
          <input type="checkbox" /> This order contains a gift
        </label>
        <button>Proceed to Buy</button>
      </div>
    </section>
  );
}

export default Cart;
