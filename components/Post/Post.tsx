import React from "react";
import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";
import { format, parseISO } from "date-fns";
import DomPurifyOfPost from "components/dompurify/DomPurifyOfPost";

type PostProps = {
  imgSrc: string,
  title: string,
  date: string,
  content: any
}

type FilterContent = {
  block_type: string,
  value: string | Node

}

const Post = ({ imgSrc, title, date, content }: PostProps) => {
  const [ref, { width }] = useMeasure();
  const filterContent = content?.filter(
    (item) => item.block_type === "content"
  );

  return (
    <StyledWrapperPost>
      <Box ref={ref} sx={{ width: "100%" }}>
        <Image
          width={width}
          src={imgSrc || "/bgEmpty.png"}
          alt="img"
          height={(width * 4) / 6}
          style={{ objectFit: "contain", borderRadius: "8px" }}
        />
      </Box>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledWrapperDate>
        <StyledDate>
          {format(parseISO(date), "dd/MM/yyyy")}
        </StyledDate>
      </StyledWrapperDate>
      {filterContent.map((item: FilterContent, index: number) => {
        const { value } = item
        return <DomPurifyOfPost key={index} value={value}></DomPurifyOfPost>
      })}

    </StyledWrapperPost >
  );
};

export default Post;

const StyledWrapperPost = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  }
})

const StyledTitle = styled(Typography)(() => {
  return {
    margin: '12px 0',
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

const StyledDate = styled(Typography)(() => {
  return {
    padding: "8px",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#23262F",
    fontWeight: "700",
  }
})

const StyledWrapperDate = styled(Box)(() => {
  return {
    marginBottom: "16px",
    width: "fit-content",
    border: "2px solid #E6E8EC",
    borderRadius: "4px",
  }
})