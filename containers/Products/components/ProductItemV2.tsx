import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";

type ProductItemV2Props = {
  pieces: string,
  imgSrc: string,
  title: string
}

export default function ProductItemV2({ pieces, imgSrc, title }: ProductItemV2Props) {
  const [ref, { width }] = useMeasure();
  return (
    <Box
      sx={{
        cursor: "pointer",
        mx: "20px",
      }}
    >
      <Box ref={ref} sx={{ height: width, borderRadius: "4px" }}>
        <Image
          src={imgSrc}
          alt={"bgEmpty"}
          width={width}
          height={width}
          style={{ objectFit: "cover", height: width, borderRadius: "4px" }}
        ></Image>
      </Box>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledPieces>
        {pieces || "pieces"}
      </StyledPieces>
    </Box>
  );
}

const StyledTitle = styled(Typography)(() => {
  return {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#23262F",
    margin: "16px 0",
    display: "-webkit-box",
    overflow: "hidden",
    minHeight: "48px",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  }
})

const StyledPieces = styled(Box)(() => {
  return {
    padding: "6px 8px",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#00A859",
    border: "2px solid #00A859",
    borderRadius: "4px",
    width: "fit-content",
    fontWeight: "700",
  }
})
