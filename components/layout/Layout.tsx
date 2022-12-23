import { Box, useTheme } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Header from "components/header/Header";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";

type Props = {
  children: React.ReactNode,
  initData: HOME_PAGE_COMMON
}

const Layout = (props: Props) => {
  const { children, initData } = props
  const [visible, setVisible] = useState<boolean>(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
      <Header initData={initData} />
      <Box
        sx={{
          flex: 1,
          mt: "128px",
          [theme.breakpoints.down("md")]: {
            mt: "152px",
          },
        }}
      >
        {children}
      </Box>
      <Footer initData={initData} />
      <Box
        onClick={scrollToTop}
        style={{ display: visible ? "block" : "none" }}
        sx={{
          cursor: "pointer",
          boxShadow: 3,
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#00A859",
          padding: "4px",
          borderRadius: "14px",
        }}
      >
        <KeyboardArrowUpIcon
          fontSize="large"
          sx={{ color: "white" }}
        />
      </Box>
    </Box>
  );
};

export default Layout;
