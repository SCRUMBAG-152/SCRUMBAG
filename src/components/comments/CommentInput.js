import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '../../customs/components/CustomButtons/Button'
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/userActions'

const styles = {

  button: {
    boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
    backgroundColor: '#ec407a'
  },
  box: {
    width: 270
  }
}


class CommentInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      commentInput: ''
    }
  }


  updateField = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleAdd = () => {
    const { profile, projectID } = this.props
    const newComment = {
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorInitials: profile.initials,
      projectID: projectID,
      description: this.state.commentInput
    }
    this.props.createComment(newComment)
    this.setState({ commentInput: "" });
  }


  render() {

    return (
      <div>
        <TextField
          style={styles.box}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          value={this.state.commentInput}
          onChange={(e) => { this.setState({ commentInput: e.target.value }) }}
        />
        <div />
        <Button
          style={styles.button}
          variant="contained"
          onClick={this.handleAdd}
        >Add Comment</Button>
      </div>
    )
  }
}



//map dispatch from this component and calls action creator
const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}
export default connect(null, mapDispatchToProps)(CommentInput)