import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import moment from "moment";
import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';


const CustomCard = props => {
    return (
      <Card>
        <header
          style={{
            borderBottom: '1px solid #eee',
            margin: 10,
            paddingBottom: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: 'black'
          }}>
          <Typography style={{fontSize: 14, fontWeight: 'bold'}}>{props.title}</Typography>
          <div style={{fontSize: 11}}><Countdown date={props.dueDate.toDate()} /></div>
        </header>
        <div style={{fontSize: 12, color: '#BD3B36'}}>
          <div style={{color: '#4C4C4C', fontWeight: 'bold', margin: 10}}>{props.description}</div>
          <div style={{color: '#4C4C4C', fontWeight: 'bold', margin: 10}}>{props.points}</div>
          <div style={{color: '#4C4C4C', fontWeight: 'bold', margin: 10}}>{props.assignedTo}</div>
          
          <div style={{marginTop: 10, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold'}}>
            {props.escalationText}
          </div>
        </div>
      </Card>
    )
  }

  //props.title, props.subtitle, props.escalationText

  export default CustomCard