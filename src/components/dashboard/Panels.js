import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Gavel from "@material-ui/icons/Gavel";
import HelpOutline from "@material-ui/icons/HelpOutline";

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
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.pageSubcategoriesTitle}>
              Scrumbag
            </h3>
            <br />
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Description",
                  tabIcon: Info,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Description about product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </CardBody>
                    </Card>
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
                  tabButton: "Legal Info",
                  tabIcon: Gavel,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Legal info of the product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "Help Center",
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
