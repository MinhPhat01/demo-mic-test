import { Container, Grid } from "@mui/material";
import { IPage, responseSchema } from "interface";
import { HOME_PAGE, HOME_PAGE_NEW, HOME_PAGE_OUR_CATEGORIES } from "interface/responseSchema/home";
import React, { Fragment } from "react";
import Banner from "./components/Banner";
import HomePageNews from "./components/HomePageNews";
import OurCategories from "./components/OurCategories";


export type HomeProps = IPage<
  [responseSchema<HOME_PAGE>, responseSchema<HOME_PAGE_OUR_CATEGORIES>, responseSchema<HOME_PAGE_NEW>]
>

const Home = (props: HomeProps) => {
  const { initData } = props

  return (
    <Fragment>
      <Banner data={initData[0]} />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <OurCategories data={initData[1]} />
          </Grid>
          <Grid item xs={12}>
            <HomePageNews data={initData[2]} />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
