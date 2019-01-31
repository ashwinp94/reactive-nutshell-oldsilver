import React, { Component } from 'react'
import TaskManager from '../../modules/TaskManager';

export default class TaskForm extends Component{
  state = {
    taskName:"",
    date:"",
    complete:false,
    userId: 1
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    console.log(evt.target.id)
    this.setState(stateToChange)
  }
  
  constructNewTask = evt => {
    evt.preventDefault()
        const tasks = {
            task: this.state.taskName,
            expectedCompletionDate:this.state.date,
            complete: this.state.complete,
            userId:this.state.userId  
        }
          this.props.addTask(tasks)
          .then(() => this.props.history.push("/tasks"))
          // .then(() => TaskManager.getAll());
    }
  render(){
    return(
        <>
          <form className="taskForm">
              <div className="form-group">
                  <label htmlFor="task">Task Name</label>
                  <input type="text" required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder="New Task" />
              </div>
              <div className="form-group">
                  <label htmlFor="expectedCompletionDate">Expected Completion Date</label>
                  <input type="date" required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="date" 
                        placeholder="Completion Date" />
              </div>
              <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
          </form>
        </>
    ) 
  }
}