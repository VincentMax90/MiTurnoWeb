import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Bookings.css";
const Booking = () => {
  const [data, setData] = useState([]);

  const user = useSelector((state) => state.user);
console.log(user)
  const booking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/appoiment/user/${user.id}`
      );
      const data1 = response.data;
      setData(data1);
    } catch (error) {
      console.error(error);
    }
  };

  const booking1 = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/appoiment/location/${user.operador}`
      );
      const data1 = response.data;
      setData(data1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user && user.operador !== null) {
      booking1();
    } else {
      booking();
    }
  }, [user]);

  return (
    <>
      <div>reservas</div>
      {data.length === 0 ? (
        "No hay reservas"
      ) : (
        <>
          {Array.isArray(data) &&
            data.map((option) => (
              <div className="conteiner">
                <div className="box">
                  Nombre y apellido <br></br>{" "}
                  <div style={{ fontWeight: "bold" }}>{option.name}</div>
                </div>
                <div className="box">
                  Reserva<br></br>
                  <div style={{ fontWeight: "bold" }}>{option.hour}</div>
                </div>
                <div className="box">
                  Sucursal<br></br>
                  <div style={{ fontWeight: "bold" }}>{option.location}</div>
                </div>
                <div className="box">
                  N° de la reserva<br></br>
                  <div style={{ fontWeight: "bold" }}>{"2023 -"+option.id}</div>
                </div>
                <div className="box">
                  <Button
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "rgb(165 105 189 )",
                      fontWeight: "bold",
                    }}
                  >
                    Editar
                  </Button>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default Booking;
