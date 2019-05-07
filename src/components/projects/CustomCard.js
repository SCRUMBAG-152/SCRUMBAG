import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Countdown from 'react-countdown-now';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CheckCircle from "@material-ui/icons/CheckCircle";



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
        marginRight: '-90px',
        marginBottom: 5,
    },
    complete: {
        color: 'green'
    }
    
}

const initials = name =>{
    let matches = name.match(/\b(\w)/g)
    return matches.join('');
}

const CustomCard = props => {
    return (
      <Card>
        <header
          style={style.header}>
          <Typography style={{fontSize: 14, fontWeight: 'bold'}}>{props.title}</Typography>
            {props.completed ? (
                <CheckCircle style = {style.complete} />
            ):(
                <div style={style.dueDate}><Countdown date={props.dueDate.toDate()} /></div>
            )
            } 
        </header>
        <div style={{fontSize: 12, color: '#BD3B36'}}>
          <div style={style.description}>{props.description}</div>
          <Grid alignItems="flex-end" justify="space-between" container direction="row" spacing={24}>
             <Grid item xs={6}>
                <Avatar style={style.avatar}>
                    {initials(props.assignedTo)}
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