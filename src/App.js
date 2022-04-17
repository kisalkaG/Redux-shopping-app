import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
   const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
   const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems)

  return (
    <div className="App">
      {!IsLoggedIn && <Auth />}
      {IsLoggedIn && <Layout />}
    </div>
  );
}

export default App;
