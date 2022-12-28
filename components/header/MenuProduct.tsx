import { useMemo } from "react";
import Link from "next/link";
import { Box, MenuItem, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePopupState } from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { bindHover, bindPopover } from "material-ui-popup-state";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";

type MenuProductProps = {
  href: string,
  dataCategory: PRODUCT_CATEGORIES_ITEMS []
}

export default function MenuProduct({ href, dataCategory }: MenuProductProps) {

  const popupState = usePopupState({ variant: "popover", popupId: "productList" });
  const renderList = useMemo(() => {
    if (dataCategory == undefined) return;
    return dataCategory.map((item) => {
      return (
        <Link key={item.id} href={`/products?child_of=${item.id}`}>
          <MenuItem
            sx={{
              color: "#B1B5C3",
              fontSize: "12px",
              lineHeight: "20px",
            }}
          >
            {item.title}
          </MenuItem>
        </Link>
      );
    });
  }, [dataCategory]);

  return (
    <Box
      {...bindHover(popupState)}
      sx={{
        pb: "10px",
      }}
    >
      <Link href={href}>
        <StyledWrapperMenuProduct>
          <Typography variant="h1">
            Product
          </Typography>
          <KeyboardArrowDownIcon fontSize="inherit" />
        </StyledWrapperMenuProduct>
      </Link>
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
        disableScrollLock={true}
      >
        {renderList}
      </HoverPopover>
    </Box>
  );
}

const StyledWrapperMenuProduct = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
    "& .MuiSvgIcon-root": {
      marginTop: "2px"
    }
  }
})