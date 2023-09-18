import React from "react";
import "./App.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { Navbar } from "./Components/Navbar";
import Body from "./Components/Body";
import { data } from "autoprefixer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./Components/Products";
import SignUp from "./Components/SignUp";
// export type cartItemsType ={
//   id: number;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   title: string;
//   amount: number;
// }

// const fetchProducts = async (): Promise<cartItemsType[]> => {
//   const response = await fetch('https://api.escuelajs.co/api/v1/products');
//   if (!response.ok) {
//     throw new Error('Failed to fetch products');
//   }
//   return response.json();
// };

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<Body />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
