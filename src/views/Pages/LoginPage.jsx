import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import fire, { auth, google } from "config/Fire.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.googleSignUp = this.googleSignUp.bind(this);
    this.isUserRegistered = this.isUserRegistered.bind(this);
    this.signOutUnregisteredUser = this.signOutUnregisteredUser.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  /*
    login with email and password
    redirect to dashboard
  */
  login(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        window.alert(error);
      });
  }

  /*
    Login with google provider
    redirect to dashboard if user has registerd
    sign out and redirect to register page if not registered
    verify the the user trying to login is already registered
  */
  googleSignUp() {
    auth.signInWithPopup(google).then(async (result) => {
      if (await this.isUserRegistered(result.user.uid)) { //verify registeration 
        this.props.history.push("/dashboard");
      }
      else {
        window.alert("Please register first before logging in.");
        this.signOutUnregisteredUser();
      }
    }).catch(error => {
      window.alert(error);
    })
  }

  /*
    sign out user that has not yet registered 
    this is for when users try to login with a provider but have no registered
  */
  signOutUnregisteredUser() {
    auth.signOut().then(() => { //signs user out
      this.props.history.push("/pages/register-page");  //redirects
    }).catch(function (error) {
      window.alert(error);
    });
  }

  /*
    return if the user trying to login has already registered
    this is for users trying to login with a provider
  */
  async isUserRegistered(uid) {
    var document;
    await fire.collection("Users").doc(uid).get().then(doc => {
      document = doc
    })
    return document.exists; //returns true if document exists
  }

  //handle changes from email and password
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Log in</h4>
                  <div className={classes.socialLine}>
                    <Button className={classes.customButtonClass} justIcon round color="transparent">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className={classes.customButtonClass} onClick={this.googleSignUp} justIcon round color="transparent">
                      <i className="fab fa-google" />
                    </Button>
                    <Button className={classes.customButtonClass} justIcon round color="transparent">
                      <i className="fab fa-facebook-f" />
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    value={this.state.email}
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "email",
                      onChange: this.handleChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />

                  <CustomInput
                    value={this.state.password}
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "password",
                      type: "password",
                      onChange: this.handleChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button
                    onClick={this.login}
                    color="rose"
                    simple
                    size="lg"
                    block
                  >
                    Let's Go
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
