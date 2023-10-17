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
import Reserve from "./views/Reserve";
import Booking from "./views/Bookings";
import CreateLocation from "./views/CreateLocation";
import CreateOperador from "./views/CreateOperador";
import Local from "./views/local";
import Operadores from "./views/Operadores";



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
        <Route path="/reserve" element={<Reserve/>}></Route>
        <Route path="/bookings" element = {<Booking/>}></Route>
        <Route path="/create/location" element = {<CreateLocation/>}></Route>
        <Route path="/create/operador" element = {<CreateOperador/>}></Route>
        <Route path="/local" element = {<Local/>}></Route>
        <Route path="/operadores" element = {<Operadores/>}></Route>

      </Routes>
    </>
  );
}

export default App;
