import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { setUser } from "../state/user";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Swal = require('sweetalert2')


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
        }
      );

      const userData = response.data;
      
      dispatch(setUser(userData));
      Swal.fire({
        icon:'success',
        title:"Ingreso con exito",
        text:'Gracias por confiar en nuestro servicio', timer: "1500",
        confirmButtonText: 'Continuar'})
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {Swal.fire({
      icon:'error',
      title:"Email o contraseña incorrecto",
      text:'Verifique ambos',
      confirmButtonText: 'Continuar',
      timer: "1500",
    })
    }
  };
  return (
    <>
      {" "}
      <div>
        <Grid>
          <Card
            style={{
              maxWidth: "570px",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              margin: "50px 0 0 30%",
            }}
          >
            <CardContent>
              <Box onSubmit={handleLoginSubmit} component="form">
                <Grid spacing={1}>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "22px",
                      fontWeight: "bold",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "25px auto",
                    }}
                  >
                    Iniciar Sesión
                  </div>
                  <div style={{ margin: "0 15px" }}>
                    <Grid item xs={{ marginTop: "5px" }}>
                      Usuario
                      <TextField
                        required
                        fullWidth
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setLoginEmail(e.target.value)}
                        value={loginEmail}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      Constraseña <br></br>
                      <FormControl sx={{ width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                        <OutlinedInput
                          id=" fullWidth"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          size="small"
                          required
                          name="password"
                          autoComplete="current-password"
                          onChange={(e) => setLoginPassword(e.target.value)}
                          value={loginPassword}
                        />
                      </FormControl>
                    </Grid>
                  </div>
                  <Button
                    color="secondary"
                    to={"/recoverPass"}
                    component={Link}
                    style={{
                      marginTop: "15px",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    ¿Olvidaste tu constraseña?
                  </Button>
                  <Grid item xs={12}>
                    {loginEmail !== ""  && loginPassword.length >= 4? (
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          width: "95%",
                          backgroundColor: "rgb(165 105 189 )",
                          margin: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        ingresar
                      </Button>
                    ) : (
                      <Button
                        disabled
                        type="submit"
                        variant="contained"
                        style={{
                          width: "95%",
                          backgroundColor: "rgb(165 105 189 )",
                          margin: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        ingresar
                      </Button>
                    )}
                  </Grid>
                  <div
                    style={{
                      border: "1px solid rgb(240 240 240)",
                      margin: "0 15px",
                    }}
                  ></div>
                  <Button
                    to={"/register"}
                    color="secondary"
                    component={Link}
                    style={{
                      width: "95%",
                      backgroundColor: "rgb(240 240 240)",
                      textTransform: "none",
                      fontWeight: "bold",
                      margin: "15px",
                    }}
                  >
                    ¿No tenes cuenta?Registrate
                  </Button>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Login;
