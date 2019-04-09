import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
//react plugin for exporting to csv
import { CSVLink, CSVDownload } from "react-csv";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "../../customs/components/Heading/Heading";
import GridContainer from "../../customs/components/Grid/GridContainer";
import GridItem from "../../customs/components/Grid/GridItem";

import Card from "../../customs/components/Card/Card";
import CardHeader from "../../customs/components/Card/CardHeader.jsx";
import CardIcon from "../../customs/components/Card/CardIcon.jsx";
import CardBody from "../../customs/components/Card/CardBody.jsx";
import CardFooter from "../../customs/components/Card/CardFooter.jsx";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "../../customs/variables/charts";

import chartsStyle from "../../customs/assets/jss/material-dashboard-pro-react/views/chartsStyle";
import { card } from "../../customs/assets/jss/material-dashboard-pro-react";


const csvData = [
  ["firstname", "lastname", "email"],
  ["Smith", "Tom", "tom@smith.com"],
  ["Doe", "Jane", "JaneTheDoe@gmail.com"],
  ["Test3", "Mary", "test@test.com"]
];



class Stats extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Charts and Export Testing"
          category={
            <span>
              A testing page so I don't mess up the pretty projects page.
            </span>
          }
        />

        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
            <Card>
              <CardHeader color="warning" icon>
                <CardIcon color="warning">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Burndown Chart
                </h4>
              </CardHeader>
              <CardBody>
                <ChartistGraph
                  data={colouredLinesChart.data}
                  type="Line"
                  options={colouredLinesChart.options}
                  listener={colouredLinesChart.animation}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardHeader>
              <h4>Testing for export</h4>
              </CardHeader>
              <CardBody>
                <CSVLink data={csvData} filename={"scrumbag_data.csv"}>Download me</CSVLink>
              </CardBody>
            </Card>
          </GridItem>
          
        </GridContainer>
   

        </div>
    
    )
  }
}

export default withStyles(chartsStyle)(Stats);
