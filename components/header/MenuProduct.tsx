import { useMemo } from "react";
import Link from "next/link";
import { Box, MenuItem, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePopupState } from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { bindHover, bindPopover } from "material-ui-popup-state";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";

type MenuProductProps = {
  href: string,
  dataCategory: PRODUCT_CATEGORIES_ITEMS[]
}

export default function MenuProduct({ href, dataCategory }: MenuProductProps) {
  const popupState = usePopupState({ variant: "popover", popupId: "productList" });

  const renderList = useMemo(() => {
    if (dataCategory == undefined) return;
    return dataCategory.map((item) => {
      return (
        <Link key={item.id} href={`/products?child_of=${item.id}`}>
          <StyledMenuItem>
            {item.title}
          </StyledMenuItem>
        </Link>
      );
    });
  }, [dataCategory]);

  return (
    <Box {...bindHover(popupState)} sx={{ pb: "10px" }}>
      <Link href={href} style={{}}>
        <StyledWrapperMenuProduct sx={{ color: popupState.isOpen ? "#00A859" : "#141416" }}>
          Product
          <KeyboardArrowDownIcon fontSize="inherit" />
        </StyledWrapperMenuProduct>
      </Link>
      <HoverPopover
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

const StyledWrapperMenuProduct = styled(Box)(({ theme }) => {
  return {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
    "& .MuiSvgIcon-root": {
      marginTop: "2px"
    },
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
})

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  return {
    color: "#B1B5C3",
    fontSize: "12px",
    lineHeight: "20px",
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
})