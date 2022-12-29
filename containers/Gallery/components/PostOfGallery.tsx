import React from "react";
import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";
import { format, parseISO } from "date-fns";
import { boxShadow } from "constant";

type PostOfGalleryProps = {
  imgSrc: string,
  title: string,
  date: string
}

const PostOfGallery = ({ imgSrc, title, date }: PostOfGalleryProps) => {
  const [ref, { width }] = useMeasure();
  return (
    <StyledWrapper>
      <Box ref={ref} sx={{ width: "100%" }}>
        <Image
          width={width}
          src={imgSrc || "/bgEmpty.png"}
          alt={"img"}
          height={(width * 4) / 6}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        ></Image>
      </Box>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledWrapDate>
        <StyledDate>
          {format(parseISO(date), "dd/mm/yyyy")}
        </StyledDate>
      </StyledWrapDate>
    </StyledWrapper>
  );
};

export default PostOfGallery;

const StyledWrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: boxShadow.boxShadow3,
  }
})

const StyledTitle = styled(Typography)(() => {
  return {
    margin: "12px 0",
    color: "#00A859",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "600",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    minHeight: "64px",
  }
})

const StyledWrapDate = styled(Box)(() => {
  return {
    marginBottom: "16px",
    width: "fit-content",
    border: "2px solid #E6E8EC",
    borderRadius: "4px",
  }
})

const StyledDate = styled(Typography)(() => {
  return {
    padding: "8px",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#23262F",
    fontWeight: "700",
  }
})
