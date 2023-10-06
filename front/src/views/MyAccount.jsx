import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";

import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";




const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)


  const handleLogout = () => {
    axios
      .get("http://localhost:3001/api/user/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then(() => {
        dispatch(setUser(null));
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <>
    

      <div onClick={handleLogout}>
        <button>close</button>
      </div>


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
              component="form"
              style={{ margin: " 0 24px" }}
            >
              

              <div
                style={{
                  display: "flex",
                  fontSize: "22px",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Panel de usuario: {user? user.nameAndLastname : null}
              </div>
              <br></br>
              <Grid item xs={12}>
                <div>
                  <div
                    style={{
                      width: "235px",
                      display: "inline-block",
                      marginRight: "20px",
                    }}
                  >
                    Nombre y apellido
                    <TextField
                      required
                      name="nameAndLastname"
                      autoComplete="nameAndLastname"
                      autoFocus
                 
                      size="small"
                    />
                  </div>
                  <div
                    style={{
                      width: "235px",
                      display: "inline-block",
                    }}
                  >
                    DNI
                    <TextField
                      required
                      name="dni"
                      autoComplete="dni"
                      autoFocus
                    
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
                 
                />{" "}
                <div
                  style={{
                    marginTop: "15px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "235px",
                      marginRight: "20px",
                    }}
                  >
                    Contraseña
                  
                  </div>
                  <div
                    style={{
                      width: "235px",
                    }}
                  >
                    Repetir Contraseña
                   
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
                <div
                  style={{
                    border: "1px solid rgb(240 240 240)",
                  }}
                ></div>
              </Grid>
              <Button
                color="secondary"
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

export default MyAccount;
