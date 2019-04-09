import React from "react";
import Notifications from './Notifications';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Analytics from './Analytics'
import Daily from './Daily'
import Locations from './Locations'

import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Forum from "@material-ui/icons/Forum";
import chartIcon from "@material-ui/icons/Timeline"


// core components
import GridContainer from "../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../customs/components/Grid/GridItem.jsx";
import NavPills from "../../customs/components/NavPills/NavPills.jsx";
import Card from "../../customs/components/Card/Card.jsx";
import CardHeader from "../../customs/components/Card/CardHeader.jsx";
import CardBody from "../../customs/components/Card/CardBody.jsx";
import Button from "../../customs/components/CustomButtons/Button.jsx";
import CardAvatar from "../../customs/components/Card/CardAvatar.jsx";


import avatar from "../../customs/assets/img/professor.png";

import { cardTitle } from "../../customs/assets/jss/material-dashboard-pro-react";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};

class Panels extends React.Component {
  render() {
    const { classes, notifications, profile } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h3 className={classes.pageSubcategoriesTitle}>
              {profile.company}
            </h3>
            <br />
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Analytics",
                  tabIcon: Info,
                  tabContent: (
                      <Analytics/>
                  )
                },
                {
                    tabButton: "Daily",
                    tabIcon: chartIcon,
                    tabContent: (
                        <Daily/>
                    )
                  },
                {
                  tabButton: "Location",
                  tabIcon: LocationOn,
                  tabContent: (
                   <Locations/>
                  )
                },
                {
                  tabButton: "Notifications",
                  tabIcon: NotificationsIcon,
                  tabContent: (
                    <Notifications notifications={notifications} />
                  )
                },
                {
                    tabButton: "Discussion",
                    tabIcon: Forum,
                    tabContent: (
                      <Card>
                        <CardHeader>
                          <h4 className={classes.cardTitle}>
                            Disscussion Board
                          </h4>
                          <p className={classes.cardCategory}>
                            Discuss with other team members or other teams
                          </p>
                        </CardHeader>
                        <CardBody>
                          This space is for future implementation of a discussion board.
                          <br />
                          <br />
                          A discussion board will help provide needed communications and promote bounching of ideas between members.
                        </CardBody>
                      </Card>
                    )
                },
                {
                  tabButton: "Help",
                  tabIcon: HelpOutline,
                  tabContent: (
                    <Card style={{marginTop: '3.5rem'}}profile>
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
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Panels);
