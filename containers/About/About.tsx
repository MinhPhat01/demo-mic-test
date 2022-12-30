import { useMemo } from "react";

import { Box, Container } from "@mui/material";

import Title from "components/title/Title";
import OurStory from "./components/OurStory";
import OurValue from "./components/OurValue";
import OurMission from "./components/OurMission";

import { IPage, responseSchema } from "interface";
import { ITEM_ABOUT } from "interface/responseSchema/about";

export type PropsAbout = IPage<[responseSchema<ITEM_ABOUT>]>;

export default function About(props: PropsAbout) {
  const { initData } = props;
  const dataStory = initData[0].items[0].story_content;
  const dataMission = initData[0].items[0].mission_content;
  const dataValue = initData[0].items[0].value_content;

  const renderStory = useMemo(() => {
    if (!dataStory) return;
    return dataStory
      .filter((item) => item.block_type === "content")
      .map((item, index) => {
        return <OurStory key={index} content={item.value} />;
      });
  }, [dataStory]);
  const renderMission = useMemo(() => {
    if (!dataMission) return;
    return dataMission
      .filter((item) => item.block_type === "content")
      .map((item, index) => {
        return <OurMission key={index} content={item.value} />;
      });
  }, [dataMission]);

  return (
    <Container sx={{ mt: "40px" }}>
      <Box>
        <Title
          title={"Our Story"}
          widthOfText={"140px"}
          heightOfText={10}
        ></Title>
        {renderStory}
      </Box>
      <Box>
        <Title
          title={"Our Mission"}
          widthOfText={"140px"}
          heightOfText={10}
        ></Title>
        {renderMission}
      </Box>
      <Box>
        <Title
          title={"Our Value"}
          widthOfText={"140px"}
          heightOfText={10}
        ></Title>
        <OurValue data={dataValue} />
      </Box>
    </Container>
  );
}
