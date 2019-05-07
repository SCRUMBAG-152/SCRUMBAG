import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import {createBrowserHistory} from 'history';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "../../customs/components/CustomInput/CustomInput.jsx";
import Button from "../../customs/components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../customs/assets/jss/material-dashboard-pro-react/components/headerLinksStyle";

let numOfNotifications = 7

class HeaderLinks extends React.Component {

  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  signOut = () => {
    const history = createBrowserHistory({forceRefresh:true});
    history.push("/pages/login-page");
    this.props.signOut()
  }

  render() {
    const { classes, notifications} = this.props;
    const { open } = this.state;
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
      });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
    );
    const wrapper = classNames({
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={classes.headerLinksSvg + " " + classes.searchIcon}
          />
        </Button>

        <Link style={{color:'#555'}} to={'/dashboard'}>
        <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={ classes.buttonLink}
          muiClasses={{
            label: ""
          }}
        >
          <Dashboard
            className={
              classes.headerLinksSvg +
              " " +
              classes.links
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {"haha"}
            </span>
          </Hidden>

        </Button>
        </Link>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.buttonLink}
            muiClasses={{
              label: ""
            }}
            buttonRef={node => {
              this.anchorEl = node;
            }}
          >
            <Notifications
              className={
                classes.headerLinksSvg 
                +
                " " 
                + 
                classes.links
              }
            />
            <span className={classes.notifications}>{numOfNotifications}</span>
            <Hidden mdUp implementation="css">
              <span onClick={this.handleClick} className={classes.linkText}>
                {"Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !open,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                    { notifications && notifications.map(notification => {
                      return (
                        <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                        key={notification.id}
                      >
                        <span style={{color: '#ec407a'}}>{notification.user} </span> 
                        <span>{notification.content}</span>
                      </MenuItem>
                      )
                    })
                    }
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Link style={{color:'#555'}} to={'/userprofile'}>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          className={classes.buttonLink}
          muiClasses={{
            label:""
          }}
        >
          <Person
            className={
              classes.headerLinksSvg +
              " " +
              classes.links
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {"Profile"}
            </span>
          </Hidden>
          </Button>
        </Link>
       {/*When clicked, signs user out and redirects to login page*/}
          <Button
            color="primary"
            aria-label="Sign Out"
            size="sm"
            onClick={this.signOut}
          >
            Sign Out
          </Button>
      </div>
    );
  }

}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'notifications', orderBy: ['time', 'desc'], limit: numOfNotifications}
  ])
  )(withStyles(headerLinksStyle)(HeaderLinks))
