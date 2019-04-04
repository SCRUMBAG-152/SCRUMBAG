import React from "react";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Group from "@material-ui/icons/Group";
import Create from "@material-ui/icons/Create";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "../../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../../customs/components/Grid/GridItem.jsx";
import PictureUpload from "../../../customs/components/CustomUpload/PictureUpload.jsx";
import CustomInput from "../../../customs/components/CustomInput/CustomInput.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleState: "",
      teamName: "",
      teamNameState: "",
      description: "",
      descriptionState: "",
    };
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.titleState === "success" &&
      this.state.teamNameState === "success" &&
      this.state.descriptionState === "success"
    )
    {
      return true;
    } else {
      if (this.state.titleState !== "success") {
        this.setState({ titleState: "error" });
      }
      if (this.state.teamNameState !== "success") {
        this.setState({ teamNameState: "error" });
      }
      if (this.state.descriptionState !== "success") {
        this.setState({ descriptionState: "error" });
      }
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            Let's start with the basic information
          </h4>
        </GridItem>
        <GridItem xs={12} sm={4}>
          <PictureUpload />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CustomInput
            success={this.state.titleState === "success"}
            error={this.state.titleState === "error"}
            labelText={
              <span>
                Project Name <small>(required)</small>
              </span>
            }
            id="title"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "title", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Assignment className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={this.state.teamNameState === "success"}
            error={this.state.teamNameState === "error"}
            labelText={
              <span>
                Team Name <small>(required)</small>
              </span>
            }
            id="teamName"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "teamName", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Group className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
        <CustomInput
            success={this.state.descriptionState === "success"}
            error={this.state.descriptionState === "error"}
            labelText={
              <span>
                Description <small>(required)</small>
              </span>
            }
            id="description"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "description", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Create className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step1);
