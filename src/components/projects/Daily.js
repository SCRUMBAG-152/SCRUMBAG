import React from 'react'

import PropTypes from 'prop-types'
// react plugin for creating charts
import ChartistGraph from 'react-chartist'
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'


// @material-ui/icons

import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'

// core components
import GridContainer from '../../customs/components/Grid/GridContainer'
import GridItem from '../../customs/components/Grid/GridItem'
import Card from '../../customs/components/Card/Card'
import CardHeader from '../../customs/components/Card/CardHeader'
import CardBody from '../../customs/components/Card/CardBody'
import CardFooter from '../../customs/components/Card/CardFooter'
import Button from '../../customs/components/CustomButtons/Button'


import dashboardStyle from '../dashboard/dashboardStyle/dashboardStyle'

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
  } from '../../customs/variables/charts'


const Daily = (props) => {
    
const { classes } = props
  return (
    <GridContainer>
          <GridItem xs={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color='info' className={classes.cardHeaderHover}>
                <ChartistGraph
                  className='ct-chart-white-colors'
                  data={dailySalesChart.data}
                  type='Line'
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='Refresh'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button simple color='info' justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Change Date'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Daily Activities</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 15%
                  </span>{' '}
                  increase in productivity.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color='warning' className={classes.cardHeaderHover}>
                <ChartistGraph
                  className='ct-chart-white-colors'
                  data={emailsSubscriptionChart.data}
                  type='Bar'
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='Refresh'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button simple color='info' justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Change Date'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} >
            <Card chart className={classes.cardHover}>
              <CardHeader color='danger' className={classes.cardHeaderHover}>
                <ChartistGraph
                  className='ct-chart-white-colors'
                  data={completedTasksChart.data}
                  type='Line'
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='Refresh'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button simple color='info' justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Change Date'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>Lastest Github branch</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 1 day ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
  )
}

Daily.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(dashboardStyle)(Daily)