import React, { useState } from "react";
import "../App.css";
import Header from "../components/Layout/Header";
import Food from "../components/Food/Food";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <Food />
    </>
  );
}

export default App;
