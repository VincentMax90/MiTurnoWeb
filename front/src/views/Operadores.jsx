import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Bookings.css";
const Operadores = () => {
  const [data, setData] = useState([]);

  const user = useSelector((state) => state.user);
  const local = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user/searchAll`
      );
      const data1 = response.data;
      setData(data1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    local();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        "No hay reservas o eso cree"
      ) : (
        <>
          {Array.isArray(data) &&
            data
              .filter((option) => option.operador !== null)
              .map((option) => (
                <div className="conteiner">
                  <div className="box">
                    Nombre <br></br>{" "}
                    <div style={{ fontWeight: "bold" }}>
                      {option.nameAndLastname}
                    </div>
                  </div>
                  <div className="box">
                    Email<br></br>
                    <div style={{ fontWeight: "bold" }}>{option.email}</div>
                  </div>
                  <div className="box">
                    Sucursal<br></br>
                    <div style={{ fontWeight: "bold" }}>{option.operador}</div>
                  </div>
                  <div className="box">
                    Contraseña<br></br>
                    <div style={{ fontWeight: "bold" }}>{`********** `}</div>
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

export default Operadores;
