import React, { Component, Fragment } from "react";
import EventDashboard from "../../Features/events/EventDashboard";
import NavBar from "../../Features/nav/NavBar";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
