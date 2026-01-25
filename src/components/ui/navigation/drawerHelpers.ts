import { makeStyles } from "@material-ui/core/styles";

export { default as InfoIcon } from "@material-ui/icons/Info";
export { default as HomeIcon } from "@material-ui/icons/Home";
export { default as BookIcon } from "@material-ui/icons/Book";
export { default as MenuIcon } from "@material-ui/icons/Menu";
export { default as SwipeableDrawer } from "@material-ui/core/SwipeableDrawer";
export { default as Button } from "@material-ui/core/Button";
export { default as List } from "@material-ui/core/List";
export { default as ListItem } from "@material-ui/core/ListItem";
export { default as ListItemIcon } from "@material-ui/core/ListItemIcon";
export { default as AccountTreeIcon } from "@material-ui/icons/AccountTree";

export const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "black",
  },
  fullList: {
    width: "auto",
    backgroundColor: "black",
    height: "100vh",
  },
  drawer: {
    minHeight: "100vh",
  },
  drawers: {
    display: "inline-flex",
    flexDirection: "column",
  },
  menuStyles: {
    zIndex: 100,
    position: "fixed",
    top: "10px",
    right: "10px",
    color: "white",
  },
});
