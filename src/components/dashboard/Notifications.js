import React from 'react'
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const style = {
  card: {
    marginTop: '1rem',
    maxWidth: 450,
    borderRadius: '10px'
  },
  name: {
    color: 'pink'
  },
  postedBy: {
    fontSize: '15px'
  }
}

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <Card style={style.card}>
      <CardContent>
      <Typography variant="h5" component="h3">Notifications</Typography>
          <ul className="notifications">
            { notifications && notifications.map(notification => {
              return (
                <li key={notification.id}>
                  <span className="pink-text"> {notification.user} </span>
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
  )
}

export default Notifications
