import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <List>
        <Image
          as="a"
          size="mini"
          circular
          src={"https://randomuser.me/api/portraits/women/42.jpg"}
        ></Image>
      </List>
    );
  }
}
export default EventListAttendee;
