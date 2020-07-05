import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth:280,
    height:400,
    background:'#262626',
    color:'white',
    borderRadius:'25px'
  },
  media: {
    height: 200,
  },
  cardExtras:{
    textShadow: '2px 2px #444'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();


  return (
    <CardActionArea onClick={() => history.push("/blog/"+props.title.replace(/ /g,''))}>
      <Card raised={true} className={classes.root}>
      <CardMedia className={classes.media} image={props.image}  title={props.title}/>
        <CardContent>
          <Typography className={classes.cardExtras} variant="h5" component="h2">{props.title}</Typography>
          <Typography component="p">{props.summary}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>

  );
}