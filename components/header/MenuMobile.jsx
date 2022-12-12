import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";

const listMenu = [
  { id: 1, name: "home", src: "/" },
  { id: 2, name: "about", src: "/about" },
  { id: 3, name: "products", src: "/products" },
  { id: 4, name: "news", src: "/news" },
  { id: 5, name: "gallery", src: "/gallery" },
  { id: 6, name: "contact", src: "/contact" },
];

const MenuMobile = ({ setShow, show }) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => () => {
    setSelectedIndex(index);
    setShow(!show);
  };

  return (
    <Box
      sx={{
        background: "red",
        position: "fixed",
        inset: 0,
        zIndex: 999,
        height: "100%",
        backgroundColor: "white",
        padding: "20px",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={63} height={44} />
        </Link>
        <Box onClick={() => setShow(!show)}>
          <CloseIcon />
        </Box>
      </Box>
      <Box sx={{ mt: "88px" }}>
        {listMenu.length > 0 &&
          listMenu.map((item, index) => {
            return (
              <Link href={`${item.src}`} key={item.id}>
                <Box
                  onClick={handleClick(index)}
                  sx={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    fontFamily: "Lato",
                    fontWeight: "700",
                    pl: "20px",
                    py: "10px",
                    textTransform: "capitalize",
                    color: selectedIndex === index ? "#00A859" : "#141416",
                    borderLeft:
                      selectedIndex === index ? "2px solid #00A859" : "",
                    marginLeft: "-24px",
                    [theme.breakpoints.down("sm")]: {
                      marginLeft: "-20px",
                    },
                  }}
                >
                  {item.name}
                </Box>
              </Link>
            );
          })}
      </Box>
      <ChangeLanguage />
    </Box>
  );
};

export default MenuMobile;
