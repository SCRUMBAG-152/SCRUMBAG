import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


 class CustomLaneHeader extends Component {

    handleClick(){
        this.props.onLaneDelete(this.props.id)
        this.props.actions.removeLane(this.props.id)
      }
    
    render() {
        return (
            <Grid container spacing={24} justify='flex-end' style={{flex: 1}}>
            <Grid item xs={6} style={{flex: 1}}>
            <Typography variant="h5" component="h3" color="textSecondary"> {this.props.title} </Typography>
            </Grid>
            <Grid item xs={6}>
            <IconButton onClick={this.handleClick.bind(this)} style={{marginTop: 0, padding: 0, marginLeft: 90}}>
                <DeleteIcon/>
            </IconButton>
            </Grid>
            </Grid>
        )
    }
}

export default CustomLaneHeader


