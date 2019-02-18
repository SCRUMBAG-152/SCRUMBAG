import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
// import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
// import Danger from "components/Typography/Danger.jsx";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
// import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

//import project1 from "assets/img/project1.jpg";
//import project2 from "assets/img/project2.png";
//import project3 from "assets/img/project3.jpeg";

import fire from "config/Fire.jsx";


class Dashboard extends React.Component {
  state = {
    projects: []
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  async componentDidMount() {
    const projectList = await fire.collection('Projects')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()))
    console.log("Projects List: ", projectList)

    this.setState({
      projects: projectList
    })

    //  var docRef = fire.collection('Projects').doc('Organize Shelves')
    // docRef.get().then(function(doc) {console.log("Document Data:", doc.data())})

  };





render() {
    const { classes } = this.props
    const { projects } = this.state

    var len = projects.length
    var i = 0
    var dbarray = []
    for (i; i < len; i++) {
      dbarray[i] = "kristen" + i + ", "
    }
    let projList = this.state.projects;
    let optionItems = projList.map((project, index) => (
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
        
              <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>


              <h4 className={classes.cardProductTitle}>

              <p>{project.projectName} </p>
              <p>{project.companyName} </p>
              <p>{project.projectDescription}</p>
              </h4>
            

                

                  

              
              
            </CardBody>
          <CardFooter product>
          <div className={classes.price}>
            <h4>EpicGames</h4>
          </div>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <Place /> Funland, Mars
          </div>
        </CardFooter>
      </Card>
      </GridItem>
      </GridContainer>
    ));

 
return (
  <div>
        <h3>Manage Projects</h3>

 
                 
                      {optionItems}
                  
  </div>
         


         
       
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
