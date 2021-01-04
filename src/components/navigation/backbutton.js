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
    position: "absolute",
    top: "25px",
    left: "25px",
    zIndex: "100",
  },
});
export default function BackButton({ children }) {
  const classes = useStyles();
  let history = useHistory();
  let { pathname } = history.location;
  console.log(pathname);
  if (pathname.includes("ome") || pathname === "/") return <div></div>;
  return (
    <ArrowBackIcon className={classes.list} onClick={() => history.goBack()} />
  );
}
