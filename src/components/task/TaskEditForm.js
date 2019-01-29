import React, { Component } from 'react'
import TaskManager from "../../modules/TaskManager";

export default class TaskForm extends Component{
  state = {
    taskName:"",
    date:"",
    userId: 1
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    console.log(evt.target.id)
    this.setState(stateToChange)
  }
  // constructNewTask = evt => {
  //   evt.preventDefault()
  //       const tasks = {
  //           task: this.state.taskName,
  //           expectedCompletionDate:this.state.date,
  //           complete: false,
  //           userId:this.state.userId  
  //       }
  //         this.props.addTask(tasks).then(() => this.props.history.push("/tasks"));
  //   }
    componentDidMount(){
      TaskManager.get(this.props.match.params.taskId).then(task => {
        console.log(task)
        this.setState({
          taskName:task.task,
          date: task.expectedCompletionDate,
          userId: task.userId
        })
      })
    }
    updateExistingTask = evt => {
      evt.preventDefault()

      const existingTask = {
        task:this.state.taskName ,
        expectedCompletionDate: this.state.date,
        userId:this.state.userId
      }
      this.props.editTask(this.props.match.params.taskId, existingTask)
      .then(() => this.props.history.push("/tasks"))
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
                        value={this.state.taskName}
                        placeholder="New Task" />
              </div>
              <div className="form-group">
                  <label htmlFor="expectedCompletionDate">Expected Completion Date</label>
                  <input type="date" required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        value={this.state.date || ""}
                        id="date" 
                        placeholder="Completion Date" />
              </div>
              <button type="submit" onClick={this.updateExistingTask} className="btn btn-primary">Submit</button>
          </form>
        </>
    ) 
  }
}