import React, { Component } from 'react'

export default class TaskForm extends Component{
  state = {
    task:"",
    expectedCompletionDate:"" 
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
//   constructNewTask = evt => {
//     evt.preventDefault()
//     if (this.state.task === "") {
//         window.alert("Please enter a task")
//     } else {
//         const task = {
//             name: this.state.taskName,
//             expectedCompletionDate:this.state.expectedCompletionDate
//         }
//     }
// }

  render(){
    return(
        <>
          <form className="taskForm">
              <div className="form-group">
                  <label htmlFor="taskName">Task Name</label>
                  <input type="text" required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder="New Task" />
              </div>
              <div className="form-group">
                  <label htmlFor="expected-completion-date">Expected Completion Date</label>
                  <input type="date" required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="date" placeholder="Completion Date" />
              </div>
              <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
          </form>
        </>
    ) 
  }
}