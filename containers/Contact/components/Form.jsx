import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormControlInput from "../../../components/input/FormControlInput";
import FormControlTextarea from "../../../components/input/FormControlTextarea";

export default function Form() {
  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const [value, setValue] = useState();

  const handleSubmitForm = (values) => {
    console.log("🚀 ~ file: Form.jsx:20 ~ handleSubmitForm ~ values", values);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControlInput
        control={control}
        label="NAME"
        name="name"
        placeholder="Phat"
      />
      <Grid container spacing={4}>
        <Grid item md={6}>
          <FormControlInput
            control={control}
            label="NAME"
            name="name"
            placeholder="Phat"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlInput
            control={control}
            label="EMAIL"
            name="email"
            placeholder="phat@gmail.com"
          />
        </Grid>
      </Grid>
      <FormControlTextarea
        control={control}
        label="MESSAGE"
        name="message"
        placeholder="I need some help..."
      />
    </Box>
  );
}
