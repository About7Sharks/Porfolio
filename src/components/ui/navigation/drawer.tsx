import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  useStyles,
  InfoIcon,
  HomeIcon,
  BookIcon,
  MenuIcon,
  ListItemIcon,
  AccountTreeIcon,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
} from "./drawerHelpers";
import "../../../styles/index.scss";

type Anchor = "left" | "right" | "top" | "bottom";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState<Record<Anchor, boolean>>({ left: false, right: false, top: false, bottom: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event?: React.KeyboardEvent | React.MouseEvent) => {
      if (event === undefined) return;
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, classes.drawer, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.drawers + " customDrawerStyleTweaks"}>
        <h3 className="drawerTitle">Zac's Nav</h3>
        {["Home", "Journal", "Projects", "About"].map((text) => (
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
      {(["left"] as Anchor[]).map((anchor) => (
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
