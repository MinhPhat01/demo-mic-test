import React from "react";
import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default function ComponentThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}

