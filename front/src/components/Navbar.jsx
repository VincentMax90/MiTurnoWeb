import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user"

const Navbar = () => {

  const dispatch = useDispatch();

  const [off, setOff] = useState(false); 
  function on() {
    setOff(true);
  }


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
      {!off ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "36px",
            alignItems: "center",
            backgroundColor: "rgb(240 240 240)",
          }}
        >
          <div style={{ marginLeft: "40%" }}>Mensaje promocional</div>
          <div style={{ marginLeft: "auto" }} onClick={ on}><CloseIcon /></div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;