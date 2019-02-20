import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
// import Place from "@material-ui/icons/Place";
import ArtTrack from '@material-ui/icons/ArtTrack'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import fire from 'config/Fire.jsx'
import AddProject from './addProject.jsx'

class Dashboard extends React.Component {
  constructor (props) {
    
    super(props)
    this.handleTaskClick = this.handleTaskClick.bind(this)
    this.state = {
      projects: []
    }
  }

  handleTaskClick () {
    this.setState(prevState => ({
      taskPressed: !prevState.taskPressed
    }))
  }

  
  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  getProjects = async () => {
    const projectList = await fire
      .collection('Projects')
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    this.setState({
      projects: projectList
    })
  }

  async componentDidMount () {
    this.getProjects()
  }

  newProject = async project => {
    await fire.collection('Projects').add({
      companyName: 'Starbucks',
      projectName: 'test',
      projectDescription: 'test'
    })

    this.getProjects()

    console.log('Completed Adding a Project.')
  }

  deleteProject = async id => {
    // console.log("task", task.columnID);
    await fire
      .collection('Projects')
      .doc(id)
      .delete()

    this.getProjects()
  }

  render () {
    const { classes } = this.props
    //const { projects } = this.state

    const taskPressed = this.state.taskPressed
    let taskBox

    if (taskPressed) {
      taskBox = <AddProject>Show</AddProject>
    } else {
      taskBox = null
    }

    let projList = this.state.projects
    let optionItems = projList.map((project, index) => (
      <GridItem xs={12} sm={12} md={4} key={index}>
        <Card product className={classes.cardHover}>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id='tooltip-top'
                title='View'
                placement='bottom'
                classes={{ tooltip: classes.tooltip }}>
                <Button color='transparent' simple justIcon>
                  <ArtTrack className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id='tooltip-top'
                title='Edit'
                placement='bottom'
                classes={{ tooltip: classes.tooltip }}>
                <Button color='success' simple justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id='tooltip-top'
                title='Remove'
                placement='bottom'
                classes={{ tooltip: classes.tooltip }}>
                <Button
                  onClick={() => this.deleteProject(project.id)}
                  color='danger'
                  simple
                  justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>

            <h4 className={classes.cardProductTitle}>
              <p />
              {project.projectName}
            </h4>

            <p className={classes.cardProductDesciprion}>
              {project.projectDescription}
            </p>
          </CardBody>
          <CardFooter product>
            <div className={classes.price}>
              <h4>{project.companyName}</h4>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    ))

    return (
      <div>
        <Button onClick={this.handleTaskClick}>
          Add Project
        </Button>
        {taskBox}

        <Button onClick={() => this.newProject()}>New Project</Button>
        <h3>Manage Projects</h3>
        <GridContainer>{optionItems}</GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
