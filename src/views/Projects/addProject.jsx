import fire from "config/Fire.jsx";
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";


//import { bool } from "prop-types";

class AddProject extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      companyName: "",
      projectDescription: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }

  
  async componentDidMount() {
   
    const projectRef = await fire
      .collection("Projects")
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        }));
    console.log("project reference", projectRef);
    

 

    this.setState({
      projectName: "",
      companyName: "",
      projectDescription: ""
    });
  }

 
  
 

  newTask = async task => {
    await fire.collection("Projects").add({
      projectName: this.state.projectName,
      companyName: this.state.companyName,
      projectDescription: this.state.projectDescription,
    });
    this.componentDidMount();
    console.log("Completed Adding a Project.");
  };

  render() {

    {/*
    let columns = this.state.columns;
    let optionItems = columns.map((column, index) => (
      <option
        name="columnID"
        key={index}
        value={column.id}
        onChange={this.handleChange}
      >
        {column.columnName}
      </option>
    )); */}

  

    return (
      <div id="AddProject">
        <GridContainer>
          <GridItem /* xs={12} sm={6} md={6} lg={3} */>
            <Card raised>
              <CardHeader color="danger">ADD A PROJECT</CardHeader>
              <CardBody>
                <form>
                  <label>
                    Project Name:
                    <input
                      type="text"
                      name="ProjectName"
                      onChange={this.handleChange}
                      value={this.state.ProjectName}
                    />
                  </label>
                  <br/>
                  <label>
                    Company Name:
                    <input
                      type="text"
                      name="CompanyName"
                      onChange={this.handleChange}
                      value={this.state.CompanyName}
                    />
                    <br/>
                  </label>
                  <label>
                    Project Description:
                    <input
                      type="text"
                      name="ProjectDescription"
                      onChange={this.handleChange}
                      value={this.state.ProjectDescription}
                    />
                  </label>
                </form>
              </CardBody>
              <CardFooter>
                <Button size="small" color="secondary">
                  Cancel
                </Button>
                <Button size="small" onClick={this.newProject}>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

AddProject.propTypes = {
  classes: PropTypes.object.isRequired
}

export default AddProject;
