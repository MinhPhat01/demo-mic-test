import { FormControl, FormLabel, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
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
      // rules={{
      //   validate: (value) => isPossiblePhoneNumber(String(value)),
      // }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            "& .Mui-focused": {
              color: "#00a859 !important",
            },
          }}
        >
          <FormLabel
            sx={{
              fontSize: "12px",
              lineHeight: "12px",
              fontFamily: "Poppins",
              fontWeight: "700",
              color: "#23262f",
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
            {error?.message}
          </Typography>
        </FormControl>
      )}
    />
  );
}
