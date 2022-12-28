import { Container, Typography, useTheme } from "@mui/material";


export default function Custom404() {
    const theme = useTheme()
    return <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "40px", color: theme.palette.primary.main }}>
            404-Page Not Found
        </Typography>
    </Container>
}