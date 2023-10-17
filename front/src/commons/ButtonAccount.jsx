import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const ButtonAccount = () => {
  return (
    <>
      <Button
        color="secondary"
        to={"/myaccount"}
        component={Link}
        style={{
          marginTop: "15px",
          fontWeight: "bold",
          fontSize: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Mi cuenta <PersonOutlineIcon />
      </Button>
    </>
  );
};

export default ButtonAccount;
