import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


//material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { fade } from '@material-ui/core/styles/colorManipulator';



const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: '#2c4772'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white'
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'white',
    fontSize: '20px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
     mobileMoreAnchorEl: null,
    }
  }


  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes, auth, profile } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <Link to='/create'>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
                <NoteAddIcon/>
            </IconButton>
            <p>New Project</p>
          </MenuItem>
        </Link>
        <Link to='/'>
          <MenuItem onClick={this.handleMobileMenuClose}>
              <IconButton color="inherit">
                <ExitToAppIcon/>
              </IconButton>
              <p>Log Out</p>
          </MenuItem>
        </Link>
        <Link to='/'>
        <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
            <p>My Profile</p>
          </MenuItem>
        </Link>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Link to='/'>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to='/'>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Scrumbag
              </Typography>
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              { links }
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


/* const Navbar = (props) => {
  const { classes, auth, profile } = props;
  //output SignedInLinks if uid exist
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to='/' className={classes.logo}>Personal Notes</Link>
          </Typography>
              { links }
          </Toolbar>
      </AppBar>
    </div>
  )
} */


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar))

