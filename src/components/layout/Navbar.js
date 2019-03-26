import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'
import SignedInMobileMenu from './SignedInMobileMenu'
import SignedOutMobileMenu from './SignedOutMobileMenu'



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
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this)
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this)
    this.signOut = this.signOut.bind(this)

  }


  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  signOut = () => {
    this.setState({ mobileMoreAnchorEl: null });
    this.props.signOut()
  }

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes, auth, profile } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const links = auth.uid ? <SignedInLinks signOut={this.signOut} profile={profile}/> : <SignedOutLinks/>;
    const mobileMenu = auth.uid? 
    <SignedInMobileMenu handleMobileMenuClose={this.handleMobileMenuClose} signOut={this.signOut}/> :
    <SignedOutMobileMenu handleMobileMenuClose={this.handleMobileMenuClose}/>

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {mobileMenu}
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


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navbar))

