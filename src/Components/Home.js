import React from "react";
import "../CSS/Home.css";

import Product from "./Product";

function Home({ products, cartProducts, price }) {
  return (
    <section>
      <img
        src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
        alt="poster"
        id="home_poster"
      />

      <div className="product_row">
        <Product
          id="productKey2"
          product={products["productKey2"]}
          cartProducts={cartProducts}
          price={price}
        />
        <Product
          id="productKey1"
          product={products["productKey1"]}
          cartProducts={cartProducts}
          price={price}
        />
      </div>
      <div className="product_row">
        <Product
          id="productKey3"
          product={products["productKey3"]}
          cartProducts={cartProducts}
          price={price}
        />
        <Product
          id="productKey4"
          product={products["productKey4"]}
          cartProducts={cartProducts}
          price={price}
        />
        <Product
          id="productKey5"
          product={products["productKey5"]}
          cartProducts={cartProducts}
          price={price}
        />
      </div>
      <div className="product_row">
        <Product
          id="productKey6"
          product={products["productKey6"]}
          price={price}
        />
      </div>
    </section>
  );
}

export default Home;
