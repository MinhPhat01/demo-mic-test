import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";
import Banner from "./components/Banner";
import HomePageNews from "./components/HomePageNews";
import OurCategories from "./components/OurCategories";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Container>
        <OurCategories />
        <HomePageNews />
      </Container>
    </Fragment>
  );
};

export default Home;
