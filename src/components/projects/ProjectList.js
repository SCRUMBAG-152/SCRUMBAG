import React, { useState } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import PropTypes from 'prop-types';

const styles = {
  arrowButton:{
    color: 'pink'
  }
}

const ProjectList = ({projects}) => {

  const [items, setItems] = useState(5)//number of items displayed, initialized at 5
  //const result = projects.filter(project => (project.authorFirstName === "Phuong" ))

  return (
    <div className="project-list section">
      { projects && projects.slice(0, items).map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      })} 
      <Button onClick={()=>setItems(items+4)}>
      <ArrowDropDown/>
      </Button> 
    </div>
  )
}


export default (ProjectList)

