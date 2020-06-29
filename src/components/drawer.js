import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import DevicesIcon from '@material-ui/icons/Devices';
import MenuIcon from '@material-ui/icons/Menu';
import {  Link } from "react-router-dom";
import './myscss.scss';
const useStyles = makeStyles({
  list: {
    width: 250,
    color: 'white'
  },
  fullList: {
    width: 'auto',
    
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={clsx(classes.list, { [classes.fullList]: anchor === 'top' || anchor === 'bottom' })}
      role="presentation" onClick={toggleDrawer(anchor, false)}  onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Home', 'Blog', 'Projects', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{ text==='Home'?<HomeIcon/>:text==='Blog'?<BookIcon/>:text==='Projects'?<AccountTreeIcon/>:text==='About'?<InfoIcon/>:<AccountTreeIcon/> }</ListItemIcon>
            <Link to={'/'+text.toLowerCase().replace(/\s/g, '')}>{text}</Link>            
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{zIndex:'100', border:'1px solid black', position: 'fixed', top: '10px',right:'10px',filter:'invert(1)'}} onClick={toggleDrawer(anchor, true)}><MenuIcon/> Menu</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}