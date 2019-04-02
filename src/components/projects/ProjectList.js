import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 200,
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#e8eaed',
    boxShadow: '1px 0px 10px 0px rgba(0,0,0,0.50) inset'
  },
  newProject: {
    paddingTop: '2rem'
  },
});


const ProjectList = ({projects, classes}) => {

  //const [items, setItems] = useState(5)//number of items displayed, initialized at 5
  //const result = projects.filter(project => (project.authorFirstName === "Phuong" ))

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to={'/create'}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.newProject} variant="h5" component="h3" color="textSecondary" >
                New Project
              </Typography>
              <Typography variant="h2" component="h2" color="textSecondary" >
                +
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        { projects && projects.map(project => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <Link to={'/project/' + project.id} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            </Grid>
          )
        })} 
      </Grid> 
    </div>
  )
}

ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList)

