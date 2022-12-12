import { Box, Button, Grid, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import FormControlInput from "../../../components/input/FormControlInput";
import FormControlPhoneNumber from "../../../components/input/FormControlPhoneNumber";
import FormControlTextarea from "../../../components/input/FormControlTextarea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  messageText: yup.string().required("Please enter a message"),
  phone: yup.string().required(),
});

export default function Form() {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    console.log("🚀 ~ file: Form.jsx:24 ~ handleSubmitForm ~ values", values);
    reset({});
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControlInput
        control={control}
        label="NAME"
        name="name"
        placeholder="Phat"
        error={errors.name?.message}
      />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <FormControlPhoneNumber
            control={control}
            label={"PHONE"}
            name={"phone"}
            placeholder="093292975"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlInput
            control={control}
            label="EMAIL"
            name="email"
            placeholder="phat@gmail.com"
            error={errors.email?.message}
          />
        </Grid>
      </Grid>
      <FormControlTextarea
        control={control}
        label="MESSAGE"
        name="messageText"
        placeholder="I need some help..."
        error={errors.messageText?.message}
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
