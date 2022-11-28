import React, { useEffect } from "react";
import "../CSS/Product.css";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product_details">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          {price}
        </p>
        <p className="product_rating">{"⭐".repeat(rating)}</p>
      </div>

      <img src={image} alt="product" className="product_image" />

      <button>Add to cart</button>
    </div>
  );
}

export default Product;
