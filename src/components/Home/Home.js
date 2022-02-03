import React from "react";
import { Grid, CardMedia } from "@material-ui/core";

import DanceYourWay from "../Posts/DanceYourWay";
import LevelUpYourSleep from "../Posts/LevelUpYourSleep";
import BuildYourMeditation from "../Posts/BuildYourMeditation";
import ThePeriodMantra from "../Posts/ThePeriodMantra";
import BoostYourSelfEsteem from "../Posts/BoostYourSelfEsteem";
import MindfulEating from "../Posts/MindfulEating";
import MainImage from "../../images/Main.png";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <img
          src={MainImage}
          alt="MainImage"
          height="600px"
          className={classes.media}
        />
      </Grid>

      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <ThePeriodMantra />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BoostYourSelfEsteem />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <MindfulEating />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BuildYourMeditation />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <LevelUpYourSleep />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DanceYourWay />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
