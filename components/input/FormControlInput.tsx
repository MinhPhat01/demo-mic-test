import React from "react";
import { FormControl, FormLabel, InputBase, Typography, styled } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type FormControlInputProps = {
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
}: FormControlInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        return (
          <StyledFormControl variant="standard">
            <StyledFormLabel htmlFor={name}>
              {label}
            </StyledFormLabel>
            <StyledInputBase
              autoComplete="off"
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            ></StyledInputBase>
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
          </StyledFormControl >
        );
      }}
    />
  );
}

const StyledFormControl = styled(FormControl)(() => {
  return {
    width: "100%",
    marginBottom: "10px",
    "& .Mui-focused": {
      color: "#00a859 !important",
    },
  }
})

const StyledFormLabel = styled(FormLabel)(() => {
  return {
    fontSize: "12px",
    lineHeight: "12px",
    fontWeight: "700",
    color: "#23262f",
    marginBottom: "12px",
  }
})

const StyledInputBase = styled(InputBase)(() => {
  return {
    border: "2px solid #E6E8EC",
    borderRadius: "12px",
    "& .MuiInputBase-input": {
      padding: "12px 16px",
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "500",
      color: "#777E91",
    }
  }
})