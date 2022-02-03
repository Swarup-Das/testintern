import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "5px",
    right: "1px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 18px",
  },
  detailPri: {
    display: "flex",
    justifyContent: "space-between",
    // margin: "5px 5px",
  },
  detailSub1: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "right",
  },
  detailSub2: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "left",
  },
  title: {
    marginTop: "15px",
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
});
