import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Register.css";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";

const CreateOperador = () => {
  const [nameAndLastname, setNameAndLastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [operador, setOperador] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post("http://localhost:3001/api/user/register", {
        nameAndLastname: nameAndLastname,
        dni: dni,
        email: email,
        password: password,
        admin: false,
        operador: operador,
      });
      Swal.fire({
        icon: "success",
        title: "Operador creado con exito",
        text: "Gracias por confiar en nuestro servicio",
        timer: "1500",
        confirmButtonText: "Continuar",
      });
      setTimeout(() => {
        navigate("/operadores");
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al crear el operador",
        text: "verifique los datos",
        timer: "1500",
        confirmButtonText: "Continuar",
      });
    }
  };

  const local = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/location//allSearch`
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
              <div className="text1">Crear Operador </div>
              <br></br>
              <div>
                <div>
                  Nombre
                  <TextField
                    required
                    name="nameAndLastname"
                    autoComplete="nameAndLastname"
                    autoFocus
                    onChange={(e) => setNameAndLastname(e.target.value)}
                    value={nameAndLastname}
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
                  DNI{" "}
                  <TextField
                    required
                    name="dni"
                    autoComplete="dni"
                    autoFocus
                    onChange={(e) => setDni(e.target.value)}
                    value={dni}
                    size="small"
                  />
                </div>
                <div className="dni">
                  Sucursal{" "}
                  <TextField
                    fullWidth
                    select
                    autoFocus
                    required
                    value={operador}
                    size="small"
                    onChange={(e) => setOperador(e.target.value)}
                  >
                    {Array.isArray(data) &&
                      data.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                  </TextField>
                </div>
              </div>{" "}
              <div>
                <div className="name">
                  Contraseña{" "}
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      size="small"
                      required
                      name="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormControl>
                </div>
                <div className="dni">
                  Repetir contraseña{" "}
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      size="small"
                      required
                      name="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword2(e.target.value)}
                      value={password2}
                    />
                  </FormControl>
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

export default CreateOperador;
