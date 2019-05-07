import React from 'react'
import Typography from '@material-ui/core/Typography';
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import avatar from "../../customs/assets/img/default-avatar.png";



const styles = theme => ({
  paper: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    marginTop: 15
  },
  author:{
    fontWeight: 'bold',
    fontSize: 17
  },
  time:{
    marginBottom: '0.6rem',
    fontSize: '10px'
  },
  avatarImg: {
    width: "100%",
    verticalAlign: "middle",
    border: "0"
  },
  photo: {
    transition: "all 300ms linear",
    width: "40px",
    height: "40px",
    overflow: "hidden",
    float: "left",
    zIndex: "5",
    marginRight: "11px",
    borderRadius: "50%",
    verticalAlign: "middle",
    marginTop: 5
  },
});


const CommentDetails = props =>  {
  const {classes, comment} = props

  return (
      <Grid className={classes.paper} >
        <Grid item xs={2} className={classes.photo}>
          <img src={avatar} className={classes.avatarImg} alt="..." />
        </Grid>
        <Grid item xs={10} container>
        <Typography component="subtitle2" className={classes.author} gutterBottom>
          {comment.authorFirstName} {comment.authorLastName}  
            <Typography className={classes.time} color="textSecondary">
            {moment(comment.createdAt.toDate()).calendar()}
            </Typography>
            <Typography classname={classes.description} component="p">
            {comment.description}
            </Typography>
        </Typography>
        </Grid>
      </Grid>
  )
}

export default withStyles(styles)(CommentDetails)