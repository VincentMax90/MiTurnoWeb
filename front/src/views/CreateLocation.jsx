import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Register.css";
import Swal from "sweetalert2";
const CreateLocation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cap, setCap] = useState("");
  const [openHour, setOpenHour] = useState("");
  const [closeHour, setCloseHour] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const location = await axios.post(
        "http://localhost:3001/api/location/creation",
        {
          name: name,
          email: email,
          telefono: phone,
          capacity: cap,
          hourOpen: openHour,
          hourClose: closeHour,
          
        }
      );Swal.fire({
        icon:'success',
        title:"Sucursal creada con exito",
        text:'Gracias por confiar en nuestro servicio', timer: "1500",
        confirmButtonText: 'Continuar'
      }
      )
    } catch (error) {console.log(error)
      ;Swal.fire({
        icon:'erro',
        title:"Verifique los datos ingresados",
        text:'Gracias por confiar en nuestro servicio', timer: "1500",
        confirmButtonText: 'Continuar'
      }
      )
    }
  };

  return (
    <>
      <Grid>
        <Card
          style={{
            maxWidth: "570px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            margin: "50px 0 0 30%",
          }}
        >
          <CardContent>
            <Box
              onSubmit={handleSubmit}
              component="form"
              style={{ margin: " 0 29px" }}
            >
              <div className="text1">Crear una nueva sucursal </div>
              <br></br>
              <div>
                <div>
                  Nombre
                  <TextField
                    required
                    name="name"
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    size="small"
                    fullWidth
                  />
                </div>
              </div>
              <div style={{ marginTop: "15px" }}>Mail</div>
              <TextField
                size="small"
                required
                fullWidth
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />{" "}
              <div>
                <div className="name">
                  Telefono{" "}
                  <TextField
                    required  
                    name="telefono"
                    autoComplete="telefono"
                    autoFocus
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    size="small"
                  />
                </div>
                <div className="dni">
                  Capacidad Maxima
                  <TextField
                    required
                    name="capacidad"
                    autoComplete="caṕacidad"
                    autoFocus
                    onChange={(e) => setCap(e.target.value)}
                    value={cap}
                    size="small"
                  />
                </div>
              </div>{" "}
              <div>
                <div className="name">
                  Hora de inicio{" "}
                  <TextField
                    required
                    name="openHour"
                    autoComplete="openHour"
                    autoFocus
                    onChange={(e) => setOpenHour(e.target.value)}
                    value={openHour}
                    size="small"
                  />
                </div>
                <div className="dni">
                  Hora de cierre
                  <TextField
                    required
                    name="closeHour"
                    autoComplete="closeHour"
                    autoFocus
                    onChange={(e) => setCloseHour(e.target.value)}
                    value={closeHour}
                    size="small"
                  />
                </div>
              </div>
              <Button
                sx={{}}
                type="submit"
                variant="contained"
                style={{
                  width: "100%",
                  backgroundColor: "rgb(165 105 189 )",
                  margin: "15px 0",
                  fontWeight: "bold",
                }}
              >
                Enviar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CreateLocation;
