import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useForm } from "react-hook-form";
import Search from "components/Search";
import MenuMobile from "./MenuMobile";

type ValuesSubmit = {
  search: string,
};

export default function HeaderMobile() {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const [show, setShow] = useState<boolean>(true);
  const theme = useTheme();
  const handleSearch = useCallback((values: ValuesSubmit) => {
    router.push(`/products?search=${values.search}`);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Box onClick={() => setShow(!show)}>
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
