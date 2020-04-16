import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "./EventForm";
class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList />
          </GridColumn>
          <GridColumn width={6}>
              <Button positive content='Create Event'></Button>
            <EventForm></EventForm>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}
export default EventDashboard;
