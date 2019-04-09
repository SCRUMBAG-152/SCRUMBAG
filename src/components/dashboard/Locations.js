import React from 'react'

import PropTypes from 'prop-types'
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { VectorMap } from "react-jvectormap";

// core components
import GridContainer from '../../customs/components/Grid/GridContainer'
import GridItem from '../../customs/components/Grid/GridItem'
import Card from '../../customs/components/Card/Card'
import CardHeader from '../../customs/components/Card/CardHeader'
import CardIcon from '../../customs/components/Card/CardIcon'
import CardBody from "../../customs/components/Card/CardBody.jsx";
import Table from "../../customs/components/Table/Table.jsx";
import Language from "@material-ui/icons/Language";
import dashboardStyle from './dashboardStyle/dashboardStyle'

const us_flag = require("../../customs/assets/img/flags/US.png");
const de_flag = require("../../customs/assets/img/flags/DE.png");
const au_flag = require("../../customs/assets/img/flags/AU.png");
const gb_flag = require("../../customs/assets/img/flags/GB.png");
const ro_flag = require("../../customs/assets/img/flags/RO.png");
const br_flag = require("../../customs/assets/img/flags/BR.png");

let mapData = {
    AU: 760,
    BR: 550,
    CA: 120,
    DE: 1300,
    FR: 540,
    GB: 690,
    GE: 200,
    IN: 200,
    RO: 600,
    RU: 300,
    US: 2920
  };

const Locations = (props) => {
    const { classes } = props
  return (
    <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Language />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Global Sales by Top Locations
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={5}>
                    <Table
                      tableData={[
                        [
                          <img src={us_flag} alt="us_flag" />,
                          "USA",
                          "2.920",
                          "53.23%"
                        ],
                        [
                          <img src={de_flag} alt="us_flag" />,
                          "Germany",
                          "1.300",
                          "20.43%"
                        ],
                        [
                          <img src={au_flag} alt="us_flag" />,
                          "Australia",
                          "760",
                          "10.35%"
                        ],
                        [
                          <img src={gb_flag} alt="us_flag" />,
                          "United Kingdom",
                          "690",
                          "7.87%"
                        ],
                        [
                          <img src={ro_flag} alt="us_flag" />,
                          "Romania",
                          "600",
                          "5.94%"
                        ],
                        [
                          <img src={br_flag} alt="us_flag" />,
                          "Brasil",
                          "550",
                          "4.34%"
                        ]
                      ]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "280px"
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial"
                          }
                        ]
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
  )
}

Locations.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(dashboardStyle)(Locations)
