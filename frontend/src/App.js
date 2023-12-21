import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/Login-SignUpPage/LoginPage";
import SignUpPage from "./components/Login-SignUpPage/SignUpPage";
import {Routes, Route,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/navbar" element={<Navbar/>} />
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/loginpage" element={<LoginPage />} />     
      <Route exact path="/footer" element= {<Footer/>} />
      <Route exact path="/signuppage" element= {<SignUpPage/>} />
      <Route exact path="/cart" element= {<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
