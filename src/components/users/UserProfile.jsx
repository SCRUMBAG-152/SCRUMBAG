import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../customs/components/Grid/GridItem.jsx";
import Button from "../../customs/components/CustomButtons/Button.jsx";
import CustomInput from "../../customs/components/CustomInput/CustomInput.jsx";
import Clearfix from "../../customs/components/Clearfix/Clearfix.jsx";
import Card from "../../customs/components/Card/Card.jsx";
import CardBody from "../../customs/components/Card/CardBody.jsx";
import CardHeader from "../../customs/components/Card/CardHeader.jsx";
import CardIcon from "../../customs/components/Card/CardIcon.jsx";
import CardAvatar from "../../customs/components/Card/CardAvatar.jsx";

import userProfileStyles from "../../customs/assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";

import avatar from "../../customs/assets/img/professor.png";



function UserProfile(props) {
  const { classes, profile, auth } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Edit Profile - <small>Complete your profile</small>
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                <InputLabel style={{ color: "#AAAAAA" }}>Company</InputLabel>
                  <CustomInput
                    // labelText="Company"
                    id="company"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false,
                      value: profile.company
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <InputLabel style={{ color: "#AAAAAA" }}>Username</InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    //labelText={ profile.firstName}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: auth.email
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{ color: "#AAAAAA" }}>Email address</InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: auth.email
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "#AAAAAA" }}>First Name</InputLabel>
                  <CustomInput
                    // labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: profile.firstName
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "#AAAAAA" }}>Last Name</InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: profile.lastName
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{ color: "#AAAAAA" }}>City</InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "City"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{ color: "#AAAAAA" }}>Country</InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "Country"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{ color: "#AAAAAA" }}>Postal Code</InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "Postal Code"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    // labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: profile.aboutMe
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.updateProfileButton}>
                Update Profile
              </Button>
              <Clearfix />
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
              <h4 className={classes.cardTitle}>Alex Liu</h4>
              <p className={classes.description}>
                Alex is handsome and everyone deserves an A in CSCI 152.
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


// const mapStateToProps = (state, ownProps) => {
//   const users = state.firestore.ordered.users;
// // console.log("State: ", state)
// // console.log("Users: ", users)
//   return {
//     auth: state.firebase.auth,
//     users:users
//   }
// }

const mapStateToProps = (state) => {
  console.log("Whos logged in: ", state.firebase.profile)
  console.log("State: ", state)
  return {
    auth: state.firebase.auth,      
    profile: state.firebase.profile //this will tell you who is currently logged in. You can console.log right after
  } 

}


export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    console.log("Props: ", props)
    return ([
    { collection: 'users' } 
    ])
  }),
)(withStyles(userProfileStyles)(UserProfile))

// export default withStyles(userProfileStyles)(UserProfile);
