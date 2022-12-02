import React from "react";
import "../CSS/CartProduct.css";
import { firebase, db, auth } from "../firebase";

function CartProduct({ id, title, price, rating, image, totalPrice }) {
  function removeFromCart() {
    db.collection("users")
      .doc(auth.currentUser.email)
      .update({
        products: firebase.firestore.FieldValue.arrayRemove(id),
        price: totalPrice - price,
      });
  }

  return (
    <div className="cart_product">
      <img src={image} alt="product" />
      <div className="cart_product_info">
        <p>{title}</p>
        <span>
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <span>{"⭐".repeat(rating)}</span>
        <button onClick={removeFromCart}>
          {window.screen.width > 500 ? "Remove from cart" : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
