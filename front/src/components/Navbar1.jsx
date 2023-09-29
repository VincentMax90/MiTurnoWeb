import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Navbar1 = () => {
  return (
    <>
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
            to={"/login"}
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
            to={"/recoverPass"}
            component={Link}
            style={{
              marginTop: "15px",
              fontWeight: "bold",
              fontSize:"10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Mis reservas<CalendarMonthIcon />
          </Button>
          
          <Button
            color="secondary"
            to={"/recoverPass"}
            component={Link}
            style={{
              marginTop: "15px",
              fontWeight: "bold",
              fontSize:"10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Mi cuenta <PersonOutlineIcon />
          </Button>
        
        </div>
      </div>
    </>
  );
};

export default Navbar1;
