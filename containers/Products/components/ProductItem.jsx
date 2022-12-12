import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMeasure } from "react-use";

export default function ProductItem({ pieces, id }) {
  const [ref, { width }] = useMeasure();
  return (
    <Grid item xs={6} md={3}>
      <Link href={`products/${id}`}>
        <Box sx={{ cursor: "pointer" }}>
          <Box ref={ref} sx={{ height: width, borderRadius: "4px" }}>
            <Image
              src={"/bgEmpty.png"}
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
            }}
          >
            Chalkboard Chalk
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
            {`${pieces} pieces`}
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}
