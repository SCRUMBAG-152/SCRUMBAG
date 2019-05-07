import { cardTitle } from "../../material-dashboard-pro-react";
const userProfileStyles = {
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCompany: {
    marginTop: "10px",
    color: "#ec407a !important",
    textAlign: "center"
  },
  cardPosition: {
    color: "#999999 !important",
    marginTop: '0 !important',
    textAlign: "center",
    marginBottom: '5px !important'
  },
  description: {
    marginTop:'0px',
  },
  updateProfileButton: {
    float: "right"
  },
  stats: {
    color: "#999999",
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px"
    }
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0"
  },
};
export default userProfileStyles;
