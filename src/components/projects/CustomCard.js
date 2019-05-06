import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import moment from "moment";
import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const style= {
    header: {
        borderBottom: '1px solid #eee',
        margin: 10,
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black'
    },
    dueDate: {
        fontSize: 11
    },
    description: {
        color: '#4C4C4C', margin: 10
    },
    avatar: {
        width: '30px', 
        height:'30px', 
        margin: 10, 
        marginTop: '2rem',
        textAlign: 'center', 
        fontSize: 15
    },
    points: {
        fontSize: 15,
        marginRight: -90,
        marginBottom: 5
    }
    
}

const CustomCard = props => {
    return (
      <Card>
        <header
          style={style.header}>
          <Typography style={{fontSize: 14, fontWeight: 'bold'}}>{props.title}</Typography>
          <div style={style.dueDate}><Countdown date={props.dueDate.toDate()} /></div>
        </header>
        <div style={{fontSize: 12, color: '#BD3B36'}}>
          <div style={style.description}>{props.description}</div>
          <Grid alignItems="flex-end" justify="space-between" container direction="row" spacing={24}>
             <Grid item xs={6}>
                <Avatar style={style.avatar}>
                    TN
                </Avatar>
            </Grid>
            <Grid style={style.points} item xs={6}>
                {props.points}
            </Grid>
          </Grid>
        </div>
      </Card>
    )
  }

  //props.title, props.subtitle, props.escalationText

  export default CustomCard