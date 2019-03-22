import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";

import avatar from "assets/img/faces/marc.jpg";
import GetUser from "../../config/User";
import fire from "../../config/Fire";
import { SnackbarContent } from "@material-ui/core";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      companyRef: "",
      companyName: "",
      user: null,
      pathToUser: null,
    }
    this.setUser = this.setUser.bind(this);
    this.setUserFields = this.setUserFields.bind(this);
    this.setCompanyName = this.setCompanyName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateDB = this.updateDB.bind(this);
  }

  /*
    sets the user uid to user in state
    calls set user fields
    calls set company name
  */
  async setUser(user) {
    this.setState({ user });
    await this.setUserFields();
    await this.setCompanyName();
  }

  /*
    set the company name so that it can be displayed
  */
  async setCompanyName() {
    var path = await fire.collection("Companies").doc(this.state.companyRef).get();
    this.setState({
      companyName: path.data().companyName,
    })
  }

  /*
    set the users name, email, and role so that it can be displayed
    set company reference so we can get the company name
  */
  async setUserFields() {
    var path = await fire.collection("Users").doc(this.state.user).get();
    this.setState({
      firstName: path.data().firstName,
      lastName: path.data().lastName,
      email: path.data().email,
      role: path.data().role,
      companyRef: path.data().companyID,
    })
  }

  /*
    update the first and last name in the database to new values
  */
  async updateDB() {
    await fire.collection("Users").doc(this.state.user).update({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState !== this.state) {

    }
  }

  //handle changes from email and password
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GetUser user={this.setUser} />
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <PermIdentity />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  {this.state.firstName + ' ' + this.state.lastName}
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      value={this.state.firstName}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        name: "firstName",
                        onChange: this.handleChange,
                        value: this.state.firstName
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      value={this.state.lastName}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        name: "lastName",
                        onChange: this.handleChange,
                        value: this.state.lastName
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    {this.state.role}
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    {this.state.email}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    {this.state.companyName}
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    data6
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    data7
                </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    data8
                </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  </GridItem>
                </GridContainer>

                <Clearfix />
                <Button onClick={this.updateDB} block round color="success">
                  Save
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves Kanye
                  I love Rick Owens’ bed design but the back is...
              </p>
                <Button color="rose" round>
                  Follow
              </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(userProfileStyles)(UserProfile);
