import { InputBase } from "@mui/material";
import React, { forwardRef } from "react";

const InputBaseCustom = (props, ref) => {
  return (
    <InputBase
      autoComplete="off"
      inputRef={ref}
      {...props}
      sx={{
        border: "2px solid #E6E8EC",
        borderRadius: "12px",
        "& .MuiInputBase-input": {
          px: "16px",
          py: "12px",
          fontSize: "14px",
          lineHeight: "24px",
          fontFamily: "Poppins",
          fontWeight: "500",
          color: "#777E91",
        },
      }}
    ></InputBase>
  );
};

export default forwardRef(InputBaseCustom);
