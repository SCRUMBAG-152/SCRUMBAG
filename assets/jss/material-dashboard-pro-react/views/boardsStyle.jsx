// ##############################
// // // Dashboard View styles
// #############################

import {
    successColor,
    tooltip,
    cardTitle
  } from "assets/jss/material-dashboard-pro-react.jsx";
  
  import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.jsx";
  
  const boardsStyle = {
    ...hoverCardStyle,
    tooltip,
    cardTitle: {
      ...cardTitle,
      marginTop: "0px",
      marginBottom: "3px"
    },
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px"
    },
    cardProductTitle: {
      ...cardTitle,
      marginTop: "0px",
      marginBottom: "3px",
      textAlign: "center"
    },
    cardCategory: {
      color: "#999999",
      fontSize: "14px",
      paddingTop: "10px",
      marginBottom: "0",
      marginTop: "0",
      margin: "0"
    },
    cardProductDesciprion: {
      textAlign: "center",
      color: "#999999"
    },

    successText: {
      color: successColor
    },
    upArrowCardCategory: {
      width: 14,
      height: 14
    },
    underChartIcons: {
      width: "17px",
      height: "17px"
    },
    cardStyle: {
        textAlign: "center"
    },
    card: {
        textAlign: "center"
      }
  };
  
  export default boardsStyle;
  