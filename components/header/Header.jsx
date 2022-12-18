import useSWR from "swr";
import { Box, Container, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import MenuProduct from "./MenuProduct";
import { useCallback, useMemo } from "react";
import { listMenuHeader } from "../../constant";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Search from "../Search";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Header() {
  const router = useRouter();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: "",
    },
  });
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

  const handleSearch = useCallback((values) => {
    router.push(`/products?search=${values.search}`);
  }, []);

  if (!data) return null;
  return (
    <Box
      sx={{
        px: "0px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: "999",
        boxShadow: 3,
      }}
    >
      <Container sx={{ mb: "18px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: "24px",
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
            <Box component="form" onSubmit={handleSubmit(handleSearch)}>
              <Search control={control} name={"search"} />
            </Box>

            <ChangeLanguage />
          </Stack>
        </Box>
        <HeaderMobile />
      </Container>
    </Box>
  );
}
