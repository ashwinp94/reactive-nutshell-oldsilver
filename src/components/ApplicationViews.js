import { Route } from "react-router-dom";
import React, { Component } from "react";
import MessageList from './messages/MessageList'
import SendMessageForm from './messages/SendMessageForm'
import MessageManager from '../modules/MessageManager'
import NewsManager from '../modules/NewsManager'
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm";
import EventForm from "./events/EventForm";
import EventList from "./events/EventList";
import EventManager from "../modules/EventManager";
import EventEdit from "./events/EventEdit"
export default class ApplicationViews extends Component {
  state = {
    newsitems: [],
    events: [],
    tasks: [],
    friends: [],
    messages: []
  }
  componentDidMount() {
    EventManager.getAll().then(events => {
      this.setState({
        events: events
      })
    })

    NewsManager.getAll().then(allNews => {
      this.setState({
        newsitems: allNews
      });
    });
    MessageManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages
      });
    });
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





  addEvent = (event) => EventManager.post(event)
    .then(() => EventManager.getAll())
    .then(events => this.setState({
      events: events
    })
    )

  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
    .then(() => EventManager.getAll())
    .then(events => {
      this.setState({
        events: events
      })
    })
  }
  deleteNews = id => {
    return fetch(`http://localhost:5002/newsitems/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/newsitems`))
      .then(response => response.json())
      .then(news =>
        this.setState({
          newsitems: news
        })
      );
  };

  addNews = Newnews =>
    NewsManager.post(Newnews)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          newsitems: news
        })
      );

  addMessage = (message) => MessageManager.post(message)
        .then(() => MessageManager.getAll())
        .then(messages => this.setState({
            messages: messages
        })
        )

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
                  return <NewsList newsitems={this.state.newsitems} />
                }} />
        <Route exact path="/news" render={(props) => {
          return <NewsList {...props} newsitems={this.state.newsitems}
            deleteNews={this.deleteNews} />
        }} />
        <Route path="/news/new" render={(props) => {
          return <NewsForm {...props} addNews={this.addNews} />
        }} />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <MessageList {...props} messages={this.state.messages} />
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/messages" render={props => {
            return <SendMessageForm {...props} addMessage={this.addMessage} />
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
        <Route exact path="/events" render={(props) => {
          return <EventList {...props}
            events={this.state.events} />
        }} />
        {/*addEvent route*/}
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props}
            addEvent={this.addEvent} />
        }} />
        {/*updateEvent route*/}
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEdit {...props} updateEvent={this.updateEvent}/>
        }} />
      </React.Fragment>
    )
  }
}
