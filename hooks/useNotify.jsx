import { useSnackbar } from "notistack";
import { useCallback } from "react";

export function useNotify() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbarSuccess = useCallback(
    (message) => () => {
      enqueueSnackbar(message, {
        variant: "success",
      });
    },
    []
  );

  // const snackbarSuccess = (message) => () => {
  //   enqueueSnackbar(message, {
  //     variant: "success",
  //   });
  // };

  return {
    snackbarSuccess,
  };
}
