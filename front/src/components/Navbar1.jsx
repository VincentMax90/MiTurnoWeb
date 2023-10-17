import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";
import ButtonClose from "../commons/ButtonClose";
import ButtonAccount from "../commons/ButtonAccount";
import StoreIcon from "@mui/icons-material/Store";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ArticleIcon from "@mui/icons-material/Article";
const Navbar1 = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user && user.admin === false && user.operador === null ? (
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
            <ButtonAccount /> <ButtonClose />
          </div>
        </div>
      ) : null}

      {user && user.admin === true ? (
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
              to={"/create/location"}
              component={Link}
              style={{
                backgroundColor: "rgb(240 240 240)",
                width: "130px",
                height: "45px",
                textTransform: "none",
                fontWeight: "bold",
                marginLeft: "95px",
              }}
            >
              Crear Sucursal
            </Button>

            <Button
              color="secondary"
              to={"/create/Operador"}
              component={Link}
              style={{
                backgroundColor: "rgb(240 240 240)",
                width: "130px",
                height: "45px",
                textTransform: "none",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Crear Operador
            </Button>
          </div>

          <div>
            {" "}
            <Button
              color="secondary"
              to={"/local"}
              component={Link}
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                fontSize: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Sucursales
              <StoreIcon />
            </Button>{" "}
            <Button
              color="secondary"
              to={"/operadores"}
              component={Link}
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                fontSize: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              OPERADORES
              <FaceRetouchingNaturalIcon />
            </Button>{" "}
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
              Reportes
              <ArticleIcon />
            </Button>
            <ButtonAccount />
            <ButtonClose />
          </div>
        </div>
      ) : null}
      {user && user.admin === false && user.operador !== null ? (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            height: "75px",
            alignItems: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingRight:"30px"
          }}
        >
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
              Reservas
              <CalendarMonthIcon />
            </Button>
          <ButtonAccount />
          <ButtonClose />
        </div>
      ) : null}
    </>
  );
};

export default Navbar1;
