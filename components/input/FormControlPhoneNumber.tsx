import { FormControl, FormLabel, InputProps, Typography } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import Input from "react-phone-number-input/input";
import CustomInput from "./CustomInput";

type Props = {
  label: string
  name: "phone_number"
  placeholder: string,
  control: Control<
    {
      name: string; email: string; message: string; phone_number: string;
    },
    any
  >;
}

type InputPropsWithoutValueAndOnChange = Omit<
  InputProps,
  "value" | "onChange" | "inputComponent"
>;

export default function FormControlPhoneNumber({
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
          <Input
            defaultCountry="VN"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            inputComponent={CustomInput as (props: InputPropsWithoutValueAndOnChange) => JSX.Element}
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
