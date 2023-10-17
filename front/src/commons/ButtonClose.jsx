import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";

const ButtonClose = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/api/user/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then(() => {
        dispatch(setUser(null));
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
      <>

            <Button
              onClick={handleLogout}
              variant="contained"
              style={{
                width: "50px",
                backgroundColor: "rgb(165 105 189 )",
                margin: "15px",
                fontWeight: "bold",
              }}
            >
              Salir
            </Button>
         
        
     
    </>
  );
};

export default ButtonClose;
