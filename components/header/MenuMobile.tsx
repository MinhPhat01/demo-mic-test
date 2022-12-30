import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme, styled } from "@mui/material";

import ChangeLanguage from "components/changeLanguage/ChangeLanguage";

const listMenu = [
  { id: 1, name: "home", src: "/" },
  { id: 2, name: "about", src: "/about" },
  { id: 3, name: "products", src: "/products" },
  { id: 4, name: "news", src: "/news" },
  { id: 5, name: "gallery", src: "/gallery" },
  { id: 6, name: "contact", src: "/contact" },
];

type MenuMobileProps = {
  setShow: (b: boolean) => void;
  show: boolean;
};

const MenuMobile = ({ setShow, show }: MenuMobileProps) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => () => {
    setSelectedIndex(index);
    setShow(!show);
  };

  const renderListMenu = useMemo(() => {
    return (
      listMenu.length > 0 &&
      listMenu.map((item, index) => {
        return (
          <Link href={`${item.src}`} key={item.id}>
            <StyledMenuItem
              onClick={handleClick(index)}
              sx={{
                color: selectedIndex === index ? "#00A859" : "#141416",
                borderLeft: selectedIndex === index ? "2px solid #00A859" : "",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: "-20px",
                },
              }}
            >
              {item.name}
            </StyledMenuItem>
          </Link>
        );
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listMenu]);

  return (
    <StyledWrapperMenu>
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
      <Box sx={{ mt: "88px" }}>{renderListMenu}</Box>
      <ChangeLanguage />
    </StyledWrapperMenu>
  );
};

export default MenuMobile;

const StyledMenuItem = styled(Box)(() => {
  return {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "700",
    padding: "10px 0px 10px 20px",
    textTransform: "capitalize",
    marginLeft: "-20px",
  };
});

const StyledWrapperMenu = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: 999,
    height: "100%",
    backgroundColor: "white",
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  };
});
