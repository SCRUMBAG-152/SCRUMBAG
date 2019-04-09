import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { updateUser } from '../../store/actions/userActions'

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
import CardFooter from "../../customs/components/Card/CardFooter.jsx";

import Place from "@material-ui/icons/Place";



import userProfileStyles from "../../customs/assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";

import avatar from "../../customs/assets/img/default-avatar.png";



class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      email: '',
      firstName: '',
      lastName: '',
      team: '',
      aboutMe: '',
      city: '',
      country: '',
      position: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: this.props.auth.uid,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      team: this.state.team,
      aboutMe: this.state.aboutMe,
      city: this.state.city,
      position: this.state.position
    }
    this.props.updateUser(user)

    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      team: '',
      aboutMe: '',
      city: '',
      country: '',
      position: ''
    });
  }

  render() {
    const { classes, profile } = this.props;
    console.log(this.state)
    return (
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h5 className={classes.cardCompany}>{profile.company}</h5>
                <h3 className={classes.cardTitle}>{profile.firstName} {profile.lastName}</h3>
                <h6 className={classes.cardPosition}>{profile.position}</h6>
                <br></br>
                <p className={classes.description}>
                  {profile.aboutMe}
                </p>
                <Button color="rose" round>
                  FOLLOW
                </Button>
              </CardBody>
              <CardFooter product>
                <div className={`${classes.stats} ${classes.productStats}`}>
                  <Place /> {profile.city}, {profile.country}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
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
                  <InputLabel >Team</InputLabel>
                    <CustomInput
                      // labelText="Company"
                      id="team"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false,
                        onChange: this.handleChange,
                        placeholder: profile.team
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={7}>
                  <InputLabel >Position</InputLabel>
                    <CustomInput
                      // labelText="Postal Code"
                      id="position"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        placeholder: profile.position
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12}>
                    <InputLabel>Email address</InputLabel>
                      <CustomInput
                        // labelText="Email address"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.handleChange,
                          placeholder: profile.email
                        }}
                      />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                  <InputLabel >First Name</InputLabel>
                    <CustomInput
                      // labelText="First Name"
                      id="firstName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        placeholder: profile.firstName
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                  <InputLabel >Last Name</InputLabel>
                    <CustomInput
                      // labelText="Last Name"
                      id="lastName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        placeholder: profile.lastName
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel >City</InputLabel>
                    <CustomInput
                      // labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        placeholder: profile.city
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel >Country</InputLabel>
                    <CustomInput
                      // labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        placeholder: profile.country
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel >About me</InputLabel>
                    <CustomInput
                      // labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="aboutMe"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        onChange: this.handleChange,
                        placeholder: profile.aboutMe
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Button color="rose" className={classes.updateProfileButton} onClick={this.handleSubmit}>
                  Update Profile
                </Button>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
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
  return {
    auth: state.firebase.auth,      
    profile: state.firebase.profile //this will tell you who is currently logged in. You can console.log right after
  } 

}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))

  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return ([
    { collection: 'users' } 
    ])
  }),
)(withStyles(userProfileStyles)(UserProfile))

// export default withStyles(userProfileStyles)(UserProfile);
