import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Header from './Components/Header';
import About from "./Components/About";

const RouteSwitch = () => {

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);


  const addGame = (title) =>{
    console.log("Updating Cart")
    setCartItems(cartItems.concat(title));
    setCount(count + 1);
    console.log(cartItems);
  }
  
  
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} count={count}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Products addGame={addGame} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;