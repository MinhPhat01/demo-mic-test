import { FormControl, FormLabel, InputBase, Typography } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

type Props = {
  label: string
  name: "name" | "email"
  placeholder: string,
  control: Control<
    {
      name: string; email: string; message: string; phone_number: string;

    },
    any
  >;
}

export default function FormControlInput({
  label,
  name,
  placeholder,
  control,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        return (
          <FormControl
            variant="standard"
            sx={{
              width: "100%",
              mb: "10px",
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
            <InputBase
              autoComplete="off"
              id={name}
              name={name}
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
              {error?.message}
            </Typography>
          </FormControl>
        );
      }}
    />
  );
}
