import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CheckCircle from "@material-ui/icons/CheckCircle";


// core components
import GridContainer from "../../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../../customs/components/Grid/GridItem.jsx";

import customSelectStyle from "../../../customs/assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  icon:{
    height: '150px',
    width: '150px',
    textAlign: "center",
    paddingTop: '1rem',
    color: '#e91e63'
  },
  ...customSelectStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false
    };
  }
  sendState() {
    return this.state;
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Your project is ready! Click finish to get started</h4>
        </GridItem>
        <GridItem className={classes.icon} xs={12} sm={12}>
          <CheckCircle className={classes.icon} />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step3);
