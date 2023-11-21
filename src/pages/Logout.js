import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const LogoutPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    handleLogout();
    navigate("/");
  }, []);


  return <div></div>;
};

export default LogoutPage;
