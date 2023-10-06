import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import RecoverPass from "./views/RecoverPass";
import MyAccount from "./views/MyAccount";
import Navbar from ".//components/Navbar";
import Navbar1 from ".//components/Navbar1";

function App() {
  return (
    <>
      <Navbar />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recoverPass" element={<RecoverPass />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
      </Routes>
    </>
  );
}

export default App;
