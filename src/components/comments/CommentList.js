import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CommentDetails from './CommentDetails'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({

  title: {
    borderBottom: '1px solid #eee',
  },
  divider: {
    fontSize: 1000
  },
  item: {
    margin: 0,
    padding: 0,
  }
});


const CommentList = ({ comments, classes }) => {
  if (comments) {
    const sortedComments = comments.sort(function (a, b) {
      a = (a.createdAt);
      b = (b.createdAt);
      return b > a ? -1 : b < a ? 1 : 0;
    });
  return (
    <div>  
    <Typography variant="h5" component="h3" >
        Comments
    </Typography >
      <Divider className={classes.divider} />
      <Grid container>
        {sortedComments && sortedComments.map(comment => {
          return (
            <Grid className={classes.item} item xs={8} key={comment.id}>
              <CommentDetails comment={comment}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
}


export default withStyles(styles)(CommentList)