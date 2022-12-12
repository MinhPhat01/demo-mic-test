import {
  Box,
  Container,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Search from "../search/Search";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ px: "0px", mb: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "24px",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Box>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={115} height={80} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            cursor: "pointer",
          }}
        >
          <Link href="/">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              About
            </Typography>
          </Link>
          <Link href="/products">
            <PopupState variant="popover" popupId="productList">
              {(popupState) => (
                <Box {...bindHover(popupState)} sx={{ pb: "10px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 700,
                        color: "#141416",
                        fontSize: "14px",
                        lineHeight: "16px",
                      }}
                    >
                      Product
                    </Typography>
                    <KeyboardArrowDownIcon fontSize="sm"></KeyboardArrowDownIcon>
                  </Box>
                  <HoverPopover
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#fcfcfd",
                        padding: "16px 0",
                      },
                    }}
                    {...bindMenu(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem
                      onClick={popupState.close}
                      sx={{
                        color: "#B1B5C3",
                        fontSize: "12px",
                        lineHeight: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Chalkboard Chalk
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      sx={{
                        color: "#B1B5C3",
                        fontSize: "12px",
                        lineHeight: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      School Supplies and Student Tools
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      sx={{
                        color: "#B1B5C3",
                        fontSize: "12px",
                        lineHeight: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Office Supplies
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      sx={{
                        color: "#B1B5C3",
                        fontSize: "12px",
                        lineHeight: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Art Supplies
                    </MenuItem>
                  </HoverPopover>
                </Box>
              )}
            </PopupState>
          </Link>
          <Link href="/news">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              News
            </Typography>
          </Link>
          <Link href="/gallery">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Gallery
            </Typography>
          </Link>
          <Link href="/contact">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#141416",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              Contact
            </Typography>
          </Link>
        </Box>

        <Stack spacing="24px" direction="row" alignItems="center">
          <Search />
          <ChangeLanguage />
        </Stack>
      </Box>
      <HeaderMobile />
    </Container>
  );
};

export default Header;
