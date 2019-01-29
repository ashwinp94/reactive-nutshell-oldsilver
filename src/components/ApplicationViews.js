import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessageList from './messages/MessageList'
import SendMessageForm from './messages/SendMessageForm'

export default class ApplicationViews extends Component {
  state = {
    newsitems: [],
    events: [],
    tasks: [],
    friends:[],
    messages: []
  }

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
            return <MessageList messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/messages" render={props => {
            return <SendMessageForm messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        
      </React.Fragment>
    );
  }
}
