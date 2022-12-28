import { useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import MenuProduct from "./MenuProduct";
import Search from "components/Search";
import HeaderMobile from "./HeaderMobile";
import ChangeLanguage from "components/changeLanguage/ChangeLanguage";
import { listMenuHeader } from "constant";

type ValuesSubmit = {
  search: string
}

export interface I_DataCategory {
  meta?: {
    total_count?: number;
    [key: string]: any;
  }
  next?: string | null;
  previous?: string | null;
  items?: [];
}

export default function Header({ initData }: { initData: any }) {

  const data: HOME_PAGE_COMMON = Object.values(initData || {} || undefined)[0]
  const dataCategory: I_DataCategory = Object.values(initData || {} || undefined)[1]

  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const renderList = useMemo(() => {
    return listMenuHeader.map((item) => {
      return (
        <Box
          key={item.id}
        >
          <Link key={item.id} href={item.href}>
            <Typography variant="h1">
              {item.name}
            </Typography>
          </Link>
          {item.component ? <MenuProduct dataCategory={dataCategory?.items} href={item.href} /> : ""}
        </Box >
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listMenuHeader]);

  const handleSearch = useCallback((values: ValuesSubmit) => {
    router.push(`/products?search=${values.search}`);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  if (dataCategory.items === undefined) return;
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
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
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


