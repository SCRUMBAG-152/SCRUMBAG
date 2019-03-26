import React from 'react'
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import Avatar from '@material-ui/core/Avatar';

export default function UserAvatar(props) {
  return (
      <Button><Avatar style={{backgroundColor: pink[400]}}>{props.profile.initials}</Avatar></Button>
  )
}
