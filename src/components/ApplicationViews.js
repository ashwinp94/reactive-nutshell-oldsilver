import React, { Component } from "react";
import { Route } from "react-router-dom";
import TaskList from './task/TaskList'
import TaskManager from "../modules/TaskManager";
import TaskForm from './task/TaskForm'

export default class ApplicationViews extends Component {

  state= {
    tasks:[]
  }

  componentDidMount(){
    TaskManager.getAll().then(allTasks => {
      this.setState({
        tasks:allTasks
      })
    })
  }

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
        
      </React.Fragment>
    );
  }
}
