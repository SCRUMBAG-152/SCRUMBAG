import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

export default function SignedInMobileMenu(props) {

  const  { handleMobileMenuClose } = props
  return (
    <div>
      <Link to='/signin'>
          <MenuItem onClick={handleMobileMenuClose}>
            <IconButton color="inherit">
                <ExitToAppIcon/>
            </IconButton>
            <p>Login</p>
          </MenuItem>
        </Link>
        <Link to='/signup'>
          <MenuItem onClick={handleMobileMenuClose}>
              <IconButton color="inherit">
                <AccountCircleIcon/>
              </IconButton>
              <p>Register</p>
          </MenuItem>
        </Link>
    </div>
  )
}
