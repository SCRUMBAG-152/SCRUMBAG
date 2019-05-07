import React from 'react'
import moment from 'moment' //date format

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const style = {
  card: {
    height: 200,
    borderRadius: '10px'
  },
  name: {
    color: '#ec407a'
  },
  teamName: {
    color: '#9c27b0'
  },
  postedBy: {
    fontSize: '15px'
  }
}

const ProjectSummary = ({project}) => {
  return (
      <Card style={style.card}>
        <CardContent>
         <Typography variant="h5" component="h3">
                {project.title}
          </Typography>
          <Typography component="p" style={style.postedBy}>
              Created By <span style={style.teamName}>{project.teamName}</span> of 
              <span style={style.name}> {project.authorCompany}</span>
            </Typography>
            <Typography component="p" style={style.time} color='textSecondary'>
              {moment(project.createdAt.toDate()).calendar()}
            </Typography>
        </CardContent>
      </Card>
  )
}



export default ProjectSummary
