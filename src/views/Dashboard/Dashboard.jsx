import React from 'react'
import PropTypes from 'prop-types'
// react plugin for creating charts
import ChartistGraph from 'react-chartist'
// react plugin for creating vector maps
import { VectorMap } from 'react-jvectormap'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
// import Danger from "components/Typography/Danger.jsx";
// import Warning from "@material-ui/icons/Warning";
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import Place from '@material-ui/icons/Place'
import ArtTrack from '@material-ui/icons/ArtTrack'
import Language from '@material-ui/icons/Language'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Table from 'components/Table/Table.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import AddTask from '../Boards/addTask.jsx'

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts'

import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'

import project1 from 'assets/img/project1.jpg'
import project2 from 'assets/img/project2.png'
import project3 from 'assets/img/project3.jpeg'

const us_flag = require('assets/img/flags/US.png')
const de_flag = require('assets/img/flags/DE.png')
const au_flag = require('assets/img/flags/AU.png')
const gb_flag = require('assets/img/flags/GB.png')
const ro_flag = require('assets/img/flags/RO.png')
const br_flag = require('assets/img/flags/BR.png')

var mapData = {
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
}

class Dashboard extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <GridContainer>
          <AddTask />
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='warning' stats icon>
                <CardIcon color='warning'>
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Tasks Completed </p>
                <h3 className={classes.cardTitle}>35/50</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='success' stats icon>
                <CardIcon color='success'>
                  <Icon>group</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Active Members</p>
                <h3 className={classes.cardTitle}>7/10</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='danger' stats icon>
                <CardIcon color='danger'>
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='info' stats icon>
                <CardIcon color='info'>
                  <i className='fab fa-twitter' />
                </CardIcon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color='success' icon>
                <CardIcon color='success'>
                  <Language />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Active Users by Location
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify='space-between'>
                  <GridItem xs={12} sm={12} md={5}>
                    <Table
                      tableData={[
                        [
                          <img src={us_flag} alt='us_flag' />,
                          'USA',
                          '2.920',
                          '53.23%'
                        ],
                        [
                          <img src={de_flag} alt='us_flag' />,
                          'Germany',
                          '1.300',
                          '20.43%'
                        ],
                        [
                          <img src={au_flag} alt='us_flag' />,
                          'Australia',
                          '760',
                          '10.35%'
                        ],
                        [
                          <img src={gb_flag} alt='us_flag' />,
                          'United Kingdom',
                          '690',
                          '7.87%'
                        ],
                        [
                          <img src={ro_flag} alt='us_flag' />,
                          'Romania',
                          '600',
                          '5.94%'
                        ],
                        [
                          <img src={br_flag} alt='us_flag' />,
                          'Brasil',
                          '550',
                          '4.34%'
                        ]
                      ]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <VectorMap
                      map={'world_mill'}
                      backgroundColor='transparent'
                      zoomOnScroll={false}
                      containerStyle={{
                        width: '100%',
                        height: '280px'
                      }}
                      containerClassName='map'
                      regionStyle={{
                        initial: {
                          fill: '#e4e4e4',
                          'fill-opacity': 0.9,
                          stroke: 'none',
                          'stroke-width': 0,
                          'stroke-opacity': 0
                        }
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ['#AAAAAA', '#444444'],
                            normalizeFunction: 'polynomial'
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
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
          <GridItem xs={12} sm={12} md={4}>
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
          <GridItem xs={12} sm={12} md={4}>
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
        <h3>Manage Projects</h3>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href='#pablo' onClick={e => e.preventDefault()}>
                  <img src={project1} alt='...' />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='View'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <ArtTrack className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Edit'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='success' simple justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Remove'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='danger' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    Fortnite
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                  Action packed Massive Multiplayer Online game in battle royale
                  style with a ton of fun dances!
                </p>
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
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href='#pablo' onClick={e => e.preventDefault()}>
                  <img src={project2} alt='...' />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='View'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <ArtTrack className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Edit'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='success' simple justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Remove'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='danger' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    Watson
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                  Artificial Inteligence project featuring the newest
                  technologies by IBM, and Thien Nguyen the genius.
                </p>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <h4>IBM</h4>
                </div>
                <div className={`${classes.stats} ${classes.productStats}`}>
                  <Place /> Murica, US
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href='#pablo' onClick={e => e.preventDefault()}>
                  <img src={project3} alt='...' />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id='tooltip-top'
                    title='View' 
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='transparent' simple justIcon>
                      <ArtTrack className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Edit'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='success' simple justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id='tooltip-top'
                    title='Remove'
                    placement='bottom'
                    classes={{ tooltip: classes.tooltip }}>
                    <Button color='danger' simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href='#doesnt work' onClick={e => e.preventDefault()}>
                    Scrumbag
                  </a>
                </h4>
                <p className={classes.cardProductDesciprion}>
                  Task management tool in scrum style.
                </p>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <h4>ScrumBag</h4>
                </div>
                <div className={`${classes.stats} ${classes.productStats}`}>
                  <Place /> Fresno, CA
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
