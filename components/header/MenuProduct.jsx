import Typography from "@mui/material/Typography";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import { Box, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import useSWR from "swr";
import { useMemo } from "react";
import { useParams } from "../../hooks/useParams";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MenuProduct({ href }) {
  const { data } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductCategoryPage&locale=en",
    fetcher
  );

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
              fontFamily: "Poppins",
            }}
          >
            {item.title}
          </MenuItem>
        </Link>
      );
    });
  }, [categoryList]);
  if (!data) return null;
  return (
    <PopupState variant="popover" popupId="productList">
      {(popupState) => (
        <Box {...bindHover(popupState)} sx={{ pb: "10px" }}>
          <Link href={href}>
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
          >
            {renderList}
          </HoverPopover>
        </Box>
      )}
    </PopupState>
  );
}
