import { Container } from "@mui/material";
import React, { Fragment } from "react";
import Banner from "./components/Banner";
import News from "./components/News";
import OurCategories from "./components/OurCategories";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Container>
        <OurCategories />
        <News />
      </Container>
    </Fragment>
  );
};

export default Home;
