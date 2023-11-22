import React from "react";
import "../App.css";
import Header from "../components/Layout/Header";
import Food from "../components/Food/Food";
import Footer from "../components/Layout/Footer";

function App() {
  return (
    <>
      <Header/>
      <Food />
      <Footer/>
    </>
  );
}

export default App;
