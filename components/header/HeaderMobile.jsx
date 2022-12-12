import { Box, Link, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../search/Search";
import MenuMobile from "./MenuMobile";

export default function HeaderMobile() {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
        pt: "20px",
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
          <Search />
        </Box>
      ) : (
        <MenuMobile setShow={setShow} show={show}></MenuMobile>
      )}
    </Box>
  );
}
