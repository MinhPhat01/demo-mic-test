import React from "react";
import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const color = {
    primary: {
        primary1: "#00A859"
    }
}

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: color.primary.primary1
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontWeight: 700,
            color: "#141416",
            fontSize: "14px",
            lineHeight: "16px",
        },
        h2: {
            fontWeight: "500",
            color: "#23262f",
            fontSize: "16px",
            lineHeight: "24px"

        },
        h3: {
            fontWeight: 400,
            color: "#fcfcfd",
            fontSize: "14px",
            lineHeight: "16px",
        }
    },
});

const theme = createTheme({
    ...defaultTheme,
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    "& .MuiTabs-scroller": {
                        overflowX: "scroll !important",
                    },
                    "& .MuiTabs-scroller::-webkit-scrollbar": {
                        display: "none",
                    },
                }
            }
        },
    },
})

export default function ComponentThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}

