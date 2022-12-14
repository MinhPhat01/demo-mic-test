import { Box, Button, Grid, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import FormControlInput from "../../../components/input/FormControlInput";
import FormControlPhoneNumber from "../../../components/input/FormControlPhoneNumber";
import FormControlTextarea from "../../../components/input/FormControlTextarea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import axios from "axios";
import { useCallback } from "react";
import { useNotify } from "../../../hooks/useNotify";

const schema = yup.object({
  // name: yup.string().required("Please enter your name"),
  // email: yup
  //   .string()
  //   .email("Please enter valid email address")
  //   .required("Please enter your email address"),
  // message: yup.string().required("Please enter a message"),
  // phone_number: yup.string().test({
  //   test(value, ctx) {
  //     if (!isPossiblePhoneNumber(String(value))) {
  //       return ctx.createError({ message: "Phone Number is not valid" });
  //     }
  //     return true;
  //   },
  // }),
});

export default function Form() {
  const theme = useTheme();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone_number: "",
    },
  });
  const { snackbarSuccess, snackbarError } = useNotify();

  const onSubmit = useCallback(async (values) => {
    try {
      const headers = {
        Authorization: process.env.NEXT_PUBLIC_API_KEY,
      };
      await axios.post(
        "https://mic.t-solution.vn/api/v2/submissions/",
        values,
        {
          headers,
        }
      );
      snackbarSuccess("Submit form successfully");
      reset();
    } catch (error) {
      snackbarError(error.response.data.message);
    }
  }, []);
  return (
    <Box component="form">
      <FormControlInput
        control={control}
        label="NAME"
        name="name"
        placeholder="Phat"
      />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <FormControlPhoneNumber
            control={control}
            label={"PHONE"}
            name={"phone_number"}
            placeholder="093292975"
          />
        </Grid>
        <Grid item xs={6}>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          mt: "20px",
          "& .MuiButtonBase-root": {
            backgroundColor: "white !important",
          },
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
          },
        }}
      >
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disableRipple={true}
          disableFocusRipple={true}
          sx={{
            fontSize: "16px",
            lineHeight: "16px",
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "#00A859",
            padding: "16px 24px",
            border: "1px solid #00A859",
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "white !important",
            "&:hover": {
              backgroundColor: "#00A859 !important",
              color: "white",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
