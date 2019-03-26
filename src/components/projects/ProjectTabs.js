import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import BoardIcon from '@material-ui/icons/Dashboard';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
    justifyContent: 'center',
    display: 'flex',
    margin: '20px auto'

  },
};

class ProjectTabs extends React.Component {

  handleChange= (e, value) =>{
      this.props.handleTabChange(e, value)
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.props.tabValue}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<BoardIcon />} label="BOARD" />
          <Tab icon={<CommentIcon />} label="COMMENTS" />
          <Tab icon={<SettingsIcon />} label="SETTINGS" />
        </Tabs>
      </Paper>
    );
  }
}

ProjectTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectTabs);