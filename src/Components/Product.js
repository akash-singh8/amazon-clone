import React from "react";
import "../CSS/Product.css";
import { firebase, db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Product({ id, product, cartProducts, price }) {
  const navigate = useNavigate();

  function addToCart() {
    let isPresent = false;
    cartProducts?.forEach((item) => {
      if (item === id) {
        isPresent = true;
      }
    });
    if (auth.currentUser && !isPresent) {
      db.collection("users")
        .doc(auth.currentUser.email)
        .update({
          price: price + product.price,
          products: firebase.firestore.FieldValue.arrayUnion(id),
        });
      navigate("/cart");
    } else if (isPresent) {
      alert("The product is already in your cart");
    } else {
      alert("Sign in first to buy the items");
    }
  }

  return (
    <div className="product">
      <div className="product_details">
        <p className="product_title">{product?.title}</p>
        <p className="product_price">
          <small>$</small>
          {product?.price}
        </p>
        <p className="product_rating">{"⭐".repeat(product?.rating)}</p>
      </div>

      <img src={product?.image} alt="product" className="product_image" />

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
