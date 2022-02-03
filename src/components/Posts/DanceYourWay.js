import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Divider,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import "../../App.css";

import DanceYourWayImage from "../../images/DanceYourWay.png";

const DanceYourWay = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className="container">
      <Card className={classes.card} raised elevation={6}>
        <ButtonBase className={classes.cardAction}>
          <CardMedia
            className={classes.media}
            image={DanceYourWayImage}
            title="Dance Your Way"
          ></CardMedia>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Dance Your Way
          </Typography>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">
              4 WEEKS CHALLENGE
            </Typography>
          </div>
          <div className="title">
            <Divider style={{ margin: "20px 0 0 0" }} />
          </div>
          <CardContent className={classes.detailPri}>
            <CardContent className={classes.detailSub2}>
              <Typography variant="body1" component="p">
                ENTRY FEE
              </Typography>
              <Typography component="div">
                <Box sx={{ fontWeight: "bold", m: 1 }}>$150</Box>
              </Typography>
            </CardContent>
            <CardContent className={classes.detailSub1}>
              <Typography variant="body1" component="p">
                CHALLENGE KICK-OFF
              </Typography>
              <Typography component="div">
                <Box sx={{ fontWeight: "bold", m: 1 }}>Coming Soon</Box>
              </Typography>
            </CardContent>
          </CardContent>
        </ButtonBase>
      </Card>
    </div>
  );
};

export default DanceYourWay;
