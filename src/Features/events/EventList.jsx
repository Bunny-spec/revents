import React, { Component, Fragment } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <EventListItems
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          ></EventListItems>
        ))}

        {/* <EventListItems></EventListItems>
        <EventListItems></EventListItems> */}
      </Fragment>
    );
  }
}
export default EventList;
