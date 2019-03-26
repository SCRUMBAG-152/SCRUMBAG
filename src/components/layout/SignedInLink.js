import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAvatar from './UserAvatar'

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
  const { classes, profile } = props;
  return (
    <div>
        <Button ><NavLink className={classes.links}to='/create'>New Project</NavLink></Button>
        <Button><a className={classes.links}  onClick={props.signOut}>Log Out</a></Button>
        <UserAvatar profile={profile}/>
        

    </div>
  )
}


SignedInLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignedInLinks)