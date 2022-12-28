import React, { useEffect, useState } from "react";
import { Box, useTheme, styled } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import useSWR from "swr"
import { SETTING_API, TYPE_PARAMS, PAGES_API } from "apis";
import { transformUrl } from "libs/transformUrl";

type LayoutProps = {
  children: React.ReactNode,
}

const Layout = (props: LayoutProps) => {

  const { data } = useSWR(SETTING_API)
  const { data: listCategory } = useSWR(transformUrl(PAGES_API, {
    type: TYPE_PARAMS["product.ProductCategoryPage"],
    locale: "en",
    fields: "*"
  }))
  const dataCategory = listCategory?.items

  const { children } = props
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
      <Header data={data} dataCategory={dataCategory} />
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
      <Footer data={data} dataCategory={dataCategory} />

      <StyledScrollToTop
        onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none" }}
      >
        <KeyboardArrowUpIcon
          fontSize="large"
          sx={{ color: "white" }}
        />
      </StyledScrollToTop>
    </Box>
  );
};

export default Layout;

const StyledScrollToTop = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: theme.palette.primary.main,
    padding: "4px",
    borderRadius: "14px",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  }
})
