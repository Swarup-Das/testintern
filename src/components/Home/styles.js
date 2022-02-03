import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  media: {
    // height: 0,
    padding: "40px 0",
    // paddingLeft: "80%",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
}));
