import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
