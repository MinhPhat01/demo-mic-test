import { FormControl, FormLabel, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import Input from "react-phone-number-input/input";
import InputBaseCustom from "./InputBaseCustom";

export default function FormControlPhoneNumber({
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
          <Input
            defaultCountry="VN"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            inputComponent={InputBaseCustom}
          />
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
