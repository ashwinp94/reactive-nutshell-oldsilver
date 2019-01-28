import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EventForm from "./events/EventForm";
import EventList from "./events/EventList";
import EventManager from "../modules/EventManager"
export default class ApplicationViews extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    EventManager.getAll().then(events => {
      this.setState({
        events: events
      })
    })
  }

  //addEvent 

  //updateEvent 

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        
        {/*BEGIN EVENT ROUTING*/}
        <Route
          path="/events" render={props => {
            return <EventList events={this.state.events} />
          }}
        />

        {/*updateEvent route*/}
      </React.Fragment>
    );
  }
}
