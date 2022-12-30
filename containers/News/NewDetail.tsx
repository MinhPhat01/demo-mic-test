import React, { useMemo } from "react";

import { Container } from "@mui/material";

import { IPage } from "interface";
import { NEW_DETAIL_ITEMS } from "interface/responseSchema/news";

import DomPurifyOfNews from "components/dompurify/DomPurifyOfNews";

export type NewDetailProps = IPage<[NEW_DETAIL_ITEMS]>;

export default function NewDetail(props: NewDetailProps) {
  const { initData } = props;
  const content = initData[0].content;

  const renderContent = useMemo(() => {
    if (content == undefined) return;
    return content.map((item, index) => {
      const { value } = item;
      return <DomPurifyOfNews key={index} value={value}></DomPurifyOfNews>;
    });
  }, [content]);

  return <Container sx={{ mb: "67px", mt: "40px" }}>{renderContent}</Container>;
}
