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
// core components
import GridContainer from "../../customs/components/Grid/GridContainer";
import GridItem from "../../customs/components/Grid/GridItem";
import Button from "../../customs/components/CustomButtons/Button";
import Card from "../../customs/components/Card/Card";
import CardBody from "../../customs/components/Card/CardBody";
import CardIcon from "../../customs/components/Card/CardIcon";
import CardHeader from "../../customs/components/Card/CardHeader";


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
        data.push([users[i].firstName, users[i].lastName, users[i].role, users[i].company])
        ++i;
      }
    }
    return data;
  }

  derder(data) {
    const outputs = data.map((prop, key) => {
      return {
        id: key,
        first: prop[0],
        last: prop[1],
        role: prop[2],
        company: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = outputs.find(o => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                  obj.first +
                  ", \nposition: " +
                  obj.last +
                  ", \noffice: " +
                  obj.role +
                  ", \nage: " +
                  obj.company +
                  "\n}."
                );
              }}
              color="info"
              className="like"
            >
              <Favorite />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            
            <Button
            label="test-button"
              justIcon
              round
              simple
              onClick={() => {
                let obj = outputs.find(o => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nFirst Name: " +
                  obj.first +
                  ", \nLast Name: " +
                  obj.last +
                  ", \nInitials: " +
                  obj.role +
                  ", \nCompany: " +
                  obj.company +
                  "\n}."
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
              
            </Button>{" "}
            
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                // var data = this.state.data;
                // data.find((o, i) => {
                //   if (o.id === key) {
                //     // here you should add some custom code so you can delete the data
                //     // from this component and from your server as well
                //     data.splice(i, 1);
                //     return true;
                //   }
                //   return false;
                // });
                // this.setState({ data: data });
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    })
    return outputs;
  }

  render() {
    const { classes, users } = this.props;
    const userData = this.data(users);
    console.log(userData)
    const data = this.derder(userData);
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


//compose 2 higher order components

export default compose(
  connect(mapStateToProps),
  firestoreConnect((state) => [
    { collection: 'users', where: ['company', '==', `${state.profile.company}`] },
  ]))(withStyles(styles)(ReactTables));
