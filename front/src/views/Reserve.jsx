import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios, { Axios } from "axios";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSelector } from "react-redux";
import "./Reserve.css";

const Reserve = () => {
  const [location, setLocation] = useState("");
  const [selecLocation, setSelectLocation] = useState(null);
  const [day, setDay] = useState(null);
  const [horario, setHorario] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [email, setEmail] = useState(null);
  const user = useSelector((state) => state.user);

  const horarioLocal = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];
  const search = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/location/allSearch"
      );
      const data = response.data;

      setLocation(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (newDate) => {
    setDay(newDate.$d);
  };

  const handleSubmit = () => {
    const date = location.find((location) => location.name === selecLocation);

    const userID = user.id;

    axios
      .post("http://localhost:3001/api/appoiment/create", {
        id_user: userID,
        name: nombre,
        date: day,
        hour: horario,
        location: selecLocation,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Reserva creada");
        } else {
          alert("Error al crear reserva");
        }
      })
      .catch((error) => {
        console.error("Error al crear reserva:", error);
        alert("Error al crear reserva");
      });
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="body">
        {" "}
        <div> hacer una reserva</div>
        <div style={{ margin: "30px 0 0 95px", display: "flex" }}>
          <div className="box-form">
            {" "}
            reserva <br></br>selecciona tu sucursal
            <div className="box-pasos">
              <div className="box-small-size">
                {" "}
                {selecLocation === null ? (
                  <div className="box-violet">1</div>
                ) : (
                  <div className="box-green">✔️</div>
                )}
                Elige sucursal
              </div>
              <div className="box-small-size">
                {selecLocation === null ? (
                  <div className="box-grey">2</div>
                ) : day === null ? (
                  <div className="box-violet">2</div>
                ) : (
                  <div className="box-green">✔️</div>
                )}
                Selecciona el dia
              </div>
              <div className="box-small-size">
                {day === null ? (
                  <div className="box-grey">3</div>
                ) : horario === null ||
                  nombre === null ||
                  email === null ||
                  telefono === null ? (
                  <div className="box-violet">3</div>
                ) : (
                  <div className="box-green">✔️</div>
                )}
                Completa el formulario
              </div>
            </div>
            <div>
              Sucursal
              <TextField
                id="location"
                select
                fullWidth
                size="small"
                onChange={(e) => setSelectLocation(e.target.value)}
              >
                {Array.isArray(location) &&
                  location.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
              </TextField>
            </div>
            {day === null ? (
              <></>
            ) : (
              <>
                <div>
                  Horario
                  <TextField
                    id="horario"
                    select
                    fullWidth
                    size="small"
                    onChange={(e) => setHorario(e.target.value)}
                  >
                    {horarioLocal.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="name">
                  Nombre y Apellido{" "}
                  <TextField
                    fullWidth
                    required
                    name="name"
                    size="small"
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="phone">
                  Telefono
                  <TextField
                    fullWidth
                    required
                    name="phone"
                    autoFocus
                    size="small"
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
                <div>
                  Mail
                  <TextField
                    id="location"
                    text
                    fullWidth
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                </div>{" "}
              </>
            )}
            {horario === null ||
            nombre === null ||
            email === null ||
            telefono === null ? (
              <Button
                disabled
                variant="contained"
                style={{
                  backgroundColor: "grey",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Confirmar reserva
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{
                  backgroundColor: "rgb(165 105 189 )",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Confirmar reserva
              </Button>
            )}
          </div>
          <div className="box-calendar">
            <div style={{ marginTop: "45px" }}>
              {selecLocation === null ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar disabled />
                </LocalizationProvider>
              ) : (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar onChange={handleDateChange} />
                </LocalizationProvider>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
