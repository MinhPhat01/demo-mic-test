import useSWR from "swr";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Search from "../search/Search";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import MenuProduct from "./MenuProduct";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Header() {
  const theme = useTheme();
  const { data } = useSWR("https://mic.t-solution.vn/api/v2", fetcher);
  if (!data) return null;

  return (
    <Container maxWidth="lg" sx={{ px: "0px", mb: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "24px",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Box>
          <Link href="/">
            <Image src={data.logo} alt="logo" width={115} height={80} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            cursor: "pointer",
          }}
        >
          <Link href="/">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              About
            </Typography>
          </Link>
          <Link href="/products">
            <MenuProduct />
          </Link>
          <Link href="/news">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              News
            </Typography>
          </Link>
          <Link href="/gallery">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Gallery
            </Typography>
          </Link>
          <Link href="/contact">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Contact
            </Typography>
          </Link>
        </Box>

        <Stack spacing="24px" direction="row" alignItems="center">
          <Search />
          <ChangeLanguage />
        </Stack>
      </Box>
      <HeaderMobile />
    </Container>
  );
}
