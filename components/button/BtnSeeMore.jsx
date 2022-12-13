import { Button } from "@mui/material";
import React from "react";

export default function BtnSeeMore({ children, onClick, disable }) {
  return (
    <Button
      disabled={disable}
      onClick={onClick}
      disableRipple={true}
      variant="contained"
      sx={{
        padding: "16px 24px",
        background: "#00A859 !important",
        borderRadius: "90px",
        color: "#FCFCFD",
        fontSize: "16px",
        lineHeight: "16px",
        fontFamily: "Lato",
        fontWeight: "700",
        mt: "40px",
        position: "relative",
        left: "50%",
        transform: "translate(-50%,0)",
      }}
    >
      {children}
    </Button>
  );
}
