import React from 'react'

import PropTypes from 'prop-types'
// react plugin for creating charts
import ChartistGraph from 'react-chartist'
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Icon from '@material-ui/core/Icon'



// @material-ui/icons
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'


// core components
import GridContainer from '../../customs/components/Grid/GridContainer.jsx'
import GridItem from '../../customs/components/Grid/GridItem.jsx'
import Card from '../../customs/components/Card/Card.jsx'
import CardHeader from '../../customs/components/Card/CardHeader.jsx'
import CardIcon from '../../customs/components/Card/CardIcon.jsx'
import CardFooter from '../../customs/components/Card/CardFooter.jsx'


import dashboardStyle from './dashboardStyle/dashboardStyle'

const Analytics = (props) => {
    const { classes } = props
  return (
    <GridContainer>
        <GridItem xs={12} sm={6}>
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
        <GridItem xs={12} sm={6}>
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
        <GridItem xs={12} sm={6}>
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
        <GridItem xs={12} sm={6}>
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
  )
}

Analytics.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(dashboardStyle)(Analytics)
