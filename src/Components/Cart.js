import React from "react";
import "../CSS/Cart.css";

import CartProduct from "./CartProduct";

function Cart({ products, cartProducts, price }) {
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
          {cartProducts.length ? "Shopping Cart" : "Your Cart is empty"}
        </p>

        {cartProducts
          .slice()
          .reverse()
          .map((productId) => {
            const currProduct = products[productId];
            return (
              <CartProduct
                key={productId}
                id={productId}
                title={currProduct.title}
                price={currProduct.price}
                rating={currProduct.rating}
                image={currProduct.image}
                totalPrice={price}
              />
            );
          })}
      </div>
      <div id="cart_order">
        <div>
          Subtotal ({cartProducts.length} item):
          <strong>
            <small> $</small>
            {price}
          </strong>
        </div>
        <label>
          <input type="checkbox" /> This order contains a gift
        </label>
        <button
          onClick={() => {
            alert("Under development!!!");
          }}
        >
          Proceed to Buy
        </button>
      </div>
    </section>
  );
}

export default Cart;
