import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import TaskList from './task/TaskList'
import TaskManager from "../modules/TaskManager";
import TaskForm from './task/TaskForm'
import TaskEditForm from './task/TaskEditForm'

import SendMessageForm from './messages/SendMessageForm'
import MessageList from './messages/MessageList'
import MessageManager from '../modules/MessageManager'

import NewsManager from '../modules/NewsManager'
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm";

import EventForm from "./events/EventForm";
import EventList from "./events/EventList";
import EventManager from "../modules/EventManager";
import EditMessage from "./messages/EditMessage"
import FriendsForm from "./friends/FriendsForm"
import EventEdit from "./events/EventEdit";
import Login from "./authentication/Login"
export default class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null
  state = {
    newsitems: [],
    events: [],
    tasks:[],
    messages:[],
    userId: 1
  };

  componentDidMount() {
    EventManager.getAll().then(events => {
      this.setState({
        events: events
      })
    })
    //onComponentDidMount we are filtering through the database and only showing tasks with the value of false
    //all the true/ completed tasks remain in the database
    TaskManager.getAll()
    .then(allTasks => {
      let filteredTasks = allTasks.filter(task => {
        return task.complete === false
      })
      this.setState({
        tasks:filteredTasks
        })
      })

    NewsManager.getYourNews(this.state.userId).then(allNews => {
      this.setState({
        newsitems: allNews
      });

      MessageManager.getAll().then(allMessages => {
        this.setState({
          messages: allMessages
        });
      });
    });
  }

//=============================Add functions=============================//
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
  addNews = Newnews =>
  NewsManager.post(Newnews)
    .then(() => NewsManager.getAll())
    .then(news =>
      this.setState({
        newsitems: news
      })
    );

  addTask = (task) => TaskManager.postNewTask(task)
  .then(() => TaskManager.getAll())
  .then(allTasks => {
    let filteredTasks = allTasks.filter(task => {
      return task.complete === false
    })
    this.setState({
      tasks:filteredTasks
    })
  })
  //=============================Delete functions=============================//
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
//============================Edit  functions=============================//
  editTask = (taskId, existingObj) => {
    return TaskManager.editTask(taskId, existingObj)
    .then(() => TaskManager.getAll())
    .then(tasks => {
      this.setState({
        tasks:tasks
      })
    })
  }
//=============================Update Functions=============================//
  updateTasksList = (taskId, existingObj) => {
    return TaskManager.getAllNonCompletedTasks(taskId, existingObj)
    .then(() => TaskManager.getAll())
    .then(allTasks => {
      let filteredTasks = allTasks.filter(task => {
        return task.complete === false
      })
      this.setState({
        tasks:filteredTasks
        })
      })
  }
  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
    .then(() => EventManager.getAll())
    .then(events => {
      this.setState({
        events: events
      })
    })
  }

  updateMessage = (messageId, editedMessageObj) => {
    return MessageManager.put(messageId, editedMessageObj)
    .then(() => MessageManager.getAll())
    .then(message => {
      this.setState({
        messages: message
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        {/*landing page will be either login or news depending on credentials*/}
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}  
              newsitems={this.state.newsitems}              
              deleteNews={this.deleteNews} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
          <Route exact path="/news" render={(props) => {
            if (this.isAuthenticated()) {
                return <NewsList {...props}  
                  newsitems={this.state.newsitems}              
                  deleteNews={this.deleteNews} />
            } else {
              return <Redirect to="/login" />
            }
          }} />
          <Route path="/news/new" render={(props) => {
            if (this.isAuthenticated()) {
              return <NewsForm {...props}
                addNews={this.addNews}/>
            } else {
              return <Redirect to="/login" />
            }
          }} />

          <Route path="/friends" render={props => {
            if (this.isAuthenticated()) {
              return null
              // Remove null and return the component which will show list of friends
            } else {
              return <Redirect to="/login" />
            }
            }} />

            <Route exact path="/messages" render={props => {
              if (this.isAuthenticated()) {
                return <MessageList {...props} messages={this.state.messages} />
              } else {
                return <Redirect to="/login" />
              }
            }} />

          <Route exact path="/messages" render={props => {
              if (this.isAuthenticated()) {
                return <SendMessageForm {...props} addMessage={this.addMessage} />
              } else {
                return <Redirect to="/login" />
              }
            }} />

          <Route exact path="/tasks" render={(props) => {
              if (this.isAuthenticated()) {
                return <TaskList {...props}
                  tasks={this.state.tasks} 
                  updateTasksList={this.updateTasksList} />
              } else {
                return <Redirect to="/login" />
              }
          }} />
          <Route 
            path="/tasks/new" render={(props) => {
              if (this.isAuthenticated()) {
                return <TaskForm {...props}
                  addTask={this.addTask}
                  tasks={this.state.tasks} />
              } else {
                return <Redirect to="/login" />
              }
          }} />

        <Route exact path="/messages/:messageId(\d+)/edit" render={props => {
          if (this.isAuthenticated()) {
            return <EditMessage {...props} updateMessage={this.updateMessage} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        {/*BEGIN EVENT ROUTING*/}
        <Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventList {...props}
              events={this.state.events} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/events/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventForm {...props}
              addEvent={this.addEvent} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/events/:eventId(\d+)/edit" render={props => {
          if (this.isAuthenticated()) {
            return <EventEdit {...props} updateEvent={this.updateEvent} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      </React.Fragment>
    )
  }
}
