import React from "react";
import "../CSS/CartProduct.css";

function CartProduct({ title, price, rating, image }) {
  return (
    <div className="cart_product">
      <img src={image} alt="product" />
      <div className="cart_product_info">
        <p>{title}</p>
        <span>
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <span style={{ letterSpacing: "-3px" }}>{"⭐".repeat(rating)}</span>
        <button>Remove from cart</button>
      </div>
    </div>
  );
}

export default CartProduct;
