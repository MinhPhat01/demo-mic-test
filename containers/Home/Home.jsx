import { Container, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Banner from "./components/Banner";
import HomePageNews from "./components/HomePageNews";
import OurCategories from "./components/OurCategories";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <OurCategories />
          </Grid>
          <Grid item xs={12}>
            <HomePageNews />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
