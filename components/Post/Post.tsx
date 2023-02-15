import React from "react";
import { useMeasure } from "react-use";

import { Box, Typography, styled } from "@mui/material";

import Image from "components/Image";
import DomPurifyOfPost from "components/dompurify/DomPurifyOfPost";

import { boxShadow } from "constants";
import { format, parseISO } from "date-fns";

type PostProps = {
  imgSrc: string;
  title: string;
  date: string;
  content: any;
};

type FilterContent = {
  block_type: string;
  value: string | Node;
};

const Post = ({ imgSrc, title, date, content }: PostProps) => {
  const [ref, { width }] = useMeasure();
  const filterContent = content?.filter(
    (item) => item.block_type === "content"
  );

  return (
    <StyledWrapperPost>
      <Box ref={ref}>
        <Image
          width="100%"
          src={imgSrc || "/bgEmpty.png"}
          alt="img"
          height={(width * 4) / 6}
          style={{ objectFit: "contain", borderRadius: "8px" }}
        />
      </Box>
      <Typography variant="h4">{title}</Typography>
      <StyledWrapperDate>
        <StyledDate>{format(parseISO(date), "dd/MM/yyyy")}</StyledDate>
      </StyledWrapperDate>
      {filterContent.map((item: FilterContent, index: number) => {
        const { value } = item;
        return <DomPurifyOfPost key={index} value={value}></DomPurifyOfPost>;
      })}
    </StyledWrapperPost>
  );
};

export default Post;

const StyledWrapperPost = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: boxShadow.boxShadow3,
  };
});

const StyledDate = styled(Typography)(() => {
  return {
    padding: "8px",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#23262F",
    fontWeight: "700",
  };
});

const StyledWrapperDate = styled(Box)(() => {
  return {
    marginBottom: "16px",
    width: "fit-content",
    border: "2px solid #E6E8EC",
    borderRadius: "4px",
  };
});
