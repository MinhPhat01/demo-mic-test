import React from "react";
import DomPurify from "components/dompurify/DomPurify";

export default function OurMission({ content }: { content: string }) {
  
  return (
    <DomPurify content={content}></DomPurify>
  );
}
