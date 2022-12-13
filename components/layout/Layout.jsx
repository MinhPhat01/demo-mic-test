import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ flex: 1 }}>{children}</Box>

      <Footer />
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
        ></KeyboardArrowUpIcon>
      </Box>
    </Box>
  );
};

export default Layout;
