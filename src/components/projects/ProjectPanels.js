import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectBoard from './ProjectBoard'
import CommentContainer from '../comments/CommentContainer'

import Daily from './Daily'
import Dashboard from "@material-ui/icons/Dashboard";
import Comment from "@material-ui/icons/Comment";
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



import { cardTitle } from "../../customs/assets/jss/material-dashboard-pro-react";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
};

class ProjectPanels extends React.Component {
  render() {
    const { projectID , comments, project, classes, cards, columns, profile } = this.props; 
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.pageSubcategoriesTitle}>
              {project.title}
            </h3>
            <br />
            <NavPills
              color="rose"
              alignCenter
              tabs={[
                {
                  tabButton: "Board",
                  tabIcon: Dashboard,
                  tabContent: (
                    <ProjectBoard columns={columns} projectID={projectID} cards={cards} />
                  )
                },
                {
                    tabButton: "Comments",
                    tabIcon: Comment,
                    tabContent: (
                        <CommentContainer projectID={projectID} profile={profile} comments={comments} />
                    )
                  },
                {
                  tabButton: "Daily",
                  tabIcon: chartIcon,
                  tabContent: (
                    <h4 className={classes.cardTitle}>
                    <Daily/>
                  </h4>
                  )
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectPanels);
