import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessageList from './messages/MessageList'
import SendMessageForm from './messages/SendMessageForm'
import MessageManager from '../modules/MessageManager'

export default class ApplicationViews extends Component {
  state = {
    newsitems: [],
    events: [],
    tasks: [],
    friends:[],
    messages: []
  }

  deleteMessage = id => {
    return fetch(`http://localhost:5002/messages/${id}`, {
        method: "DELETE"
    })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/messages`))
        .then(e => e.json())
        .then(messages => this.setState({
            messages: messages
        })
        )
}
addMessage = newMessage => MessageManager.post(newMessage)
        .then(() => MessageManager.getAll())
        .then(message => this.setState({
            messages: message
        })
        )

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
            return <MessageList {...props} messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/messages" render={props => {
            return <SendMessageForm {...props} addMessage={this.addMessage}/>
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
