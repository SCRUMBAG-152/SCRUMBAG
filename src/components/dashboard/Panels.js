import React from "react";
import Notifications from './Notifications';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Analytics from './Analytics'
import Daily from './Daily'

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
    const { classes, notifications } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h3 className={classes.pageSubcategoriesTitle}>
              Scrumbag
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
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Location of the product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                        <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </CardBody>
                    </Card>
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
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>Help center</h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        From the seamless transition of glass and metal to the
                        streamlined profile, every detail was carefully
                        considered to enhance your experience. So while its
                        display is larger, the phone feels just right.
                        <br />
                        <br />
                        Another Text. The first thing you notice when you hold
                        the phone is how great it feels in your hand. The cover
                        glass curves down around the sides to meet the anodized
                        aluminum enclosure in a remarkable, simplified design.
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
