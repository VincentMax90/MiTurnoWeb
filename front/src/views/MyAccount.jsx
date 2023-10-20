import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const MyAccount = () => {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState("");

  const [nameAndLastname, setNameAndLastname] = useState(
    data ? data.nameAndLastname : ""
  );
  const [dni, setDni] = useState(data ? data.dni : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(data ? data.phone || null : null);

  const userDate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user/search/${user.id}`
      );
      const data1 = response.data;
      setNameAndLastname(data1.nameAndLastname);
      setEmail(data1.email);setDni(data1.dni)
      setPhone(data1.phone)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveChanges = () => {
    const userData = {
      nameAndLastname,
      dni,
      email,
      phone,
    };

    axios
      .put(`http://localhost:3001/api/user/${user.id}/edit`, userData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        if (response.status === 200) {  Swal.fire({
          icon:'success',
          title:"Ingreso con exito",
          text:'Gracias por confiar en nuestro servicio', timer: "1500",
          confirmButtonText: 'Continuar'})
       ;
        } else {
          alert("Error al actualizar los datos");
        }
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil", error);
        alert("Error al actualizar los datos");
      });
  };

  useEffect(() => {
    userDate();
  }, []);

  return (
    <>
      {user ? (
        <Grid>
          <Card
            style={{
              maxWidth: "570px",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              margin: "50px 0 0 30%",
            }}
          >
            <CardContent>
              <Box component="form" style={{ margin: " 0 24px" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: "22px",
                    fontWeight: "bold",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  Mis Datos
                </div>
                <br></br>
                <Grid item xs={12}>
                  <div>
                    <div style={{ marginTop: "15px" }}>Nombre</div>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      name="name"
                      autoComplete="name"
                      value={nameAndLastname}
                      onChange={(e) => setNameAndLastname(e.target.value)}
                    />{" "}
                    <div style={{ marginTop: "15px" }}>Mail</div>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <div
                      style={{
                        width: "235px",
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                    >
                      DNI{" "}
                      <TextField
                        required
                        name="dni"
                        autoComplete="dni"
                        autoFocus
                        size="small"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                      />
                    </div>
                    {user.admin === true ? null : user.operador === null ? (
                      <div
                        style={{
                          width: "235px",
                          display: "inline-block",
                        }}
                      >
                        Telefono
                        <TextField
                          required
                          name="phone"
                          autoComplete="phone"
                          autoFocus
                          size="small"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "235px",
                          display: "inline-block",
                        }}
                      >
                        Sucursal
                        <TextField
                          required
                          name="operador"
                          autoComplete="operador"
                          autoFocus
                          size="small"
                          value={user.operador}
                          disabled
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: "15px" }}>Contraseña</div>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    name="password"
                    value="********"
                    type="password"
                  />{" "}
                  <div
                    style={{
                      marginTop: "15px",
                      display: "flex",
                    }}
                  ></div>
                  <Button
                    color="secondary"
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                    }}
                  >
                    Editar Contraseña
                  </Button>
                  <Button
                    sx={{}}
                    type="button"
                    variant="contained"
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(165 105 189 )",
                      margin: "15px 0",
                      fontWeight: "bold",
                    }}
                    onClick={handleSaveChanges}
                  >
                    Aceptar
                  </Button>
                  <div
                    style={{
                      border: "1px solid rgb(240 240 240)",
                    }}
                  ></div>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </>
  );
};

export default MyAccount;
