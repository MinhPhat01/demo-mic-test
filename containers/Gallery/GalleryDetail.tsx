import React, { useMemo } from "react";

import { Container } from "@mui/material";

import { IPage } from "interface";
import { NEW_DETAIL_ITEMS } from "interface/responseSchema/news";

import DomPurifyOfGallery from "components/dompurify/DomPurifyOfGallery";

export type GalleryDetailProps = IPage<[NEW_DETAIL_ITEMS]>;

export default function GalleryDetail(props: GalleryDetailProps) {
  const { initData } = props;
  const content = initData[0].content;

  const renderContent = useMemo(() => {
    if (content == undefined) return;
    return content.map((item, index) => {
      if (item.block_type === "content") {
        const { value } = item;
        return (
          <DomPurifyOfGallery key={index} value={value}></DomPurifyOfGallery>
        );
      } else {
        return;
      }
    });
  }, [content]);

  return <Container sx={{ mb: "67px", mt: "40px" }}>{renderContent}</Container>;
}
