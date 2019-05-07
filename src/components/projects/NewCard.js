import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import Dropdown from 'react-bootstrap/Dropdown'
import moment from "moment";


class NewCard extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            //dueDate: moment(new Date()).format('YYYY-MM-DD')
            assignedTo: 'none',
          }
        }

    handleDatechange(event,dueDate){
        this.setState({dueDate: dueDate})
    }

    updateField = (field, evt) => {
      this.setState({[field]: evt.target.value})
    }
  
    handleAdd = () => {
        const newCard = {
            title: this.state.title,
            description: this.state.description,
            dueDate: this.state.dueDate._d,
            points: this.state.points,
            assignedTo: this.state.assignedTo
        }
        this.props.onCardAdd(newCard , this.props.laneId)
        this.props.onCancel()
    }
    
    handleDateChange = date => {
        this.setState({ dueDate: date });
      };

      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    render() {
      const {onCancel, users} = this.props

      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <Card style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
          <div style={{padding: 5, margin: 5}}>
            <div>
              <div style={{marginBottom: 5}}>
              </div>
               <TextField
                id="title"
                label="Title"
                placeholder="Title..."
                value={this.state.name}
                onChange={evt => this.updateField('title', evt)} 
                margin="normal"
                variant="outlined"
                />
                <div/>
              <TextField
                id="description"
                label="Description"
                placeholder="Description..."
                multiline
                margin="normal"
                variant="outlined"
                onChange={evt => this.updateField('description', evt)} 
                />
                <div/>
                <TextField
                    id="assignedTo"
                    select
                    label="Assign"
                    value={this.state.assignedTo}
                    onChange={this.handleChange('assignedTo')}
                    margin="normal"
                    >
                    {users && users.map(user => (
                        <MenuItem key={user.id} value={user.firstName+' '+user.lastName}>
                        {user.firstName} {user.lastName}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                style={{marginLeft: 20, width: 100}}
                id="points"
                label="Points"
                value={this.state.points || ''}
                onChange={this.handleChange('points')}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                
                />
                <div/>
                <DatePicker
                margin="normal"
                label="Date picker"
                value={this.state.dueDate}
                onChange={this.handleDateChange}
                /> 
                
            </div>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={onCancel}>Cancel</button>
            <button label="submit"></button>
          </div>
        </Card>
        </MuiPickersUtilsProvider>
      )
    }
  }

  export default NewCard