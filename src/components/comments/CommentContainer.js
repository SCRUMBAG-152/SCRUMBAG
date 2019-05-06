import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Grid from '@material-ui/core/Grid';

export class CommentContainer extends Component {
  render() {
    const {projectID, comments, profile} = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={8} >
            <CommentList comments={comments}/>
          </Grid>
          <Grid item xs={4}>
            <CommentInput profile={profile} projectID={projectID}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default CommentContainer
