import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessageList from './messages/MessageList'
import MessageManager from "../modules/MessageManager";
import SendMessageForm from "./messages/SendMessageForm"
import Title from "./messages/Title"

export default class ApplicationViews extends Component {
  state = {
    newsitems: [],
    events: [],
    tasks: [],
    friends:[],
    messages: []
  }

  componentDidMount() {
    // Example code. Make this fit into how you have written yours.
    MessageManager.getAll().then(allMessages => {
        this.setState({
            messages: allMessages
        })
    })
  }

  addMessage = (message) => MessageManager.post(message)
        .then(() => MessageManager.getAll())
        .then(messages => this.setState({
            messages: messages
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
            return <MessageList messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />
         <Route path="/messages" render={(props) => {
                    return <SendMessageForm {...props}
                        // addAnimal={this.addAnimal}
                        messages={this.state.messages} />
                }} />

<Route path="/messages" render={(props) => {
                    return <Title {...props}
                        // addAnimal={this.addAnimal}
                        messages={this.state.messages} />
                }} />

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
