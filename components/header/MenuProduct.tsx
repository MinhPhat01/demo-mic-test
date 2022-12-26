import { useMemo } from "react";
import Link from "next/link";
import { Box, MenuItem, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useSWR from "swr";
import { usePopupState } from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { bindHover, bindPopover } from "material-ui-popup-state";
import { transformUrl } from "libs/transformUrl";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";
import { responseSchema } from "interface";

export default function MenuProduct({ href }) {
  const { data } = useSWR<responseSchema<PRODUCT_CATEGORIES_ITEMS>>(
    transformUrl(PAGES_API, {
      locale: "en",
      fields: "*",
      type: TYPE_PARAMS["product.ProductCategoryPage"],
    })
  );
  const popupState = usePopupState({ variant: "popover", popupId: "productList" });
  const categoryList = data?.items;

  const renderList = useMemo(() => {
    if (!categoryList) return null;
    return categoryList.map((item) => {
      return (
        <Link key={item.id} href={`/products?child_of=${item.id}`}>
          <MenuItem
            sx={{
              color: "#B1B5C3",
              fontSize: "12px",
              lineHeight: "20px",
            }}
            onClick={popupState.close}
          >
            {item.title}
          </MenuItem>
        </Link>
      );
    });
  }, [categoryList]);
  if (!data) return null;
  return (
    <Box
      {...bindHover(popupState)}
      sx={{
        pb: "10px",
      }}
    >
      <Link href={href}>
        <StyledWrapperMenuProduct>
          <StyledText>
            Product
          </StyledText>
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

const StyledText = styled(Typography)(() => {
  return {
    fontWeight: 700,
    color: "#141416",
    fontSize: "14px",
    lineHeight: "16px",
  }
})

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