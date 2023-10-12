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
import WestIcon from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Register.css";

const Register = () => {
  const [nameAndLastname, setNameAndLastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[a-z]/.test(password) ||
      password.length <= 8 ||
      password !== password2
    ) {
      return;
    }

    try {
      const user = await axios.post("http://localhost:3001/api/user/register", {
        nameAndLastname: nameAndLastname,
        dni: dni,
        email: email,
        password: password,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      ("El usuario ya existe");
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
              style={{ margin: " 0 24px" }}
            >
              <Button
                color="secondary"
                to={"/"}
                component={Link}
                style={{ fontWeight: "bold", textTransform: "none" }}
              >
                <WestIcon />
                Atrás
              </Button>
              <div className="text1">Crear Cuenta </div>
              <br></br>
              <div>
                <div className="name">
                  Nombre y apellido
                  <TextField
                    required
                    name="nameAndLastname"
                    autoComplete="nameAndLastname"
                    autoFocus
                    onChange={(e) => setNameAndLastname(e.target.value)}
                    value={nameAndLastname}
                    size="small"
                  />
                </div>
                <div className="dni">
                  DNI
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
              <div className="line">
                <div className="name">
                  Contraseña
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
                <div style={{ width: "235px" }}>
                  Repetir Contraseña
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
              <div className="text2">
                La contraseña debe contener:
                <div style={{ border: "1px solid rgb(240 240 240)" }}></div>
                <div
                  style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}
                >
                  {/[A-Z]/.test(password) ? "✔️" : "❌"} ABC una letra mayúscula
                </div>
                <div style={{ color: /\d/.test(password) ? "green" : "red" }}>
                  {/\d/.test(password) ? "✔️" : "❌"} 123 Un numero
                </div>
                <div
                  style={{ color: /[a-z]/.test(password) ? "green" : "red" }}
                >
                  {/[a-z]/.test(password) ? "✔️" : "❌"} abc una letra minúscula
                </div>
                <div style={{ color: password.length > 8 ? "green" : "red" }}>
                  {password.length > 8 ? "✔️" : "❌"} *** Mínimo 8 caracteres
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
                Registrarme
              </Button>
              <div style={{ border: "1px solid rgb(240 240 240)" }}></div>
              <Button
                color="inherit"
                to={"/login"}
                component={Link}
                style={{
                  width: "100%",
                  backgroundColor: "rgb(240 240 240)",
                  textTransform: "none",
                  fontWeight: "bold",
                  margin: "  15px 0 ",
                }}
              >
                ¿Ya tenes cuenta?Iniciar seccion{" "}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Register;
