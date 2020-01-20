import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Grid, Button, Box } from "@material-ui/core";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    borderTop: "1px solid rgb(200, 200, 200)",
    borderBottom: "1px solid rgb(200, 200, 200)",
    margin: "15px 0px",
    "& > .comment": {
      padding: 10,
      "& > .avatar": {
        margin: "10px"
      },
      "& > .commentBody": {
        margin: "10px",
        textAlign: "left",
        "& .name": {
          fontWeight: 700,
          marginRight: 15
        },
        "& .timestamp": {
          color: "grey",
          fontSize: 13,
          marginTop: 5
        }
      }
    },
    "& .commentBox": {
      maxWidth: "auto",
      width: "auto",
      padding: 10
    }
  }
}));

export default function Comment(props) {
  const classes = useStyles();

  const { name } = props;

  return (
    <div>
      <div className={classes.card}>
        <Grid m={2} container direction="row" className="comment">
          <Avatar aria-label="recipe" className={"avatar"}>
            R
          </Avatar>
          <Grid direction="column" className="commentBody">
            <div>
              <span className="name">{name}</span>
              <span>Let's make this small.</span>
            </div>
            <div className={"timestamp"}>September 14, 2016</div>
          </Grid>
        </Grid>
        <TextField
          className="commentBox"
          variant="outlined"
          multiline
          style={{ display: "block" }}
          InputProps={{
            style: { display: "block" },
            inputProps: {
              // style: { display: "block" }
            }
          }}
        />
        <div style={{ textAlign: "left", padding: 10 }}>
          <Button variant="contained" color="primary">
            Add Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
