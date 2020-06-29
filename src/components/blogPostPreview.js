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
    minWidth:300,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(e) {
    history.push("/blog/"+props.title.replace(/ /g,''));
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClick(props.title)}>
        <CardMedia className={classes.media}
          image={props.image}
          title={props.title}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{props.summary}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}