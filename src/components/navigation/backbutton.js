import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    filter: "invert(1)",
    // border: '1px solid black',
    borderRadius: "25px",
    padding: "3px",
    cursor: "pointer",
    position: "fixed",
    top: "25px",
    left: "25px",
    zIndex: "1000",  
  },
});
export default function BackButton() {
  const classes = useStyles();
  let history = useHistory();
  let { pathname } = history.location;
  console.log(pathname);
  if (pathname.includes("ome") || pathname === "/") return <div></div>;
  return (
    <ArrowBackIcon
      id="backBTN"
      className={classes.list}
      onClick={() => history.goBack()}
    />
  );
}
