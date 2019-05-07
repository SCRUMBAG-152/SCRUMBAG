import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import GridContainer from "../../customs/components/Grid/GridContainer";
import GridItem from "../../customs/components/Grid/GridItem";
import Button from "../../customs/components/CustomButtons/Button";
import Card from "../../customs/components/Card/Card";
import CardBody from "../../customs/components/Card/CardBody";
import CardIcon from "../../customs/components/Card/CardIcon";
import CardHeader from "../../customs/components/Card/CardHeader";

import { updateRole } from '../../store/actions/memberActions'
import { cardTitle } from "../../customs/assets/jss/material-dashboard-pro-react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class ReactTables extends React.Component {

  data(users) {
    var i = 0
    var data = []
    if (users) {
      while (i < users.length) {
        data.push([users[i].firstName, users[i].lastName, users[i].role, users[i].company, users[i].id])
        ++i;
      }
    }
    return data;
  }

  derder(data, profile) {
    const outputs = data.map((prop, key) => {
      //console.log(profile.role);
      return {
        id: key,
        first: prop[0],
        last: prop[1],
        role: prop[2],
        company: prop[3],
        actions: (
          // we've added some custom button actions
          <div>
            {profile.role === "boss" && prop[2] !== "boss" ? (
              <div className="actions-right">
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => {
                    let obj = {
                      id: prop[4],
                      role: "admin"
                    }
                    this.props.updateRole(obj);
                  }}
                  color="info"
                  className="like"
                >
                  <Favorite />
                </Button>
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => {
                    let obj = {
                      id: prop[4],
                      role: "user"
                    }
                    this.props.updateRole(obj);
                  }}
                  color="warning"
                  className="edit"
                >
                  <DeleteIcon />
                </Button>
              </div>
            )
              :
              (<p></p>)
            }
          </div>
        )
      };
    })
    return outputs;
  }

  render() {
    const { classes, users, profile } = this.props;
    const userData = this.data(users);
    const data = this.derder(userData, profile);
    return (
      <GridContainer justify="center">
        <GridItem xs={10}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Company Members</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={data}
                filterable
                columns={[
                  {
                    Header: "First Name",
                    accessor: "first"
                  },
                  {
                    Header: "Last Name",
                    accessor: "last"
                  },
                  {
                    Header: "Role",
                    accessor: "role"
                  },
                  {
                    Header: "Company",
                    accessor: "company"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}


const mapStateToProps = (state, props) => {
  const users = state.firestore.ordered.users
  const profile = state.firebase.profile
  return {
    users: users,
    profile: profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRole: (newRole) => dispatch(updateRole(newRole)),
  }
}


//compose 2 higher order components

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((state) => [
    { collection: 'users', where: ['company', '==', `${state.profile.company}`] },
  ]))(withStyles(styles)(ReactTables));
