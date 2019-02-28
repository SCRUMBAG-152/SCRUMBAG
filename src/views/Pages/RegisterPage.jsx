import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
//import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import fire from "config/Fire.jsx";
import { auth } from "config/Fire.jsx";
import { google } from "config/Fire.jsx";


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      email: "",
      password: "",
      code: "",
      first: "",
      last: "",
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.initializeDoc = this.initializeDoc.bind(this);
    this.getCompanyID = this.getCompanyID.bind(this);
    this.googleSignUp = this.googleSignUp.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.providerEmail = this.providerEmail.bind(this);
  }

  //redirect
  handleRedirect() {
    this.props.history.push("/dashboard");  //redirects to dashboard
  }

  //set this.state.email to the user providers email 
  providerEmail(user) {
    this.setState({
      email: user.email     //get user email from provider
    });
  }

  //return the company id with correct code
  async getCompanyID() {
    var id;
    await fire.collection('Companies')
      .where("code", "==", this.state.code).get().then((snap) => {  //grab the document with the right id
        snap.forEach((doc) => { //doc will be the company document with the correct code
          id = doc.id;
        });
      }).catch(function (error) {   //error retrieving the document
        window.alert(error);
      });
    return id;    //return company id
  }

  //initialize Document in user collection
  async initializeDoc() {
    await fire.collection('Users')
      .doc(`${auth.currentUser.uid}`)
      .set({      // create the document if it's a new user
        companyID: await this.getCompanyID(),
        departmentID: [],
        email: this.state.email,
        firstName: this.state.first,
        lastName: this.state.last,
        projectID: [],
        role: "user",
      }).catch((error) => {   //if an error occurs, alert user of the error
        window.alert(error);
      });
  }

  //handles new user signing in with email and password
  async signUp(e) {
    e.preventDefault();
    if (await this.verifyInputs()) {            //verify the inputs are filled in correctly
      auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(async () => {
        await this.initializeDoc();             //initialize a new doc in the Users collection in firestore
        this.handleRedirect();                  //handles redirect
      }).catch((error) => {                     //if an error occurs, alert user of the error
        window.alert(error);
      });
    }
  }

  //handles new user signing in with google
  async googleSignUp(e) {
    e.preventDefault();
    if (await this.verifyInputs()) {            //verify fields are filled out correctly
      auth.signInWithPopup(google).then(async (result) => {
        await this.providerEmail(result.user);  //changes this.state.email to work with the provider email   
        await this.initializeDoc();             //initialize a new doc in the Users collection in firestore
        this.handleRedirect();                  //handles redirect
      }).catch(error => {
        window.alert(error);
      });
    }
  }

  //handle changes from email and password
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>Register</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Marketing"
                      description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Fully Coded in HTML5"
                      description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Built Audience"
                      description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                      icon={Group}
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={8} md={5}>
                    <div className={classes.center}>
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      {` `}
                      <Button onClick={this.googleSignUp} justIcon round color="google">
                        <i className="fab fa-google" />
                      </Button>
                      {` `}
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                      {` `}
                      <h4 className={classes.socialTitle}>or be classical</h4>
                    </div>
                    <form className={classes.form}>

                      {/*Handles input for First Name */}
                      <CustomInput
                        value={this.state.first}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          name: "first",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                person
                              </Icon>
                            </InputAdornment>
                          ),
                          placeholder: "First Name..."
                        }}
                      />

                      {/*Handles input for Last Name */}
                      <CustomInput
                        value={this.state.last}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          name: "last",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                person
                              </Icon>
                            </InputAdornment>
                          ),
                          placeholder: "Last Name..."
                        }}
                      />

                      {/*Handles input for Company Code */}
                      <CustomInput
                        value={this.state.code}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          name: "code",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                group_add
                              </Icon>
                            </InputAdornment>
                          ),
                          placeholder: "Company Code..."
                        }}
                      />

                      {/*Handles input for Email */}
                      <CustomInput
                        value={this.state.email}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          name: "email",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                      />


                      {/*Handles input for Password */}
                      <CustomInput
                        value={this.state.password}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          name: "password",
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          placeholder: "Password..."
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button onClick={this.signUp} round color="primary">
                          Get started
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }

  async verifyInputs() {
    //verify that fields are filled out correctly
    if (this.state.checked.length === 0) {  //terms and conditions not checked
      window.alert("Make sure to agree to the terms and conditions.");
      return false;
    }
    else if (this.state.first === "") { //first nae field is empty
      window.alert("Make sure you fill in your first name.");
      return false;
    }
    else if (this.state.last === "") {  //last name field is empty
      window.alert("Make sure you fill in your last name.");
      return false;
    }
    else if (await this.getCompanyID() === undefined) { //bad company code
      window.alert("The company code did not match a current company.");
      return false;
    }
    else {
      return true;
    }
  }

}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);
