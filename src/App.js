import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

import { auth, db } from "./firebase";

function App() {
  const [product, setProduct] = useState({});
  const [userName, setUserName] = useState("Guest");
  const [signed, setSigned] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // fetching products id and the data
    db.collection("products").onSnapshot((snapshot) => {
      setProduct(snapshot.docs[0].data());
    });

    // setting up authentication event listener
    auth.onAuthStateChanged((user) => {
      if (user) {
        // fetch/create a document for the user to store their product in cart
        const docRef = db.collection("users").doc(user.email);
        docRef.onSnapshot((doc) => {
          if (doc.exists) {
            setCartProducts(doc.data().products);
            setPrice(doc.data().price);
          } else {
            docRef.set({ price: 0, products: [] });
          }
        });

        setSigned(true);
        setUserName(user.displayName.split(" ")[0]);
      } else {
        setSigned(false);
        setUserName("Guest");
        setPrice(0);
        setCartProducts([]);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header
          user={userName}
          signed={signed}
          cartLength={cartProducts.length}
        />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                products={product}
                cartProducts={cartProducts}
                price={price}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Home
                products={product}
                cartProducts={cartProducts}
                price={price}
              />
            }
          ></Route>
        </Routes>

        <footer>
          Developed with{" "}
          <span style={{ textShadow: "0 0 12px rgb(255, 70, 70)" }}>❤️</span> by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/akash-singh8/"
              target="_blank"
              rel="noreferrer"
            >
              ~Akash
            </a>
          </strong>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
