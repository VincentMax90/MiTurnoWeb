import React,{useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import axios from "axios"



const MyAccount = () => {
  const user = useSelector((state) => state.user);
  const [nameAndLastname, setNameAndLastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone]=useState("")

  console.log(user)

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3001/api/user/${user.id}/profile`, {
          withCredentials: true,
          credentials: "include",
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario", error);
        });
    }
  }, [user]);


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
                    defaultValue={user.nameAndLastname}
                  />{" "}
                  <div style={{ marginTop: "15px" }}>Mail</div>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    defaultValue={user.email}
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
                      defaultValue={user.dni}
                    />
                  </div>
                  <div
                    style={{
                      width: "235px",
                      display: "inline-block",
                    }}
                  >
                    Telefono
                    <TextField
                      required
                      name="dni"
                      autoComplete="dni"
                      autoFocus
                      size="small"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "15px" }}>Contraseña</div>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  defaultValue="********"
                  type= "password"
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
                  type="submit"
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "rgb(165 105 189 )",
                    margin: "15px 0",
                    fontWeight: "bold",
                  }}
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
    </>
  );
};

export default MyAccount;
