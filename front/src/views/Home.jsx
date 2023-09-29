import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

const Home = () => {
  return (
    <>
      {" "}
      <div>Bienvenido a MiTurnoWeb</div>
      <Button  to={"/login"} component={Link}>login</Button>
    </>
  );
};

export default Home;
