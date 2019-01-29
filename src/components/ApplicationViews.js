import React, { Component } from "react";
import { Route } from "react-router-dom";
import TaskList from './task/TaskList'
import TaskManager from "../modules/TaskManager";
import TaskForm from './task/TaskForm'

import EventForm from "./events/EventForm";
import EventList from "./events/EventList";
import EventManager from "../modules/EventManager";
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
    
    TaskManager.getAll().then(allTasks => {
      this.setState({
        tasks:allTasks
      })
    })

  }

  addEvent = (event) => EventManager.post(event)
    .then(() => EventManager.getAll())
    .then(events => this.setState({
          events: events
      })
    )

  //updateEvent 

  state= {
    tasks:[]
  }

  componentDidMount(){


  deleteTask = (id) => {
    return TaskManager.deleteTask(id)
    .then(task => this.setState({
    tasks:task
    })
    )
  }


  addTask = (task) => TaskManager.postNewTask(task)
  .then(() => TaskManager.getAll())
  .then(task => this.setState({
      tasks: task
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
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route exact path="/tasks" render={(props) => {
          return <TaskList {...props}
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask} />
      }} />
        <Route 
          path="/tasks/new" render={(props) => {
            return <TaskForm {...props}
              addTask={this.addTask} 
              tasks={this.state.tasks}
              />
              }} />
        
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
      </React.Fragment>
    )
  }
}
