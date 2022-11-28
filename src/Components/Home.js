import React from "react";
import "../CSS/Home.css";

import Product from "./Product";

function Home() {
  return (
    <section>
      <img
        src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
        alt="poster"
        id="home_poster"
      />

      <div className="product_row">
        <Product
          title="Apple 2021 iPad Pro M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SX679_.jpg"
        />
        <Product
          title="ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop"
          price={1099}
          rating={4}
          image="https://m.media-amazon.com/images/I/61bwqXfWiaL._SX466_.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          title="Do It Today: Overcome Procrastination, Improve Productivity"
          price={2.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/41W-o6xu2bL._SX323_BO1,204,203,200_.jpg"
        />
        <Product
          title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
          price={3.69}
          rating={4}
          image="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        />
        <Product
          title="Atomic Habits: The life-changing million copy bestseller"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor"
          price={1599}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
        />
      </div>
    </section>
  );
}

export default Home;
