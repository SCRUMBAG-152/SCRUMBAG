import React from "react";
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Heading from "../../customs/components/Heading/Heading.jsx";
import GridContainer from "../../customs/components/Grid/GridContainer.jsx";
import GridItem from "../../customs/components/Grid/GridItem.jsx";
import Card from "../../customs/components/Card/Card.jsx";
import CardBody from "../../customs/components/Card/CardBody.jsx";

import buttonStyle from "../../customs/assets/jss/material-dashboard-pro-react/components/buttonStyle"
import { createEvent } from "../../store/actions/calendarActions";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      alert: null,
      bob: props
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  static getDerivedStateFromProps(props, state) {

    if ((state.events != props.events) && props.events) {
      return {
        events: props.events
      }
    }
    else {
      return null
    }
  }

  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Add New Event"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
        >
        </SweetAlert>
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
      dueDate: slotInfo.start,
    });
    var newEvent = {
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
      dueDate: slotInfo.start,
    }
    this.props.createEvent(newEvent)
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "azure");
    return {
      className: backgroundColor
    };
  }

  render() {

    return (
      <div>
        <Heading
          textAlign="center"
          title="Calendar"
        />
        {this.state.alert}
        <GridContainer justify="center">
          <GridItem xs={11} sm={10} md={9}>
            <Card>
              <CardBody calendar>
                <BigCalendar
                  selectable
                  localizer={localizer}
                  events={this.state.events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                  eventPropGetter={this.eventColors}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const events = state.firestore.ordered.events;
  const profile = state.firebase.profile
  try {
    {
      events && events.map(event => {
        event.start = event.start.toDate()
        event.end = event.end.toDate()
      })
    }
  } catch (err) {
    console.log(err)
  } finally {

  }

  return {
    events: events,
    profile: profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((state,props) => {
    return ([
      { collection: 'events', where: ['authorCompany', '==', `${state.profile.company}`] } ,
    ])
  }),
) (withStyles(buttonStyle)(Calendar))