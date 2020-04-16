import React, { Component, Fragment } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    return (
      <Fragment>
        <EventListItems></EventListItems>
        <EventListItems></EventListItems>
        <EventListItems></EventListItems>
      </Fragment>
    );
  }
}
export default EventList;
