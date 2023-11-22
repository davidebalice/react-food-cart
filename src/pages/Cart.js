import React from "react";
import "../App.css";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;
