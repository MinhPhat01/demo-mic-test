import { useCallback } from "react";
import { Box, Button, Grid, useTheme, styled } from "@mui/material";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { useNotify } from "hooks/useNotify";
import FormControlInput from "components/input/FormControlInput";
import FormControlPhoneNumber from "components/input/FormControlPhoneNumber";
import FormControlTextarea from "components/input/FormControlTextarea";

type SubmitValues = {
  name: string,
  email: string,
  message: string,
  phone_number: string
}

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  message: yup.string().required("Please enter a message"),
  phone_number: yup.string().test({
    test(value, ctx) {
      if (!isPossiblePhoneNumber(String(value))) {
        return ctx.createError({ message: "Phone Number is not valid" });
      }
      return true;
    },
  }),
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

  const onSubmit = useCallback(async (values: SubmitValues) => {
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
    } catch (error: any) {
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
      <StyledWrapButton>
        <StyledButton
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disableRipple={true}
          disableFocusRipple={true}
        >
          Submit
        </StyledButton>
      </StyledWrapButton>
    </Box>
  );
}

const StyledWrapButton = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }
})

const StyledButton = styled(Button)(() => {
  return {
    fontSize: "16px",
    lineHeight: "16px",
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
  }
})
