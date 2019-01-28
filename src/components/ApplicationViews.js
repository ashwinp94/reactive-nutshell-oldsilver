import React, { Component } from "react";
import { Route } from "react-router-dom";
import TaskList from './task/TaskList'
import TaskManager from "../modules/TaskManager";

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
            return <TaskList tasks={this.state.tasks} />

            // Remove null and return the component which will show the user's tasks
          }}
        />
        
      </React.Fragment>
    );
  }
}
