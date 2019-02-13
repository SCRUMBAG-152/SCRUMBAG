//= ========================================Imports Start=========================================//

import React from 'react'
import PropTypes from 'prop-types'
import Tasks from 'components/Tasks/Tasks.jsx'
import { bugs } from 'variables/general.jsx'
import fire from '../../config/Fire.jsx'

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

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts'

import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'

import project1 from 'assets/img/project1.jpg'
import project2 from 'assets/img/project2.png'
import project3 from 'assets/img/project3.jpeg'
//= ========================================Imports End=========================================//

//= ========================================Declares Start=========================================//

const us_flag = require('assets/img/flags/US.png')
const de_flag = require('assets/img/flags/DE.png')
const au_flag = require('assets/img/flags/AU.png')
const gb_flag = require('assets/img/flags/GB.png')
const ro_flag = require('assets/img/flags/RO.png')
const br_flag = require('assets/img/flags/BR.png')
//= ========================================Declares End=========================================//

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
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  async componentDidMount(){
    const data = await fire.collection("user").get()
    const results = data.docs.map(doc => doc.data())
    this.setState({
      users:results
    })
    //.then((doc) => console.log(doc.data()))
    // data.docs.map(doc => console.log(doc))
    
  }

  render () {
    const { classes } = this.props
    const { users } = this.state
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='danger'>
                <h4 style={{ color: 'White' }} className={classes.cardTitle}>
                  Backlog
                </h4>
                <p>Things waiting to be started</p>
              </CardHeader>
              <CardBody>
                {users ? users.map(user => ( // ternary operator if users exist map if not load
                    <p key={user.name}>{user.name}</p> 
                )) : <p>loading</p>}
                {/* <Tasks
                  checkedIndexes={[0]}
                  tasksIndexes={[0, 1, 2]}
                  tasks={bugs}
                /> */}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='info'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  To-do
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
              <CardBody>
                <Tasks
                  checkedIndexes={[0, 3]}
                  tasksIndexes={[0, 3]}
                  tasks={bugs}
                />
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='success'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  Doing
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
              <CardBody>
                <Tasks checkedIndexes={[3]} tasksIndexes={[3]} tasks={bugs} />
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='rose'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  Done
                </h4>
                <p>Category subtitle</p>
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
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
