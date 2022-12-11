import { FormControl, FormLabel, InputBase, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function FormControlInput({
  label,
  name,
  placeholder,
  control,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { isDirty, error },
        formState,
      }) => (
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            "& .Mui-focused": {
              color: "black !important",
            },
          }}
        >
          <FormLabel
            sx={{
              fontSize: "12px",
              lineHeight: "12px",
              fontFamily: "Poppins",
              fontWeight: "700",
              color: "#B1B5C3",
              mb: "12px",
            }}
            htmlFor={name}
          >
            {label}
          </FormLabel>
          <InputBase
            id={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
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
          <Typography
            sx={{
              mt: "10px",
              fontSize: "12px",
              lineHeight: "16px",
              color: "red",
            }}
          >
            {error}
          </Typography>
        </FormControl>
      )}
    />
  );
}
