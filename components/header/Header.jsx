import useSWR from "swr";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Search from "../search/Search";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import MenuProduct from "./MenuProduct";
import { useMemo } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const listMenuHeader = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    href: "/products",
    component: true,
  },
  {
    id: 4,
    name: "News",
    href: "/news",
  },
  {
    id: 5,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const theme = useTheme();
  const { data } = useSWR("https://mic.t-solution.vn/api/v2", fetcher);

  const renderList = useMemo(() => {
    return listMenuHeader.map((item) => {
      return (
        <Box
          key={item.id}
          sx={{
            fontFamily: "Lato",
            fontWeight: 700,
            color: "#141416",
            fontSize: "14px",
            lineHeight: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              columnGap: "2px",
            }}
          >
            <Link key={item.id} href={item.href}>
              {item.name}
            </Link>
            {item.component ? <MenuProduct href={item.href}></MenuProduct> : ""}
          </Box>
        </Box>
      );
    });
  }, []);

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
          {renderList}
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
