import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import TaskList from './task/TaskList'
import TaskManager from "../modules/TaskManager";
import TaskForm from './task/TaskForm'
import TaskEditForm from './task/TaskEditForm'
import MessageList from './messages/MessageList'
import SendMessageForm from './messages/SendMessageForm'
import MessageManager from '../modules/MessageManager'
import NewsManager from '../modules/NewsManager'
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm";
import EventForm from "./events/EventForm";
import EventList from "./events/EventList";
import EventManager from "../modules/EventManager";
import EventEdit from "./events/EventEdit";
import Login from "./authentication/Login"
export default class ApplicationViews extends Component {
   // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    
    state = {
      newsitems: [],
      events: [],
      tasks:[],
      messages:[]
    };

    componentDidMount() {
      EventManager.getAll().then(events => {
        this.setState({
          events: events
        })
      })

      TaskManager.getAll().then(allTasks => {
        this.setState({
          tasks:allTasks
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

    //MESSAGES
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
    
    //EVENTS
    addEvent = (event) => EventManager.post(event)
    .then(() => EventManager.getAll())
    .then(events => this.setState({
          events:events
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

    //TASKS
    addTask = (task) => TaskManager.postNewTask(task)
      .then(() => TaskManager.getAll())
      .then(task => this.setState({
          tasks: task
        })
      )
    deleteTask = (id) => {
        return TaskManager.deleteTask(id)
        .then(task => this.setState({
          tasks: task
        }))
      }
    editTask = (taskId, existingObj) => {
        return TaskManager.editTask(taskId, existingObj)
        .then(() => TaskManager.getAll())
        .then(tasks => {
          this.setState({
            tasks:tasks
          })
        })
      }
    
    //NEWS
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

           {/*BEGIN NEWS ROUTING*/}
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
            return <NewsForm {...props}   
            addNews={this.addNews}/>
                  }} />

           {/*BEGIN FRIENDS ROUTING*/}
          <Route
            path="/friends" render={props => {
              return null
              // Remove null and return the component which will show list of friends
            }}
          />

           {/*BEGIN MESSAGES ROUTING*/}
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

           {/*BEGIN TASKS ROUTING*/}
          <Route exact path="/tasks" render={(props) => {
              if (this.isAuthenticated()) {
                return <TaskList {...props}
                                 tasks={this.state.tasks} 
                                 deleteTask={this.deleteTask} />
              } else {
                return <Redirect to="/login" />
              }
          }} />

          <Route 
            path="/tasks/new" render={(props) => {
              return <TaskForm {...props}
                addTask={this.addTask} 
                tasks={this.state.tasks}
                />
                }} />

          <Route exact path='/tasks/:taskId(\d+)/edit' render={(props => {
              return <TaskEditForm {...props} 
              editTask = {this.editTask}/>
            })} />

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
            return <EventForm {...props}
              addEvent={this.addEvent} />
          }} />

          <Route path="/events/:eventId(\d+)/edit" render={props => {
            return <EventEdit {...props} updateEvent={this.updateEvent}/>
          }} />
        </React.Fragment>
      )
    }
  }