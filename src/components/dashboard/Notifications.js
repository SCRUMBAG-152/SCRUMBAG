import React from 'react'
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../../customs/components/Grid/GridContainer'
import GridItem from '../../customs/components/Grid/GridItem'


const style = {
 name: {
   color: '#ec407a'
 }
}

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <GridContainer justify="center">
    <GridItem xs={10}>
        <Card style={style.card}>
          <CardContent>
          <Typography variant="h5" component="h3">Notifications</Typography>
              <ul className="notifications">
                { notifications && notifications.map(notification => {
                  return (
                    <li key={notification.id}>
                      <span style={style.name}> {notification.user} </span>
                      <span>{notification.content}</span>
                      <div className="grey-text note-date">
                        {moment(notification.time.toDate()).fromNow()}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
        </Card>
        </GridItem>
        </GridContainer>
  )
}

export default Notifications
