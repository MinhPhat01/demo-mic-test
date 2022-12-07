import { Box, Container, MenuItem, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Search from "../search/Search";
import Image from "next/image";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";

const Header = () => {
  return (
    <Container maxWidth="lg" sx={{ px: "0px" }}>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "space-between",
          py: "24px",
        }}
      >
        <Image src="/logo.png" alt="logo" width={115} height={80} />
        <Box sx={{ display: "flex", gap: "24px", cursor: "pointer" }}>
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
          <PopupState variant="popover" popupId="demoPopover">
            {(popupState) => (
              <Box>
                <Typography
                  {...bindHover(popupState)}
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    color: "#141416",
                    fontSize: "14px",
                    lineHeight: "16px",
                    pb: "10px",
                  }}
                >
                  Product
                  <KeyboardArrowDownIcon fontSize="sm"></KeyboardArrowDownIcon>
                </Typography>
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
        </Box>
        <Stack spacing="24px" direction="row" alignItems="center">
          <Search />
          <ChangeLanguage />
        </Stack>
      </Box>
    </Container>
  );
};

export default Header;
