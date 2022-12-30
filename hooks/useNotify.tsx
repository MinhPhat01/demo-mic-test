import { useCallback } from "react";
import { useSnackbar } from "notistack";

export function useNotify() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbarSuccess = useCallback((message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
      anchorOrigin: { horizontal: "right", vertical: "top" },
      autoHideDuration: 1000,
    });
  }, []);

  const snackbarError = useCallback((message: string) => {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: { horizontal: "right", vertical: "top" },
      autoHideDuration: 1000,
    });
  }, []);

  return {
    snackbarSuccess,
    snackbarError,
  };
}
