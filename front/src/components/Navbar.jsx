import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {

  

  const [off, setOff] = useState(false); 
  function on() {
    setOff(true);
  }



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