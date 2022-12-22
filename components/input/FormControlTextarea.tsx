import {
  FormControl,
  FormLabel,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

type Props = {
  label: string
  name: "message"
  placeholder: string,
  control: Control<
    {
      name: string; email: string; message: string; phone_number: string;

    },
    any
  >;
}

export default function FormControlTextarea({
  label,
  name,
  placeholder,
  control,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl
          variant="standard"
          sx={{
            mt: "10px",
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
            multiline={true}
            minRows={11}
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
      )}
    />
  );
}
