import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";

const Navbar1 = () => {
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
      {user ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "75px",
            alignItems: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <Button
              color="secondary"
              to={"/reserve"}
              component={Link}
              style={{
                backgroundColor: "rgb(240 240 240)",
                width: "110px",
                height: "45px",
                textTransform: "none",
                fontWeight: "bold",
                marginLeft: "95px",
              }}
            >
              Reservar
            </Button>
          </div>
          <div>
            <Button
              color="secondary"
              to={"/bookings"}
              component={Link}
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                fontSize: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Mis reservas
              <CalendarMonthIcon />
            </Button>

            <Button
              color="secondary"
              to={"/myaccount"}
              component={Link}
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                fontSize: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Mi cuenta <PersonOutlineIcon />
            </Button>

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
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar1;
