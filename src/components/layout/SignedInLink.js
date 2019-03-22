import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

//materialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
 links: {
   color: 'white',
   textTransform: 'none',
   fontSize: '15px'
 }
}
const SignedInLinks = (props) => {
  const { classes } = props;
  return (
    <div>
        <Button ><NavLink className={classes.links}to='/create'>New Project</NavLink></Button>
        <Button><a className={classes.links}  onClick={props.signOut}>Log Out</a></Button>
        <Button><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></Button>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

SignedInLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignedInLinks))