import React from 'react'
import { NavLink } from 'react-router-dom'

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

const SignedOutLink = (props) => {
  const {classes} = props
  return (
    <div>
        <Button><NavLink className={classes.links} to='/signup'>Signup</NavLink></Button>
        <Button><NavLink className={classes.links} to='/signin'>Login</NavLink></Button>
   </div>
  )
}

SignedOutLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignedOutLink)