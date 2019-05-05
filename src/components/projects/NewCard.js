import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import Dropdown from 'react-bootstrap/Dropdown'
import moment from "moment";


class NewCard extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            //dueDate: moment(new Date()).format('YYYY-MM-DD')
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
    }
    
    handleDateChange = date => {
        this.setState({ dueDate: date });
        console.log(this.state.dueDate)
      };

    render() {
      const {onCancel} = this.props
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <Card style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
          <div style={{padding: 5, margin: 5}}>
            <div>
              <div style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('title', evt)} placeholder="Title" />
              </div>
              <div style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('description', evt)} placeholder="Description" />
              </div>
              <div style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('points', evt)} placeholder="Points" />
              </div>
              <div class="dropdown" style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('assignedTo', evt)} placeholder="Assigned To" />
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
            <DatePicker
            margin="normal"
            label="Date picker"
            value={this.state.dueDate}
            onChange={this.handleDateChange}
          />
            </div>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </Card>
        </MuiPickersUtilsProvider>
      )
    }
  }

  export default NewCard