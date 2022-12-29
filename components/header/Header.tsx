import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Stack, styled, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import MenuProduct from "./MenuProduct";
import Image from "components/Image";
import HeaderMobile from "./HeaderMobile";
import Search from "components/Search";
import ChangeLanguage from "components/changeLanguage/ChangeLanguage";
import { boxShadow, listMenuHeader } from "constant";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product"

type ValuesSubmit = {
  search: string
}

type HeaderProps = {
  data: HOME_PAGE_COMMON
  dataCategory: PRODUCT_CATEGORIES_ITEMS[]
}

export default function Header({ data, dataCategory }: HeaderProps) {
  const theme = useTheme()
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const renderList = useMemo(() => {
    return listMenuHeader.map((item) => {
      return (
        <Box key={item.id}>
          <Link href={item.href}>
            <Typography variant="h1" sx={{
              "&:hover": {
                color: theme.palette.primary.main
              }
            }}>
              {item.name}
            </Typography>
          </Link>
          {item.component ? <MenuProduct dataCategory={dataCategory} href={item.href} /> : ""}
        </Box>
      );
    });
  }, [listMenuHeader]);

  const handleSearch = useCallback((values: ValuesSubmit) => {
    router.push(`/products?search=${values.search}`);
    reset();
  }, [router]);

  if (!data) return;
  return (
    <StyledWrapperHeader>
      <Container sx={{ mb: "18px" }}>
        <StyledWrapperHeaderChild>
          <Box>
            <Link href="/">
              <Image src={data.logo} alt="logo" width={115} height={80} style={{ objectFit: "contain" }} />
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
              <Search control={control} name="search" />
            </Box>
            <ChangeLanguage />
          </Stack>
        </StyledWrapperHeaderChild>
        <HeaderMobile />
      </Container>
    </StyledWrapperHeader>
  );
}


const StyledWrapperHeader = styled(Box)(() => {
  return {
    padding: "0",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: "999",
    boxShadow: boxShadow.boxShadow3
  }
})
const StyledWrapperHeaderChild = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "24px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },

  }
})


