import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useMeasure } from "react-use";

type Props = {
  pieces: string,
  imgSrc: string,
  title: string
}

export default function ProductItemV2({ pieces, imgSrc, title }: Props) {
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
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "Poppins",
          fontWeight: "500",
          color: "#23262F",
          my: "16px",
          display: "-webkit-box",
          overflow: "hidden",
          minHeight: "48px",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: "6px 8px",
          fontSize: "12px",
          lineHeight: "12px",
          color: "#00A859",
          border: "2px solid #00A859",
          borderRadius: "4px",
          width: "fit-content",
          fontFamily: "Poppins",
          fontWeight: "700",
        }}
      >
        {pieces || "pieces"}
      </Box>
    </Box>
  );
}
