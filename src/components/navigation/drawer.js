import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useStyles,
         InfoIcon, HomeIcon, BookIcon, MenuIcon,ListItemIcon, AccountTreeIcon,
         SwipeableDrawer, Button, List, ListItem, 
       } from "./drawerHelpers";
import "../../styles/index.scss";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event === undefined) return;
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, classes.drawer, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.drawers + " customDrawerStyleTweaks"}>
        {["Home", "Journal", "Projects", "About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "Home" ? (
                <HomeIcon />
              ) : text === "Journal" ? (
                <BookIcon />
              ) : text === "Projects" ? (
                <AccountTreeIcon />
              ) : text === "About" ? (
                <InfoIcon />
              ) : (
                <AccountTreeIcon />
              )}
            </ListItemIcon>
            <Link
              style={{ width: "100%", height: "40px", color: "white" }}
              to={"/" + text.toLowerCase().replace(/\s/g, "")}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        // Fragments let you group a list of children without adding extra nodes to the DOM.
        <React.Fragment key={anchor}>
          <Button
            className={classes.menuStyles}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
