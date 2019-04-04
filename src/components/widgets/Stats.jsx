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


const csvData = [
  ["firstname", "lastname", "email"],
  ["Smith", "Tom", "tom@smith.com"],
  ["Doe", "Jane", "JaneTheDoe@gmail.com"],
  ["Test3", "Mary", "test@test.com"]
];

//const projID = qUggSmcKgWIcdBBV2gjZ;


class Stats extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="React Chartist"
          category={
            <span>
              A react wrapper for{" "}
              <a
                target="_blank"
                href="https://gionkunz.github.io/chartist-js/"
                rel="noopener noreferrer"
              >
                Chartist.js
              </a>. Please checkout the{" "}
              <a
                href="https://gionkunz.github.io/chartist-js/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                full documentation of Chartist.js
              </a>{" "}
              and{" "}
              <a
                href="https://fraserxu.me/react-chartist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                full documentation of react-chartist
              </a>.
            </span>
          }
        />
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="rose">
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={roundedLineChart.data}
                  type="Line"
                  options={roundedLineChart.options}
                  listener={roundedLineChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Rounded Line Chart</h4>
                <p className={classes.cardCategory}>Line Chart</p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={straightLinesChart.data}
                  type="Line"
                  options={straightLinesChart.options}
                  listener={straightLinesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Straight Lines Chart</h4>
                <p className={classes.cardCategory}>Line Chart with Points</p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={simpleBarChart.data}
                  type="Bar"
                  options={simpleBarChart.options}
                  responsiveOptions={simpleBarChart.responsiveOptions}
                  listener={simpleBarChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Simple Bar Chart</h4>
                <p className={classes.cardCategory}>Bar Chart</p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Coloured Line Chart <small>- Rounded</small>
                </h4>
              </CardHeader>
              <CardBody>
                <ChartistGraph
                  data={colouredLineChart.data}
                  type="Line"
                  options={colouredLineChart.options}
                  listener={colouredLineChart.animation}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Multiple Bars Chart <small>- Bar Chart</small>
                </h4>
              </CardHeader>
              <CardBody>
                <ChartistGraph
                  data={multipleBarsChart.data}
                  type="Bar"
                  options={multipleBarsChart.options}
                  listener={multipleBarsChart.animation}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
            <Card>
              <CardHeader color="warning" icon>
                <CardIcon color="warning">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Coloured Lines Chart <small>- Rounded</small>
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
          <GridItem xs={12} sm={12} md={5}>
            <Card>
              <CardHeader color="danger" icon>
                <CardIcon color="danger">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Pie Chart</h4>
              </CardHeader>
              <CardBody>
                <ChartistGraph
                  data={pieChart.data}
                  type="Pie"
                  options={pieChart.options}
                />
              </CardBody>
              <CardFooter stats className={classes.cardFooter}>
                <h6 className={classes.legendTitle}>Legend</h6>
                <i className={"fas fa-circle " + classes.info} /> Apple{` `}
                <i
                  className={"fas fa-circle " + classes.warning}
                /> Samsung{` `}
                <i className={"fas fa-circle " + classes.danger} /> Windows
                Phone{` `}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
   

        <GridContainer>
          <GridItem>
            <card>
              <CardBody>
                <h1>Testing for export</h1>
              </CardBody>
            </card>
            <card>
              <CardBody>
              <CSVLink data={csvData} filename={"scrumbag_data.csv"}>Download me</CSVLink>
              </CardBody>
            </card>
          </GridItem>

          { /*<GridItem>
            <card>
              <CardBody>
                <h3>Project Description</h3>
                { projID.description }
                <br/>
                <h3>Author Name</h3>
                { projID.authorFirstName }
                <br/>
              </CardBody>
            </card>
          </GridItem>
          </GridContainer>*/}

      </div>
    
    )
  }
}

export default withStyles(chartsStyle)(Stats);
