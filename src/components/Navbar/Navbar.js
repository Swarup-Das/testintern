import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import "./styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import girlmantraLogo from "../../images/girlmantra-Logo.png";
import girlmantraText from "../../images/girlmantra-Text.png";

var winSize = window.matchMedia("(max-width: 700px)");

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img
          className={classes.image}
          src={girlmantraLogo}
          alt="icon"
          height="30px"
        />
        <img src={girlmantraText} alt="icon" height="20px" />
      </Link>

      <Toolbar
        className={winSize.matches ? classes.navlinksNone : classes.navlinks}
      >
        <Typography variant="body2" gutterBottom className={classes.navlinks}>
          Challenges
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.navlinks}>
          Blogs
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.navlinks}>
          About Us
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.navlinks}>
          Guides
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
