import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

export default function SignedInMobileMenu(props) {

  const  { signOut } = props
  return (
    <div>
      <Link to='/create'>
          <MenuItem onClick={props.handleMobileMenuClose}>
            <IconButton color="inherit">
                <NoteAddIcon/>
            </IconButton>
            <p>New Project</p>
          </MenuItem>
        </Link>
        <Link to='/'>
          <MenuItem onClick={signOut}>
              <IconButton color="inherit">
                <ExitToAppIcon/>
              </IconButton>
              <p>Log Out</p>
          </MenuItem>
        </Link>
        <Link to='/'>
        <MenuItem onClick={props.handleMobileMenuClose}>
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
            <p>My Profile</p>
          </MenuItem>
        </Link>
    </div>
  )
}
