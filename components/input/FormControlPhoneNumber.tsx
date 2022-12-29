import React from "react";
import { FormControl, FormLabel, InputProps, Typography, styled } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import Input from "react-phone-number-input/input";
import CustomInput from "./CustomInput";

type FormControlPhoneNumberProps = {
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
}: FormControlPhoneNumberProps) {
  return (
    <Controller
      control={control}
      name={name}

      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <StyledFormControl variant="standard">
          <StyledFormLabel htmlFor={name}>
            {label}
          </StyledFormLabel>
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
        </StyledFormControl>
      )}
    />
  );
}

const StyledFormControl = styled(FormControl)(() => {
  return {
    width: "100%",
    marginBottom: "10px",
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
