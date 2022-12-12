import Typography from "@mui/material/Typography";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import { Box, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MenuProduct() {
  return (
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
            {...bindPopover(popupState)}
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
  );
}
