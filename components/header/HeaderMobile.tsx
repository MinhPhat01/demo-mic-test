import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useForm } from "react-hook-form";
import Search from "components/Search";
import MenuMobile from "./MenuMobile";
import { useShow } from "hooks/useShow";

type ValuesSubmit = {
  search: string,
};

export default function HeaderMobile() {
  const theme = useTheme();
  const router = useRouter();

  const { show, setShow, handleShow } = useShow()

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const handleSearch = useCallback((values: ValuesSubmit) => {
    router.push(`/products?search=${values.search}`);
    reset();
  }, [router]);

  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
        pt: "20px",
        cursor: "pointer"
      }}
    >
      {show ? (
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              px: "20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={63} height={44} />
            </Link>
            <Box onClick={handleShow}>
              <MenuIcon />
            </Box>
          </Box>
          <Box component="form" onSubmit={handleSubmit(handleSearch)}>
            <Search control={control} name={"search"} />
          </Box>
        </Box>
      ) : (
        <MenuMobile setShow={setShow} show={show}></MenuMobile>
      )}
    </Box>
  );
}
