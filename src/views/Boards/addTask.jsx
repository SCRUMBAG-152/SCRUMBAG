import fire from "config/Fire.jsx";
import React from 'react';

class AddTask extends React.Component {
    
    
      handleChange = (event, value) => {
        this.setState({ value })
      }
    
      handleChangeIndex = index => {
        this.setState({ value: index })
      }
    constructor(props) {
      super(props);
      this.state = {
        taskName: '',
        taskPoint: '',
        columnID: {value: ''},
        columns: []
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    async componentDidMount () {
        // const companyRef = await fire.collection("Companies").get().then(snapshot => snapshot.forEach((doc) => docs.push(doc.data()))
        const projectRef = await fire
          .collection('Columns')
          .where('projectID', '==', 'HogJ2XkOGTbEadJwAtoM')
          .get()
          .then(snapshot => snapshot.docs.map(doc => doc.data()))
          console.log('project reference', projectRef)

          /*const columnRef = await fire
          .collection('Columns')*/

          this.setState({
            taskName: '',
            taskPoint: '',
            //columnID: {value: ''},
            columns: projectRef
          })

        }

    
    
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      
    }
  
    render() {
        //const { projectRef } = this.state;
        let columns = this.state.columns;
        let optionItems = columns.map((column, index) =>
                <option key={index} value={column.columnName}>{column.columnName}</option>
            )
      return (
        <form>
          <label>
            Task Name:
            <input
              name="taskName"
              type="text"
              value={this.state.taskName}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Task Points:
            <input
              name="taskPoint"
              type="number"
              value={this.state.taskPoints}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Column:

            <select value="this.state.columnID" onChange={this.handleInputChange} >
                { optionItems }
                
            </select>
          </label>
        </form>
      );
    }
  }

  export default AddTask;