import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import {  Link } from "react-router-dom";
import '../myscss.scss';
const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: 'black'
  },
  fullList: {
    width: 'auto',
    backgroundColor: 'black',
    height: '100vh'
  },
  drawer:{
    minHeight:'100vh',
  },
  drawers:{
    display:'inline-flex',
    flexDirection: 'column'
  },
  menuStyles:{
    zIndex:'100',
    border:'1px solid white',
    position: 'fixed',
    top: '10px',
    right:'10px',
    color:'white',
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event)
    if(event===undefined) return
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
  <div className={clsx(classes.list,classes.drawer, { [classes.fullList]: anchor === 'top' || anchor === 'bottom' })}
      role="presentation" onClick={toggleDrawer(anchor, false)}  onKeyDown={toggleDrawer(anchor, false)}>
      <List className={classes.drawers + ' zacOverwrite'}>
        {['Home', 'Journal', 'Projects', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{ text==='Home'?<HomeIcon/>:text==='Journal'?<BookIcon/>:text==='Projects'?<AccountTreeIcon/>:text==='About'?<InfoIcon/>:<AccountTreeIcon/> }</ListItemIcon>
            <Link style={{width:'100%',height:'40px',color:'white'}} to={'/'+text.toLowerCase().replace(/\s/g, '')}>{text}</Link>            
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.menuStyles} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon/> Menu</Button>  
          <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}